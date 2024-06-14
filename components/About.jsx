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
    console.log('getdata', getData(qualificationData, 'education'))
  return (
    <section>
        <div className="container m-auto">
            <h2>About me</h2>
        </div>
    </section>
  )
}

export default About