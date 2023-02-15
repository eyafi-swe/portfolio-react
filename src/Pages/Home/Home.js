import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import Typed from "react-typed"
import me2 from '../../Assets/me2_clipdrop-relight.png'
import resume from '../../Assets/resume.jpg';
import './Home.css';
const Home = () => {
    return (

        <div className='pt-16' id='home'>
            <div className='flex md:flex-row flex-col items-center justify-around  '>
                <div className='mt-10 px-5'>
                    <p className='text-white text-xl'>Assalamu Alaikum, this is</p>
                    <h1 className='text-4xl font-semibold text-white  mt-3'>SARWAR AZMAIN EYAFI</h1>
                    <h1 className='text-2xl  text-white mt-3'><Typed
                        strings={[
                            "I'm a Web Application Developer",
                            "I'm a Mobile Application Developer",
                            "I'm a MERN Stack Developer",
                            "I Love Software Development",
                            "I Love Blockchain",
                        ]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    /></h1>

                    <div className="mt-10 mb-5 ">
                        <figure className='cursor-pointer'>
                            <PhotoProvider>
                                <PhotoView src={resume}>
                                    <Link className='btn bg-sky-600 border-none  text-xl'>MY RESUME</Link>
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>

                </div>
                <div className=''>
                    <img src={me2} alt="pngwing-com" className='h-96 ' />
                </div>
            </div>


        </div>
    );
};

export default Home;