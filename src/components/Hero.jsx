import React from 'react'
import styles from '../style';
import { discount, robot } from "../assets";


const Hero = () => {
    return (
        <section id='home' className={`${styles.paddingY}`}>
            <div className='font-poppins font-bold ss:text-[72px] text-[70px] ss:leading-[100px] leading-[82px] uppercase'>
                <h1 className='text-white text-center text-home text‑transparent'>Make Your Dream <br />
                    Website Stand Out <br /> In a Crowd
                </h1>
            </div>
        </section>
    )
}

export default Hero
