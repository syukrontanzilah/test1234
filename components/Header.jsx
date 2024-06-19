'use client'
import { usePathname } from 'next/navigation';
import React, {useState, useEffect} from 'react';
import Logo from './Logo';
import Nav from './Nav';
import NavMobile from './NavMobile';
import ThemeToggler from './ThemeToggler';

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();
    console.log('path name ==>', pathname);

useEffect(()=>{
    const scrollYPos = window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })
    //romove event
    return () => window.removeEventListener('scroll', scrollYPos);
},[])

  return (
    <header className={`${
        header ? 
        'py-4 bg-white shadow-lg dark:bg-secondary' : 
        'py-6 dark:bg-transparent'
        } sticky top-0 z-30 transition-all
        ${pathname === '/' && 'bg-[#fef9f5]'}
        `}>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
              <Logo/>
              <div className='flex items-center gap-x-6'>
                {/* navbar web */}
                <Nav 
                containerStyles='hidden xl:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all'
                underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'/>
                <ThemeToggler/> 
                {/* navbar mobile */}
                <div className='xl:hidden'>
                    <NavMobile/>
                </div>                 
              </div>
            </div>
        </div>

    </header>
  )
}

export default Header