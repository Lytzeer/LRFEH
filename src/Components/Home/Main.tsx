import React from 'react';
import Logo from '../../assets/img/Logo.png';

const Main = () => {
  return (
    <div className='h-screen flex lg:flex-row md:flex-row items-center lg:justify-evenly sm justify-center sm:flex-col flex-col'>
        <div className='flex flex-col'>
            <h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-3xl">Hello ! Welcome to my </h1>
            <h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-3xl">React Front-end Training Hub </h1>
        </div>
        <div className="lg:flex-row min-w-minr">
            <div className=''>
                <img src={Logo} className="" alt="logo" />
            </div>
        </div>
    </div>
  );
};

export default Main;