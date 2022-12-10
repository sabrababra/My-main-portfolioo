import React from 'react';
import project01 from '../Image/project01.png'
import project02 from '../Image/project02.png'
import project03 from '../Image/project03.png'
const Project = () => {
    return (
        <div className='w-11/12 mx-auto' id='project'>
            <h1 className='text-3xl text-center text-gray-300 my-10'>My Project</h1>

            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                    <div className="card w-full mx-auto bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project01} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Resale bike</h2>
                            <span className='badge badge-outline'>Fullstack</span>
                            <p className='text-left'>It is a old bike reasle website. <br />
                                <ul className='list-disc'>
                                    <li>t is a single-page online bike selling website. In home page you can see a banner advertised
                                        of sold bike and category of bike and review</li>
                                    <li>To see the categorized bike, you must have to login. After login you can see dashboard
                                        option in navbar. Buyer can access My orders (All of you order) option in dashboard.</li>
                                    <li>Sellers can access Add A product (you can add any product for sell), My Products(All
                                        products list you sell ),My buyers(All of your buyers). Admin can access All Sellers, All
                                        Buyers, Reported Items.</li>
                                </ul>
                            </p>
                            <div className="card-actions flex-col">
                                <p>Use: react.js React Router,DaisyUI, Node.js, Mongodb, Html5,css3</p>
                                <a target='_blank' href="https://bike-resale.web.app/" className="btn btn-primary" rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project02} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">PreHigh</h2>
                            <span className='badge badge-outline'>front-end</span>
                            <p className='text-left'>It is a Online course platform website.<br />
                                <ul className='list-disc'>
                                    <li>Any one can see all course</li>
                                    <li>After login as a user can buy a course </li>
                                </ul>

                            </p>
                            <div className="card-actions flex-col">
                                <p>Use: react.js React Router, Html5,css3</p>
                                <a target='_blank' href="https://assignment-10-client-site.web.app/course" className="btn btn-primary" rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project03} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Top players</h2>
                            <span className='badge badge-outline'>Js,htlm,css</span>
                            <p className='text-left'>a Random chooses top 5 players.<br />
                                <ul className='list-disc'>
                                    <li>User can chooses 5 players</li>
                                    <li>Not more than 5 and calculate there coast</li>
                                </ul>
                            </p>
                            <div className="card-actions flex-col">
                                <p>use: js, ES6, html5, css3</p>
                                <a target='_blank' href="https://magnificent-lebkuchen-b755c4.netlify.app/" className="btn btn-primary" rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;