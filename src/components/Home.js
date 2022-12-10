import React from 'react';
import TypeAnimation from 'react-type-animation';
import portfolio from '../Image/portfolio.gif'
import cv from '../file/Sabrina-Yesmin-Prome.pdf'

const Home = () => {
    return (
        <div id='home' className="hero min-h-screen bg-neutral" style={{ background: `url(${portfolio})`, backgroundSize: 'cover' }}>
            <div className="hero-content">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold text-gray-200">

                        Hello,
                        <br />
                        I'm Sabrina Yesmin <span className='text-primary'>Prome</span>

                    </h1>
                    <p className="py-6 text-2xl text-gray-400">
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                "Fullstack Web Developer",
                                2000,
                                "Front-end Developer",
                                2000,
                                "UI & UX Designer",
                                2000
                            ]}
                            wrapper="a"
                            repeat={1}
                        />
                    </p>
                    <p className='text-gray-500'>As a full-stack web developer, I am passionate about working for a software company where I can harness my talents in web design, front-end, back-end, UI and UX design web development to provide excellent customer service.</p>
                    <a href={cv} target='_blank' className=' text-primary border-b-2 border-primary p-2 my-5'>Get Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Home;