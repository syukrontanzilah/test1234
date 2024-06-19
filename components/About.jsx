import DevImg, { DevImgAbout } from "./DevImg";
import Image from "next/image";
import {
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger
} from '@/components/ui/tabs'
import {
    GraduationCap,
    Briefcase,
    Dot
} from 'lucide-react'
import Tools from "./Tools";
import { qualificationData } from "./DummyQualificationData";
import { skillData } from "./DummySkillData";
import { infoData } from "./DummyInfoData";

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }
    console.log('skill data', skillData)
  return (
    <section className="xl:h-[860px] pb-0 xl:py-0 mt-24 xl:mt-48 mb-24 xl:mb-0">
        <div className="container m-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me
            </h2>
            <div className="flex flex-col xl:flex-row">
                {/* image */}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImgAbout containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative flex items-center justify-center' 
                    imgSrc={'/about/working.png'}
                    height={455}
                    width={393}
                    />
                </div>

                {/* tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full xl:grid xl:grid-cols-3 xl:max-w-[520px] border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger  className='w-[162px] xl:w-auto'value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger  className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tab content */}
                        <div className="text-lg mt-12 xl:mt-8">
                            {/* personal */}
                            <TabsContent value='personal'>
                              <div className="">
                                <h3 className="h3 mb-4">Experienced for more than 2 years</h3>
                                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                    I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.
                                </p>
                                {/* icon */}
                                <div 
                                // className="grid xl:grid-cols-2 gap-4 mb-12"
                                className=" xl:grid xl:grid-cols-2 gap-4 mb-12"
                                >
                                  {infoData.map((item, i)=>{
                                    return(
                                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={i}>
                                         <div className="text-primary">{item.icon}</div>
                                         <div>{item.text}</div>
                                        </div>
                                    )
                                  })}
                                </div>
                                {/* language */}
                                <div className="flex flex-col gap-y-2">
                                    <div className="text-primary">Language</div>
                                    <div className="border-b border-border">Indonesia, Arab, English</div>
                                </div>
                              </div>
                            </TabsContent>
                            {/* qualifications */}
                            <TabsContent value='qualifications'>
                              <div>
                                <h3 className="h3 mb-8 text-left">My journey</h3>
                                {/* experience & education wrapper */}
                                <div className="grid md:grid-cols-2 gap-y-8">
                                    {/* experience */}
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase/>
                                            <h4 className='capitalize font-medium'>
                                                {getData(qualificationData, 'experience').title}
                                            </h4>
                                        </div>
                                        {/* list */}
                                        <div className="flex flex-col gap-y-6">
                                          {getData(qualificationData, 'experience').data.map((item, i)=>{
                                            const {company, role, years} = item;
                                            return(
                                              <div 
                                              className="flex gap-x-8 group "
                                              key={i}>
                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-xl leading-none mb-1">{company}</div>
                                                    <div className="text-lg leading-none text-muted-foreground mb-2">{role}</div>
                                                    <div className="text-base font-medium">{years}</div>
                                                </div>
                                              </div>
                                            )
                                          })}
                                        </div>
                                    </div>
                                    {/* education */}
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <GraduationCap size={28}/>
                                            <h4 className='capitalize font-medium'>
                                                {getData(qualificationData, 'education').title}
                                            </h4>
                                        </div>
                                        {/* list */}
                                        <div className="flex flex-col gap-y-6">
                                          {getData(qualificationData, 'education').data.map((item, i)=>{
                                            const {university, qualification, years} = item;
                                            return(
                                              <div 
                                              className="flex gap-x-8 group "
                                              key={i}>
                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-xl leading-none mb-1">{university}</div>
                                                    <div className="text-lg leading-none text-muted-foreground mb-2">{qualification}</div>
                                                    <div className="text-base font-medium">{years}</div>
                                                </div>
                                              </div>
                                            )
                                          })}
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </TabsContent>
                            {/* skills and tools*/}
                            <TabsContent value='skills'>
                               <div className="xl:text-left">
                                <h3 className="h3 mb-8">Skills I have</h3>
                                {/* skills */}
                                <div className="mb-16">
                                    <h4 className="text-xl font-semibold mb-2 text-primary">Skills</h4>
                                    <div className="border-b border-border mb-4"></div>
                                    {/* skill list */}
                                    <div className="grid md:grid-cols-2 gap-y-0">
                                        {getData(skillData, 'skills').data.map((item, i)=> {
                                            const {name} = item
                                            return(
                                                <div className="flex w-3/4 xl:text-left  xl:mx-0" key={i}>
                                                <Dot />
                                                 <div className="font-medium">{name}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* tools */}
                                <div>
                                    <h4 className="text-xl font-semibold mb-2 xl:text-left text-primary">Tools & Framework</h4>
                                    <div className="border-b border-border mb-4"></div>
                                    {/* tools list */}
                                    {/* <div className="flex gap-x-8 justify-center xl:justify-start">
                                    {getData(skillData, 'tools').data.map((item, i)=> {
                                            const {imgPath} = item
                                            return(
                                                <div className="" key={i}>
                                                 <Image
                                                 src={imgPath}
                                                 width={48}
                                                 height={48}
                                                 alt="ico"
                                                 priority
                                                 />
                                                </div>
                                            )
                                        })}
                                    </div> */}
                                    {/* tools */}
                                    <div className="">
                                         <Tools
                                        containerStyles='flex gap-x-6 mx-auto xl:mx-0 flex-wrap'
                                        iconStyles = 'text-foreground text-[35px] mb-2 '
                                        />   
                                    </div>
                                
                                </div>
                               </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
              {/* image mobile */}
              <div className="xl:hidden flex flex-1 relative items-center justify-center mt-24">
                    {/* <DevImgAbout containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[405px] h-[405px] bg-no-repeat relative flex items-center justify-center' 
                    imgSrc={'/about/working.png'}
                    height={355}
                    width={293}
                    /> */}
                    <Image 
                    src={'/about/working.png'}
                    alt="img-work"
                    height={250}
                    width={250}
                    />
                </div>
        </div>
    </section>
  )
}

export default About