import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className=" transition-colors duration-1000 flex flex-col pt-2 px-4 space-y-2 bg-zinc-100 grow pb-4  dark:bg-ebony-black text-gray-900 dark:text-white">
      {children}
    </div>
  );
}
