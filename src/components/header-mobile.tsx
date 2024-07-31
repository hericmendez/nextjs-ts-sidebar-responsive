'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDENAV_ITEMS } from '../constants';
import { SideNavItem, MenuItemWithSubMenuProps } from '../types';
import { Icon } from '@iconify/react';
import { motion, useCycle } from 'framer-motion';

// returning current dimension of the screen
const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

// sidebar
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: (height = 1000) => ({
    clipPath: `circle(0px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
};

// variants
const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

// motion when opens and closes
const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className='flex w-full text-2xl'
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className='flex flex-row justify-between w-full items-center'>
            <span
              className={`${pathname.includes(item.path) ? 'font-bold' : ''}`}
            >
              {item.title}
            </span>
            <div className={`${subMenuOpen && 'rotate-180'}`}>
              <Icon icon='lucide:chevron-down' width='24' height='24' />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className='mt-2 ml-2 flex flex-col space-y-2'>
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem, subIndex) => {
              return (
                <MenuItem key={subIndex}>
                  <Link
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                    onClick={() => toggleOpen()}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className='pointer-events-auto absolute right-4 top-[14px] z-30'
  >
    <Icon icon='lucide:menu' width='24' height='24' />
  </button>
);

export default function HeaderMobile() {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? '' : 'pointer-events-none'
      }`}
      ref={containerRef}
    >
      <motion.div
        variants={sidebar}
        className='absolute inset-0 right-0 w-full bg-white'
      />

      <motion.ul
        variants={variants}
        className='absolute grid w-full gap-3 px-10 py-16 max-h-screen overflow-y-auto'
      >
        {SIDENAV_ITEMS.map((item, i) => {
          const isLastItem = i === SIDENAV_ITEMS.length - 1; // check if last item for differens styling
          return (
            <div key={i}>
              {item.submenu ? (
                <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
              ) : (
                <MenuItem>
                  <Link
                    href={item.path}
                    onClick={() => toggleOpen()}
                    className={`flex w-full text-2xl ${
                      item.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                </MenuItem>
              )}

              {!isLastItem && (
                <MenuItem className='my-3 h-px w-full bg-gray-300' />
              )}
            </div>
          );
        })}
      </motion.ul>

      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
}
