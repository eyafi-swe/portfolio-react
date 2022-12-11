import React from 'react';

const ProjectDetails = ({projectInfo,displayPhoto, setDisplayPhoto}) => {
    const { name, about,features, technology,img1,img2,img3,live, githubClient, githubServer } = projectInfo;
    
    return (
        <>
            <input type="checkbox" id="projectModal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative">
                    <label onClick={()=> setDisplayPhoto(null)} htmlFor="projectModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className='mt-5'>
                        <div>
                            <img src={displayPhoto} alt="" className='rounded-md' />
                        </div>
                        <div className='grid grid-cols-3 gap-2 mt-3 p-1 bg-slate-900'>
                            <img onClick={()=> setDisplayPhoto(img1)} src={img1} alt="" className='rounded-md cursor-pointer'/>
                            <img onClick={()=> setDisplayPhoto(img2)} src={img2} alt="" className='rounded-md cursor-pointer'/>
                            <img onClick={()=> setDisplayPhoto(img3)} src={img3} alt="" className='rounded-md cursor-pointer'/>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='font-semibold'>{name} - {about}</p>
                        <p>Features -</p>
                        <ul className='list-disc ml-5'>
                            {
                                features.split('.').map((ft,i) => <li key={i}>{ft}</li>)
                            }
                        </ul>
                        <div className='grid grid-cols-3 gap-2 mt-2'>
                            {
                                technology.split(',').map((tech, i) => <div key={i} className="btn bg-transparent btn-xs ">{tech}</div>)
                            }
                        </div>
                        <div className='mt-3 grid grid-cols-3 gap-3'>
                            <a href={live} className="btn btn-sm bg-sky-600 border-none">Live</a>
                            <a href={githubClient} className="btn btn-sm bg-sky-600 border-none">GitHub Frontend</a>
                            <a href={githubServer} className="btn btn-sm bg-sky-600 border-none">GitHub Backend</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;