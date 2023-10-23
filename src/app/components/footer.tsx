import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/images/logo.png"
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <section className="text-white lg:py-10 relative  justify-center align-middle bg-gradient-to-r from-primary-400 to-primary-100">
            <div className="py-8 px-4 mx-auto max-w-screen-xl h-full">
                <div className="flex flex-col lg:flex-row lg:flex-row lg:space-x-4">
                    <div className="pt-4 text-center lg:items-left">
                        <div className="mx-auto flex justify-center lg:justify-start">
                            <Image src={Logo} width={190} alt="Logo" />
                        </div>
                        <p className="text-left pt-4 items-center text-center lg:text-left lg:items-left md:pr-16">
                            Turn your routine into a lucrative venture with our habit app.
                        </p>
                    </div>
                    <div className="pb-6 w-full lg:w-1/3 h-full flex flex-col  text-center lg:items-left ">
                        <p className="text-left pt-4 font-semibold lg:text-2xl text-4xl text-center lg:text-left">Get in touch</p>
                        <div className='flex flex-col lg:flex-row'>
                            <a href="tel:+525587285168" target="_blank"
                                className='bg-gray-900 py-2 px-3 mr-2 hover:text-white rounded text-md text-purple-400 rounded-full mt-2'>
                                +52 55 8728 5168
                            </a>
                            <a href="mailto:contacto@vrakka.com" target="_blank"
                                className='bg-gray-900 py-2 px-3  mr-2 rounded hover:text-white  text-md text-purple-400 rounded-full mt-2'>
                                contacto@vrakka.com
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 h-full  items-center justify-center text-center pb-4 lg:flex lg:flex-col">
  <div className="flex text-center items-center justify-center mx-auto"> 
    <a href='https://twitter.com' target='_blank'><FaTwitter className="mr-4 w-6 h-6 hover:text-purple-500"/></a>
    <a href='https://twitter.com' target='_blank'><FaInstagram className="mr-4 w-6 h-6 hover:text-purple-500"/></a>
    <a href='https://twitter.com' target='_blank'><FaDiscord className="mr-4 w-6 h-6 hover:text-purple-500"/></a>
    <a href='https://twitter.com' target='_blank'><FaTelegram className="mr-4 w-6 h-6 hover:text-purple-500"/></a>
    <a href='https://twitter.com' target='_blank'><FaTiktok className="mr-4 w-6 h-6 hover:text-purple-500"/></a>
    <a href='https://twitter.com' target='_blank'><FaFacebook className="mr-4 w-6 h-6 hover:text-purple-500"/></a>
    <a href='https://twitter.com' target='_blank'><FaYoutube className="mr-4 w-6 h-6 hover:text-purple-500"/></a>
  </div>
  <p className="text-left pt-4 items-center text-center text-base text-slate-600 -ml-4">©2023 Vrakka. All rights reserved</p>
</div>

                </div>
            </div>
        </section>



    )
}