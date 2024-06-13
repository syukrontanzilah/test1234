'use client'
import React, {useState, useEffect} from 'react'
import Logo from './Logo';
import Nav from './Nav';
import NavMobile from './NavMobile';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <header>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
              <Logo/>
              <div className='flex items-center gap-x-6'>
                {/* navbar web */}
                <Nav containerStyles='hidden xl:flex gap-x-8 items-center'/>
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