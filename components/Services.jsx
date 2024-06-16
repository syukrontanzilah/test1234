import {GanttChartSquare, Blocks, Gem} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

const serviceData = [
    {
        icon: <GanttChartSquare size={70} strokeWidth={0.8}/>,
        title: 'Web Development',
        description: 'Developing websites especially using Next Js framework.'
    },
    {
        icon: <Blocks size={70} strokeWidth={0.8}/>,
        title: 'Mobile Development',
        description: 'Developing mobile applications using React Native framework'
    },
    {
        icon: <Gem size={70} strokeWidth={0.8}/>,
        title: 'App Design',
        description: 'Design and developing intuitive websites and mobile aplications mockup'
    },

]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
            {serviceData.map((item,i)=>{
                return(
                    <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={i}>
                      <CardHeader className='text-primary absolute -top-[60px]'>
                        <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                            {item.icon}
                        </div>
                      </CardHeader>
                      <CardContent className='text-center'>
                        <CardTitle className='mb-4'>{item.title}</CardTitle>
                        <CardDescription className='text-lg'>
                           {item.description} 
                        </CardDescription>
                      </CardContent>
                    </Card>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Services