import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Skills = () => {
    AOS.init();
    return (
        <div id='skills' className='px-5 py-16 mt-20 bg-slate-900 '>
            <div className='container mx-auto '>
                <h1 className='text-center text-2xl md:text-4xl font-semibold mb-2'>WHAT I KNOW</h1>
                <hr className='border-slate-600 w-64 mx-auto' />
                <div className='mt-10 flex md:flex-row flex-col justify-around items-center'>
                    <div className='md:w-2/5'>
                        <div className="text-3xl font-semibold mb-2">My skills & experiences</div> <hr className='border-slate-600 mb-2' />
                        <p className='text-justify'>I am an Experienced Web Application Developer, adept in all stages of web development. Knowledgeable in the user interface, testing, and debugging processes. Bringing forth expertise in the design, installation, testing, and maintenance of web systems. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including Node.js, Express.js, MongoDb, MySQL for server-side development, and ReactJS, TailwindCSS, Bootstrap, HTML5, and CSS3 for client-side development. I am also familiar with Next.js, Redux, Python and Django. I am Able to effectively self-manage during independent projects, as well as collaborate in a team setting.</p>

                    </div>

                    <div className='lg:w-1/2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-5 lg:mt-0 gap-5'>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 70 }}>70%</div>
                            <p >JavaScript</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 70 }}>70%</div>
                            <p >ReactJS</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 70 }}>70%</div>
                            <p >Redux</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 90 }}>90%</div>
                            <p >Firebase</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 60 }}>60%</div>
                            <p >Node.js</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 70 }}>70%</div>
                            <p >Express.js</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 70 }}>70%</div>
                            <p >MongoDB</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 70 }}>70%</div>
                            <p >MySQL</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 80 }}>80%</div>
                            <p >REST API</p>
                        </div>
                      
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 90 }}>90%</div>
                            <p >HTML5</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 90 }}>90%</div>
                            <p >CSS3</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 90 }}>90%</div>
                            <p >TailwindCSS</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 90 }}>90%</div>
                            <p >Bootstrap</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 70 }}>70%</div>
                            <p >Python</p>
                        </div>
                        
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 70 }}>70%</div>
                            <p >C</p>
                        </div>
                        <div data-aos="fade-up" className="bg-slate-800 rounded-lg py-2 flex flex-col items-center">
                            <div className=" radial-progress text-info" style={{ "--value": 60 }}>60%</div>
                            <p >Problem Solving</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Skills;