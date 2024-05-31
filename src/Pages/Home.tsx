import React from "react";
import Website from "../data/website.json"
import Main from "../Components/Home/Main";
import DashTennis from "../assets/img/dashboard-tennis.png";
import Portfolio from "../assets/img/portfolio.png";
import LinkedIn from "../assets/img/linkedin.png";

export default function Home() {
    let images = [Portfolio, DashTennis];
    return (
        <div className="bg-black min-h-screen text-white font-gotham-bold">
            <Main />
            <div className="flex justify-center">
                <h2 className="text-3xl text-center">
                    This is a hub that I have designed to showcase <br />
                    the websites I created with react. 
                </h2>
            </div>
            <div className="flex justify-center pt-12">
                <h2 className="text-4xl font-gotham-ultra-italic">
                    ALL WEBSITE
                </h2>
            </div>
            <div className='flex flex-wrap justify-center w-full py-12'>
                {Website.website.map((website, index) => {
                    return(
                        <div key={website.name} className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                            <figure><img src={images[index]} alt={website.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-white">{website.name}</h2>
                                <p>{website.description}</p>
                                <div className="card-actions justify-end">
                                    <a href={website.url} target='blank'>
                                        <button className="btn btn-primary text-white tracking-wider">SEE MORE</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <div className='bg-[#0E0E0E] flex flex-row justify-between'>
                <div className='flex flex-col justify-between'>
                    <h1 className='pt-4 pb-2'>
                        <span className='mx-4'>
                            Lukas Portier
                        </span>
                        <span className='text-white'>|</span>
                        <span className='mx-4'>
                            Lytzeer
                        </span>
                    </h1>
                    <span className='mx-4 pb-2'>
                        © 2024
                    </span>
                </div>
                <div className='flex flex-row items-center pr-4 w-16'>
                    <a href="https://www.linkedin.com/in/lukas-portier/">
                        <img src={LinkedIn} alt="linkedin"/>
                    </a>
                </div>
            </div>
        </div>
    );
}