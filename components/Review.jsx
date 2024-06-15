'use client';
import Image from 'next/image';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle, 
} from '@/components/ui/card';
// swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
//import required modules
import {Pagination} from 'swiper/modules';
// import swiper react component
import {Swiper, SwiperSlide} from 'swiper/react'

const reviewData = [
    {
        avatar:'/reviews/avatar-1.png',
        name: 'Ujang Supriatna',
        job: 'Tukang Roti',
        review: 'Roti Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium officiis at pro'
    },
    {
        avatar:'/reviews/avatar-2.png',
        name: 'Ucup Sarucup',
        job: 'Tukang Baso',
        review: 'Baso Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium officiis at pro'
    },
    {
        avatar:'/reviews/avatar-3.png',
        name: 'Otong Surotong',
        job: 'Tukang Emas',
        review: 'Emas Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium officiis at pro'
    },
    {
        avatar:'/reviews/avatar-4.png',
        name: 'Eceu Geulis',
        job: 'Tukang Buah',
        review: 'Buah Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium officiis at pro'
    },
    {
        avatar:'/reviews/avatar-5.png',
        name: 'Stephani McGuire',
        job: 'Tukang Berlian',
        review: 'Berlian Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium officiis at pro'
    },
    {
        avatar:'/reviews/avatar-6.png',
        name: 'Michelle Muller',
        job: 'PNS',
        review: 'PNS Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium officiis at pro'
    },

]

const Review = () => {
  return (
    <section className='mb-12 xl:mb-32'>
        <div className="container mx-auto">
            <h2 className='section-title mb-12 text-center mx-auto'>Review</h2>
            {/* slider */}
            <Swiper
              slidesPerView={1}
              breakpoints={{
                640: {slidesPerView:2},
                1400: {slidesPerView:3},
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{
                clickable: true
              }}
              className='h-[350px]'
            >
                {reviewData.map((person, i)=> {
                    return(
                        <SwiperSlide key={i}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0 mb-10'>
                              <div className='flex items-center gap-x-4'>
                                {/* image */}
                                <Image
                                 src={person.avatar}
                                 alt='img-review'
                                 width={70}
                                 height={70}
                                 priority
                                />
                                {/* name */}
                                <div className='flex flex-col'>
                                    <CardTitle>{person.name}</CardTitle>
                                    <p>{person.job}</p>
                                </div>
                              </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Review