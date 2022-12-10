import React from 'react';
import miles from '../../Assets/miles.jpg'
import boilagbe from '../../Assets/boilagbess.jpg';
import kids from '../../Assets/kids.jpg'
const Projects = () => {
    return (
        <div id='projects' className='px-5 py-16 mt-20 bg-slate-900  '>
            <div className='container mx-auto '>
                <h1 className='text-center text-4xl font-semibold mb-2'>PROJECTS I BUILT</h1>
                <hr className='border-slate-600 w-80 mx-auto' />
                <div className='mt-10'>
                    <div className="carousel h-96 overflow-y-scroll md:h-auto container mx-auto  ">
                        <div id="slide1" className="carousel-item h-max relative w-full">
                            <div className='flex md:flex-row flex-col md:items-center  w-full md:justify-around md:py-10  md:px-10'>
                                <div className='md:mt-10 mt-0 '>
                                    <h1 className='text-4xl font-semibold text-white'>BoiLagbe</h1>
                                    <p className='text-white text-xl mt-3'>Features - </p>
                                    <ul className='list-disc ml-5'>
                                        <li>User can register as seller to sell books.</li>
                                        <li>User can register as buyer to buy books.</li>
                                        <li>Sellers can add products to sell from dashboard.</li>
                                        <li>Sellers can advertise his unsold products to show his item in advertised section of home page.</li>
                                        <li>Seller can delete his sold items.</li>
                                        <li>Buyers can see categorized items and book them.</li>
                                        <li>From dashboard buyers can make payment with stripe.</li>
                                        <li>Buyers also can report any product to admin.</li>
                                        <li>Admin can verify sellers, delete any user and remove reported items.</li>
                                    </ul>
                                    <p className='mt-2 font-semibold'>Technologies: React, React Query, Node.js, Express.js, MongoDB, Firebase</p>
                                    <a href="https://boi-lagbe.web.app/" className='mr-4 mt-5 btn bg-sky-600 border-none btn-sm'>Live</a>
                                    <a href="https://github.com/sarwar-azmain-reza/boilagbe.com" className='mr-4 btn bg-sky-600 border-none btn-sm'>GitHub Frontend</a>
                                    <a href="https://github.com/sarwar-azmain-reza/boilagbe.com-server" className='btn bg-sky-600 mt-5 mb-5 md:mb-0  border-none btn-sm'>GitHub Backend</a>

                                </div>
                                <div className='flex justify-center'>
                                    <img src={boilagbe} alt="pngwing-com" border="0" className='h-96' />
                                </div>
                            </div>
                            <div className="absolute flex  transform -translate-y-1/2 right-5 top-full">
                                <a href="#slide3" className="btn btn-square bg-sky-600 border-none mr-2">❮</a>
                                <a href="#slide2" className="btn btn-square bg-sky-600 border-none">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item h-max relative w-full">
                            <div className='flex md:flex-row flex-col md:items-center  w-full md:justify-around md:py-10  md:px-10'>
                                <div className='md:mt-10 mt-0 '>
                                    <h1 className='text-4xl font-semibold text-white'>KidsCamp</h1>
                                    <p className='text-white text-xl mt-3'>Features - </p>
                                    <ul className='list-disc ml-5'>
                                        <li>This is a service based app.</li>
                                        <li>User can create account with email, password, and google and login.</li>
                                        <li>User can add service.</li>
                                        <li>User Can post review to any service.</li>
                                        <li>User can delete and update his posted review.</li>
                                        <li>Some important blogs also available.</li>
                                    </ul>
                                    <p className='mt-2 font-semibold'>Technologies: React, React Router, Node.js, Express.js, MongoDB, Firebase</p>
                                    <a href="https://kids-camp-ef82e.web.app/" className='mr-4 mt-5 btn bg-sky-600 border-none btn-sm'>Live</a>
                                    <a href="https://github.com/sarwar-azmain-reza/kids-camp-client" className='mr-4 btn bg-sky-600 border-none btn-sm'>GitHub Frontend</a>
                                    <a href="https://github.com/sarwar-azmain-reza/kids-camp-server" className='btn bg-sky-600 border-none mt-5 mb-5 md:mb-0 btn-sm'>GitHub Backend</a>

                                </div>
                                <div className='flex justify-center'>
                                    <img src={kids} alt="pngwing-com" border="0" className='h-96' />
                                </div>
                            </div>
                            <div className="absolute flex  transform -translate-y-1/2 right-5 top-full">
                                <a href="#slide1" className="btn btn-square bg-sky-600 border-none mr-2">❮</a>
                                <a href="#slide3" className="btn btn-square bg-sky-600 border-none">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item h-max relative w-full">
                            <div className='flex md:flex-row flex-col md:items-center  w-full md:justify-around md:py-10  md:px-10'>
                                <div className='md:mt-10 mt-0 '>
                                    <h1 className='text-4xl font-semibold text-white'>MilesAhead</h1>
                                    <p className='text-white text-xl mt-3'>Features - </p>
                                    <ul className='list-disc ml-5'>
                                        <li>An Educational Web App</li>
                                        <li>Shows courses related to Computer Science</li>
                                        <li>User Sign Up by manual email and password</li>
                                        <li>Login with email,password, google and github</li>
                                        <li>User can Download pdf of course details</li>
                                        <li>Some important blogs also available.</li>
                                    </ul>
                                    <p className='mt-2 font-semibold'>Technologies: React, React Router, TailwindCSS, Node.js, Express.js, Firebase</p>

                                    <a href="https://miles-ahead-1ae99.web.app/" className='mr-4 mt-5 btn bg-sky-600 border-none btn-sm'>Live</a>
                                    <a href="https://github.com/sarwar-azmain-reza/miles-ahead-client" className='mr-4 btn bg-sky-600 border-none btn-sm'>GitHub Frontend</a>
                                    <a href="https://github.com/sarwar-azmain-reza/miles-ahead-server" className='btn bg-sky-600 mt-5 md:mb-0 mb-5 border-none btn-sm'>GitHub Backend</a>

                                </div>
                                <div className='flex justify-center'>
                                    <img src={miles} alt="pngwing-com" border="0" className='h-96' />
                                </div>
                            </div>
                            <div className="absolute flex  transform -translate-y-1/2 right-5 top-full">
                                <a href="#slide2" className="btn btn-square bg-sky-600 border-none mr-2">❮</a>
                                <a href="#slide1" className="btn btn-square bg-sky-600 border-none">❯</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;