import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        <p>
          {' '}
          This is an empty customisable, responsive template ready for use.
        </p>

        <p>No dark mode set up yet.</p>
        <h1 className='mt-12 text-xl font-semibold'>Mini-docs</h1>
        <ul className='py-2 '>
          <li className='list-item'>
            <span>&rarr;</span> Customise sidebar menu by adding menu items in
            relevant app/newItemFolder etc... and in constants.tsx.
          </li>
          <li>
            <span>&rarr;</span> current sidebar width set to md:w-[16rem]
            (256px). Change tailwind classes in 2 places: outer div of
            SideNav.tsx and Margin-width-wrapper.tsx
          </li>
          <li>
            <span>&rarr;</span> Highlight colours: customise in
            tailwind.config.ts
            <div className='pl-6'>
              <li className='list-disc'>
                menu items (--active & --hover): set to bg-primary-300{' '}
              </li>
              <li className='list-disc'>
                menu subItems (--active & --hover): set to bg-primary-100{' '}
              </li>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
