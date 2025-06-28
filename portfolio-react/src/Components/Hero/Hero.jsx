import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Karl Clarence Rivera'],
        typeSpeed: 100,
        deleteSpeed: 0,
        delaySpeed: 10000
    });

    return (
        <div className='hero'>
            {/* <img src={profile_img} alt="" /> */}
            <h1>
                I'm <span> {text} </span>
                <span><Cursor /></span>
            </h1>
            <p>A dedicated <span>Software Developer</span> with a strong passion for turning complex ideas into efficient, scalable, and user-focused web solutions.</p>
            <div className='hero-action'>
                <div className='hero-connect'>
                    Connect with Me
                </div>
                <div className='hero-resume'>
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Hero