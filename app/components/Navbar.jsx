import React from 'react'
import { styles } from '../style'
import { navbarElement } from '../constant'
import Link from 'next/link'

const Navbar = () => {
  return (
    <section className='bg-violet-500'>
      <nav className='container flex items-center py-4 mt-4 sm:mt-12 '>
        <div className='py-1'>
          <img height={'50px'} width={'90px'} src='https://www.freepnglogos.com/uploads/genshin-impact-logo-png/genshin-impact-shadow-logo-by-kurikuo-steamgriddb-4.png' />
        </div>
        <ul className='hidden sm:flex flex-1 justify-end items-center gap1-2 text-blue uppercase text-xs'>
          {
            navbarElement.map((nav, index) => (
              <li className='px-2 cursor-pointer'><Link href={nav.link}>{nav.name}</Link></li>
 
            ))

          }
          <button type='button' className='bg-sky-600 text-white rounded-md px-7 py-3'>Login</button>
        </ul>
        {/* this render contain that it will change to the icons whenever the it has smaller screen */}
        <div className='flex sm:hidden flex-1 justify-end'>
          <i class="fa-solid fa-bars text-2xl"></i>

        </div>
        {/* <div className='flex xl:hidd en flex-1 justify-end'>
         it appears
        </div> */}
      </nav>
    </section>
  )
}

export default Navbar  