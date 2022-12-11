import React, { useRef, useState } from 'react';
import { BsFillPersonFill, BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { GrMail } from 'react-icons/gr';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import './Contact.css';
const Contact = () => {
    const form = useRef();
    const [loading,setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm('service_zki95a9', 'template_gr67cqw', form.current, 'As-ZqO32O7c0hZ61b')
      .then((result) => {
          console.log(result.text);
          setLoading(false)
          toast.success("Message Sent");
          
      }, (error) => {
        setLoading(false)
          console.log(error.text);
          toast.error("Failed!")
      });
  };
    return (
        <div id='contact' className='px-5 py-16 mt-20 '>
            <div className='container mx-auto '>
                <h1 className='text-center text-2xl md:text-4xl font-semibold mb-2'>GET IN TOUCH</h1>
                <hr className='border-slate-600 w-64 mx-auto' />
                <div className='mt-10 flex flex-col md:flex-row justify-between'>
                    <div>
                        <h1 className='text-3xl mb-2'>Get In Touch With Me</h1>
                        <p className='text-xl'>Contact Me Anytime</p>
                        <div className='mt-5'>
                            <div className='flex items-center'>
                                <div className='mr-5'>
                                    <BsFillPersonFill className='text-4xl text-slate-500'></BsFillPersonFill>
                                </div>
                                <div>
                                    <p>Name</p>
                                    <p>Sarwar Azmain Reza</p>
                                </div>
                            </div>
                            <div className='flex items-center mt-3'>
                                <div className='mr-5'>
                                    <HiLocationMarker className='text-4xl text-slate-500'></HiLocationMarker>
                                </div>
                                <div>
                                    <p>Address</p>
                                    <p>Daffodil Smart City, Savar, Dhaka</p>
                                </div>
                            </div>
                            <div className='flex items-center mt-3'>
                                <div className='mr-5'>
                                    <GrMail className='text-4xl text-slate-500'></GrMail>
                                </div>
                                <div>
                                    <p>Email</p>
                                    <a href="mailto:sarwarazmain.cse@gmail.com">sarwarazmain.cse@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mt-5'>
                            <a href="https://www.facebook.com/eyafi.neo">
                                <BsFacebook className='text-3xl mr-3 text-slate-500'></BsFacebook>
                            </a>
                            <a href="https://github.com/sarwar-azmain-reza">
                                <BsGithub className='text-3xl mr-3 text-slate-500'></BsGithub>
                            </a>
                            <a href="https://www.linkedin.com/in/sarwar-azmain-reza/">
                                <BsLinkedin className='text-3xl mr-3 text-slate-500'></BsLinkedin>
                            </a>
                            <a href="mailto:sarwarazmain.cse@gmail.com">
                                <GrMail className='text-4xl text-slate-500'></GrMail>
                            </a>

                        </div>
                    </div>

                    <div className='lg:w-1/2 mt-5 lg:mt-0'>
                        <h1 className='text-3xl mb-3'>Message Me</h1>
                        <div>
                            <form className='grid grid-cols-1 gap-5 ' ref={form} onSubmit={sendEmail}>
                                <div className='grid grid-cols-2 gap-4'>
                                    <input type="text" placeholder='Name' name='user_name' className='input input-bordered focus:outline-none ' />

                                    <input type="email" name="user_email" placeholder='Email' className='input input-bordered focus:outline-none' />

                                </div>
                                <div className='form-control w-full'>
                                    <textarea name="message" placeholder='Your Message' id="" cols="30" rows="3" className='textarea focus:outline-none  w-full '></textarea>
                                </div>
                                <button type="submit" value="Send" className={`btn bg-sky-600 border-none ${loading ? 'loading' : ''}`}>SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;