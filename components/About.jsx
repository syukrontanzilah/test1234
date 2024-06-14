import DevImg from "./DevImg";
import Image from "next/image";
import {
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger
} from '@/components/ui/tabs'
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
} from 'lucide-react'

const infoData = [
    {icon: <User2 size={20}/>, text: 'Syukron Tanzil'},
    {icon: <PhoneCall size={20}/>, text: '087811400452'},
    {icon: <MailIcon size={20}/>, text: 'syukrontanzilah@gmail.com'},
    {icon: <GraduationCap size={20}/>, text: 'D3 Businese Administration'},
    {icon: <HomeIcon size={20}/>, text: 'Sukabumi - Jawa Barat - Indonesia'},
];

const qualificationData = [
    {
        title:'education',
        data:[
            {
                university: 'BEC Bogor',
                qualification: 'Businesse Administration'
            },
            {
                university: 'Course-Net Indonesia',
                qualification: 'Android Developer',
                years : '2019'
            },
            {
                university: 'Rubicamp - Bandung',
                qualification: 'Fullstack Developer',
                years: 'November 2019 - Januari 2020'
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company : 'BMG Indonesia',
                qualification: 'Frontend Developer',
                years : 'Oktober 2020 - Juni 2021'
            },
            {
                company : 'BMG Indonesia',
                qualification: 'Frontend Developer',
                years : 'Oktober 2020 - Juni 2021'
            },
            {
                company : 'BMG Indonesia',
                qualification: 'Frontend Developer',
                years : 'Oktober 2020 - Juni 2021'
            },
            {
                company : 'BMG Indonesia',
                qualification: 'Frontend Developer',
                years : 'Oktober 2020 - Juni 2021'
            }
        ]
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            {name: 'HTML'},
            {name: 'SCSS'},
            {name: 'React'},
            {name: 'Next.Js'},
            {name: 'Node.Js'},
            {name: 'Bootstraps'},
        ]
    },
    {
        title: 'tools',
        data: [
            {imgPath: '/about/vscode.svg'},
            {imgPath: '/about/figma.svg'},
            {imgPath: '/about/notion.svg'},
            {imgPath: '/about/vscode.svg'},
            {imgPath: '/about/vscode.svg'},
            {imgPath: '/about/vscode.svg'},
        ]
    },
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }
    // console.log('getdata', getData(qualificationData, 'education'))
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container m-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me
            </h2>
            <div className="flex flex-col xl:flex-row">
                {/* image */}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc={'/about/developer.png'}/>
                </div>
                {/* tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger  className='w-[162px] xl:w-auto'value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger  className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tab content */}
                        <div className="text-lg mt-12 xl:mt-8">
                            {/* personal */}
                            <TabsContent value='personal'>
                              <div className="">
                                <h3 className="h3 mb-4">Unmatched service quality for over 10 years</h3>
                                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                    I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.
                                </p>
                                {/* icon */}
                                <div>
                                  {infoData.map((item, i)=>{
                                    return(
                                        <div className="flex items-center" key={i}>
                                         <div className="text-primary">{item.icon}</div>
                                         <div>{item.text}</div>
                                        </div>
                                    )
                                  })}
                                </div>
                              </div>
                            </TabsContent>
                            <TabsContent value='qualifications'>
                                qualification
                            </TabsContent>
                            <TabsContent value='skills'>
                               skills info
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About