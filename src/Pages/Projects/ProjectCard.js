import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProjectCard = ({ project, setProjectInfo, setDisplayPhoto }) => {
    AOS.init();
    const { name, about, technology, displayimg,img1 } = project;
    return (
        <div data-aos="fade-up" className=''>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={displayimg} alt="Projects" /></figure>
                <div className="card-body">

                    <div className='w-full bg-slate-900 mt-10 rounded-xl px-5 py-3'>
                        <h2 className="card-title">{name}</h2>
                        <p>{about}</p>
                        <div className='grid grid-cols-2 gap-2 mt-2'>
                            {
                                technology.split(',').map((tech, i) => <div key={i} className="btn bg-transparent btn-xs ">{tech}</div>)
                            }
                        </div>
                        <div className="card-actions items-end justify-end mt-2">
                            <label htmlFor='projectModal' onClick={()=> {setProjectInfo(project); setDisplayPhoto(img1)}} className="btn btn-sm bg-sky-600 border-none">DETAILS</label>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProjectCard;