import React from 'react';
import Typed from "react-typed"
import './About.css';
const About = () => {
    return (
        <div className=' px-5 py-16 mt-20 ' id='about'>
            <div className='container mx-auto '>


                <h1 className='text-center text-2xl md:text-4xl font-semibold mb-2'>WHO I AM</h1>
                <hr className='border-slate-600 w-48 mx-auto' />
                <div className='mt-5 flex md:flex-row flex-col items-center justify-between'>
                    <div className=''>
                        <img src="https://i.ibb.co/86L8Ykf/myphoto2.jpg" alt="" className='h-96 rounded-xl' />

                    </div>
                    <div className='md:w-1/2 md:mt-0 mt-5'>
                        <div className="text-4xl font-semibold mb-2">I'm Sarwar Azmain Reza</div>
                        <h1 className='text-2xl  text-white mb-3'><Typed
                            strings={[
                                "I'm a Web Application Developer",
                                "I'm a MERN Stack Developer",
                                "I'm a React Developer",
                                "I Love Software Development",
                                "I Love Blockchain",
                            ]}
                            typeSpeed={150}
                            backSpeed={150}
                            loop
                        /></h1>
                        <p className='text-justify'>I am studying in the department of Computer Science and Engineering at Daffodil International
                            Unviversity. I have been working on Web Development field for about 2 years. I am a self
                            motivated quick learner. I am Proficient in latest client-side and server-side technologies. I work with ReactJS, Node.js, Express.js, MongoDB. I am interested in working with Blockchain, Cryptography, and Machine Learning.
                        </p>
                        <a href="https://www.linkedin.com/in/sarwar-azmain-reza/" className='btn bg-sky-600 border-none  text-xl mt-5'>HIRE ME</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;