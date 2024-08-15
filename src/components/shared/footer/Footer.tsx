/* eslint-disable react/jsx-no-undef */
import Image from 'next/image'
import React from 'react'
import Logo from "/public/assets/Subtract.png"

const Footer = () => {
  return (
    <footer className=''>
        <div>
            <Image src={Logo}  width={100} height={100} alt=""/>
            <h3><span>M</span>umair </h3>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Projects</li>
                <li>Contact</li>

            </ul>
        </div>
    </footer>
  )
}

export default Footer