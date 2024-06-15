'use client';
import Link from "next/link";
import {Button} from'./ui/button';

// swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
//import required modules
import {Pagination} from 'swiper/modules';
import ProjectCard from "./ProjectCard";
// import swiper react component
import {Swiper, SwiperSlide} from 'swiper/react'

const projectData = [
    {
        image:'/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'NexaLorem ipsum dolor sit amet consectetur adipisicing elit',
        link: '/',
        github: '/'
    },
    {
        image:'/work/2.png',
        category: 'next js',
        name: 'Udin Website',
        description: 'Udin Lorem ipsum dolor sit amet consectetur adipisicing elit',
        link: '/',
        github: '/'
    },
    {
        image:'/work/1.png',
        category: 'next js',
        name: 'Kamu nanya Website',
        description: 'Kamu nanya Lorem ipsum dolor sit amet consectetur adipisicing elit',
        link: '/',
        github: '/'
    },
    {
        image:'/work/4.png',
        category: 'react native',
        name: 'Mobilio honda nih',
        description: 'Mobilio Lorem ipsum dolor sit amet consectetur adipisicing elit',
        link: '/',
        github: '/'
    },
    {
        image:'/work/3.png',
        category: 'react native',
        name: 'Bayy mobile',
        description: 'Bayy Lorem ipsum dolor sit amet consectetur adipisicing elit',
        link: '/',
        github: '/'
    },
    {
        image:'/work/1.png',
        category: 'react js',
        name: 'Becanda aja website',
        description: 'Becyandaa Lorem ipsum dolor sit amet consectetur adipisicing elit',
        link: '/',
        github: '/'
    },
    {
        image:'/work/1.png',
        category: 'react js',
        name: 'Test aja sih ini mah',
        description: 'Test aja Lorem ipsum dolor sit amet consectetur adipisicing elit',
        link: '/',
        github: '/'
    },
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0  xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
            <h2 className="section-title mb-4">Latest Projects</h2>
            <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link href={'/projects'}>
                <Button>All Projects</Button>
            </Link>
        </div> 
          {/*slider nih */}
          <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
            <Swiper 
            className="h-[480px]" 
            slidesPerView={1}
            breakpoints={{
              640:{
                slidesPerView:2
              }  
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{clickable: true}}
            >
                {/* swiper apply first 4 project */}
                {projectData.slice(0,4).map((proj, i)=> {
                    return(
                        <SwiperSlide key={i}>
                          <ProjectCard project={proj} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
          </div>
        </div>
    </section>
  )
}

export default Work