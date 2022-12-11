import React from 'react';
import spa from '../../Assets/spa.png';
import fullstack from '../../Assets/fullstack.jpg';
import frontend from '../../Assets/frontend.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Services = () => {
    AOS.init();
    return (
        <div id='services' className='px-5 py-16 mt-20 bg-slate-900 '>
            <div className='container mx-auto '>
                <h1 className='text-center text-2xl md:text-4xl font-semibold mb-2'>I CAN DO</h1>
                <hr className='border-slate-600 w-44 mx-auto' />
                <div className='mt-10 grid md:grid-cols-3 gap-5'>

                    <div data-aos="fade-up" className="card  bg-base-100 shadow-xl image-full">
                        <figure><img src={spa} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title ">Single Page Application</h2>
                            <p>I Develop Single Page Web Application with amazing user experience and numerous functionalities with security.</p>
                        </div>
                    </div>

                    <div data-aos="fade-down" className="card bg-base-100 shadow-xl image-full">
                        <figure><img src={fullstack} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Full Stack Web Development</h2>
                            <p>I provide Full Stack Web Development with responsiveness and numerous functionalities. Providing the security is a priority.</p>
                            
                        </div>
                    </div>

                    <div data-aos="fade-up" className="card  bg-base-100 shadow-xl image-full">
                        <figure><img src={frontend} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Frontend Development</h2>
                            <p>I develop responsive and interactive Frontend of Web Application with amazing user experience </p>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;