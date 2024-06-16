import React from 'react'
import Link from 'next/link';
import {Button} from './ui/button';
import {Download, Send} from 'lucide-react';
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className='container mx-auto'>
            <div className='flex justify-between gap-x-8'>
                {/* text */}
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center-imp xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
                        Frontend Developer
                    </div>
                    <h1 className='h1 mb-4'>Hi, my name is Syukron Tanzil</h1>
                    <p className='subtitle max-w-[498px] mx-auto xl:mx-0'>Brief description with insights into myself, my vocational journey, and what I engage in professionally</p>

                    {/* image in mobile */}
                  <div className='xl:hidden bg-pink-0 mb-50 mt-[-20px] '>
                   <div className='xl:hidden justify-center flex relative'>
                    {/* badge 1 */}
                    <Badge 
                      containerStyles='absolute top-[65%] -right-[-1rem] '
                      icon={<RiBriefcase4Fill/>}
                      endCountNum={2}
                      endCountText=""
                      badgeText={'Years of experience'}
                    />
                    {/* badge 2 */}
                    <Badge 
                      containerStyles='absolute top-[84%] -left-[0rem]'
                      icon={<RiTodoFill/>}
                      endCountNum={10}
                      endCountText ={''}
                      badgeText={'Finished Project'}
                    />
                  <div 
                  // className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'
                  // className='
                  // bg-hero_shape2_light dark:bg-hero_shape2_dark w-[420px] h-[480px] bg-no-repeat absolute -top-0 -right-0'

                  >
                <DevImg 
                // containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' 
                // imgSrc='/hero/developer.png'

                containerStyles='w-[335px] h-[385px] bg-no-repeat relative bg-bottom mt-10' 
                imgSrc='/hero/profile4.png'
                />
                  </div>
                </div>  
                  </div>
                    {/* button */}
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                      <Link href={'/contact'}>
                        <Button className='gap-x-2'>Contact me <Send size={18}/></Button>
                      </Link>
                      <Button variant='secondary' className='gap-x-2'>Download CV <Download size={18}/></Button>
                    </div>
                    {/* sosmed */}
                    <Socials
                    containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                    iconStyles = 'text-foreground text-[22px] hover:text-primary transition-all'
                    />
                </div>
                {/* image */}
                <div className='hidden xl:flex relative'>
                    {/* badge 1 */}
                    <Badge 
                      containerStyles='absolute top-[65%] -right-8'
                      icon={<RiBriefcase4Fill/>}
                      endCountNum={2}
                      endCountText=""
                      badgeText={'Years of experience'}
                    />
                    {/* badge 2 */}
                    <Badge 
                      containerStyles='absolute top-[84%] -left-[35rem]'
                      icon={<RiTodoFill/>}
                      endCountNum={10}
                      endCountText ={''}
                      badgeText={'Finished Project'}
                    />
                  <div 
                  // className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'
                  className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[495px] h-[428px] bg-no-repeat absolute -top-1 -right-2'
                  >
                <DevImg 
                // containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' 
                // imgSrc='/hero/developer.png'

                containerStyles='w-[393px] h-[455px] bg-no-repeat relative bg-bottom' 
                imgSrc='/hero/profile4.png'
                />
                  </div>
                </div>
            </div>
            {/* icon */}
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary'/>
            </div>
        </div>

                 
    </section>
  )
}

export default Hero