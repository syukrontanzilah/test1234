'use client';
import {useState} from 'react';
import {
  Tabs, 
  TabsList, 
  TabsContent, 
  TabsTrigger,
} from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard';
import { projectData } from '@/components/DummyData';

// remove category duplicate
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item)=> item.category))];


const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects')
  // console.log('cat', category)
  const filteredProjects = projectData.filter(project => {
    return category === "all projects" ? project : project.category === category;
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((cat, i)=>{
              return(
                <TabsTrigger 
                  onClick = {()=> setCategory(cat)}
                  value={cat} 
                  key={i}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {cat}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, i)=> {
              return(
                <TabsContent value={category} key={i}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects