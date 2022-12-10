import React, { useState } from 'react';

const Education = () => {

    const education = <div className='bg-slate-700 p-5 rounded-md shadow-md shadow-slate-500'>
        <p className='text-xl '>Bachelor in Computer Science and Engineering</p>
        <p>CGPA: 3.75</p>
        <p>Daffodil International University</p>
        <p>Daffodil Smart City, Savar, Dhaka, Bangladesh</p>
    </div>

    const experience = <div className='bg-slate-700 p-5 rounded-md shadow-md shadow-slate-500'>
        <p className='text-xl '>Web Developer Intern (Remote)</p>
        <p>Travel Bangladesh Ltd.</p>
        <p>Dhaka, Bangladesh</p>
        <p>February 2021 - May 2021</p>
    </div>
    
    const [content, setContent] = useState(education);
    return (
        <div id='education' className='px-5 py-16 mt-20 bg-slate-900  '>
            <div className='container mx-auto '>
                <div className='flex justify-center'>
                    <button onClick={() => setContent(education)} className='text-center text-2xl md:text-4xl font-semibold mb-2 px-3 border-r-2 border-cyan-500'>EDUCATION</button>
                    <button onClick={() => setContent(experience)} className='text-center text-2xl md:text-4xl font-semibold mb-2 px-3'>EXPERIENCE</button>
                </div>
                <hr className='border-slate-600 w-2/5 mx-auto' />
                <div className='mt-10 flex justify-center'>
                    {content}

                </div>
            </div>

        </div>
    );
};

export default Education;