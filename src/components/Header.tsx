'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '../hooks/use-scroll';
import { cn } from '../lib/utils';
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <nav
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-slate-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="transition-colors duration-1000 flex h-[47px] items-center justify-between px-4 bg-mist-gray dark:bg-anthracite-gray">
        {/* LOGO */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="h-7 w-7 bg-primary rounded-lg"></span>
            <span className="font-bold text-xl flex">Logo</span>
          </Link>
        </div>

        {/* PROFILE */}
        <div className="flex flex-row-auto">
          <div className="hidden md:block">
            <div className="h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center text-lg ">
              <ThemeToggle />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center text-lg ">
              <span className="font-semibold text-sm ">AM</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
