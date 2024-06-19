'use client';
import Link from "next/link";
import {Button} from'./ui/button';

// swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
//import required modules
import {Pagination, Autoplay} from 'swiper/modules';
import ProjectCard from "./ProjectCard";
// import swiper react component
import {Swiper, SwiperSlide} from 'swiper/react'
import { projectData } from "./DummyData";


const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[350px] mx-auto xl:mx-0  xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
            <h2 className="section-title mb-4">Latest Projects</h2>
            <p className="subtitle mb-8">Below are the applications that I have completed</p>
            <Link href={'/projects'}>
                <Button>All Projects</Button>
            </Link>
        </div> 
          {/*slider nih */}
          <div className=" xl:max-w-[1000px] xl:absolute right-0 top-0 xl:pr-[5%]">
            <Swiper 
            className="h-[480px]" 
            slidesPerView={1}
            breakpoints={{
              640:{
                slidesPerView:2
              }  
            }}
            spaceBetween={30}
            modules={[Autoplay,Pagination]}
            pagination={{clickable: true}}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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