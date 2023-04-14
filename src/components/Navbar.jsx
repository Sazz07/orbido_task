import React, { useState } from 'react'
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt="" className='w-[55px] h-[41px]' />
            <h2 className='text-white font-poppins font-semibold h-[23px] w-[70px]'>OR<span className='text-[#D69300]'>BIDO</span></h2>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {
                    navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
                        >
                            <a href={`${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
            </ul>

            <div className='sm:hidden flex justify-end items-center'>
                <img src={toggle ? close : menu} alt="" className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex-col justify-end items-center flex-1'>
                        {
                            navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                                >
                                    <a href={`${nav.id}`}>
                                        {nav.title}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar