import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='p-2'>
        <h1 className=' text-xl font-semibold'>What's this?</h1>
        <p>
          {' '}
          An empty customisable, reusable, responsive sidebar navigation
          template ready for use.
        </p>

        <h2 className='mt-12 text-xl font-semibold'>Why?</h2>
        <ul>
          I wanted:
          <li className='list-disc'>
            to wrap my head around some typescript stuff. Success? Yes.
          </li>
          <li className='list-disc'>
            to have a customisable sidebar component ready for use with SUB-menu
            items, not just menu items, for a bunch of project ideas that are
            going to need one. Success? So far so good.
          </li>
          <li className='list-disc'>
            to experiment with framer-motion to have a fancy animation when
            mobile menu opens and closes
          </li>
        </ul>

        <h2 className='mt-12 text-xl font-semibold'>Mini-docs</h2>
        <p>(Notes to myself)</p>
        <p>No dark mode (yet). Work in progress.</p>

        <ul className='mt-4 flex flex-col gap-4'>
          {/* CONTENT */}
          <h3 className='underline'>Content:</h3>
          <li className='list-disc'>
            Customise sidebar menu items/subitems & icons by
            <p>
              &rarr; adding menu items in relevant
              app/newItemFolder/newSubItemFolder etc...{' '}
            </p>
            <p></p>
            <p>
              &rarr; in constants.tsx, which contains array of SIDENAV_ITEMS
              objects.{' '}
            </p>
          </li>

          {/* STYLING */}
          <h3 className='underline'>Styling:</h3>

          <li className='list-disc'>
            Customise sidebar width: current width set to md:w-[16rem] (256px).
            If for example a menu item is too long to fit, change width in
            tailwind classes in 2 places (width needs to match in both places):
            <p>&rarr; in outer div of SideNav.tsx</p>
            <p>&rarr; in Margin-width-wrapper.tsx</p>
          </li>

          <li className='list-disc'>
            Customise highlight colours: set 'primary' color in
            tailwind.config.ts. Current styles set to:
            {/* SIDENAV */}
            <h4 className='underline'>Desktop nav (SideNav.tsx):</h4>
            <ul className='pl-6'>
              <li className='list-disc'>
                menu items (--active & --hover): bg-primary-200
              </li>
              <li className='list-disc'>
                menu subItems (--active & --hover): text-primary-400
              </li>
            </ul>
            {/* MOBILE NAV */}
            <h4 className='underline'>Mobile nav (Header-mobile.tsx)</h4>
            <ul className='pl-6'>
              <li className='list-disc'>
                menu items (--active & --hover): text-primary-500
              </li>

              <li className='list-disc'>
                menu subItems (--active & --hover): text-primary-500
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
