import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from '../ProjectDetails/ProjectDetails'
const Projects = () => {
    const [projects,setProjects] = useState([]);
    const [projectInfo,setProjectInfo] = useState(null);
    const [displayPhoto,setDisplayPhoto] = useState(null);
    useEffect(()=>{
        const url='fakedata.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div id='projects' className='px-5 py-16 mt-20 bg-slate-900  '>
            <div className='container mx-auto '>
                <h1 className='text-center text-2xl md:text-4xl font-semibold mb-2'>PROJECTS I BUILT</h1>
                <hr className='border-slate-600 w-80 mx-auto' />
                <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {
                        projects.length > 0 ?
                        projects.map(project => <ProjectCard key={project.id} project={project} setDisplayPhoto={setDisplayPhoto} setProjectInfo={setProjectInfo}></ProjectCard>)
                        :
                        <></>
                    }
                </div>
                {
                    projectInfo && <ProjectDetails setDisplayPhoto={setDisplayPhoto} displayPhoto={displayPhoto} projectInfo = {projectInfo}></ProjectDetails>
                }
            </div>
        </div>
    );
};

export default Projects;