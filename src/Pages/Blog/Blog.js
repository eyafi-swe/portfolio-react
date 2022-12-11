import React from 'react';
import coming from '../../Assets/comingsoon2.png'
import './Blog.css'
const Blog = () => {
    return (
        <div className='pt-16 h-screen flex items-center justify-center' id='blog'>
            <img src={coming} alt="" className='h-96'/>
        </div>
    );
};

export default Blog;