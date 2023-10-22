import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/images/logo.png"
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/youtube'

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
                    <div className="w-full lg:w-1/3 h-full max-w-fit pb-4 lg:flex lg:flex-col  ">
                        <div className="flex">
                            <SocialIcon bgColor="#060C1F" href="https://www.instagram.com" target='_blank' fgColor="white" url="www.instagram.com" />
                            <SocialIcon bgColor="#060C1F" href="https://www.twitter.com" target='_blank' fgColor="white" url="www.twitter.com" />
                            <SocialIcon bgColor="#060C1F" href="https://www.discord.com" target='_blank' fgColor="white" url="www.discord.com" />
                            <SocialIcon bgColor="#060C1F" href="https://www.telegram.com" target='_blank' fgColor="white" url="www.telegram.com" />
                            <SocialIcon bgColor="#060C1F" href="https://www.tiktok.com" target='_blank' fgColor="white" url="www.tiktok.com" />
                            <SocialIcon bgColor="#060C1F" href="https://www.facebook.com" target='_blank' fgColor="white" url="www.facebook.com" />
                            <SocialIcon bgColor="#060C1F" href="https://www.youtube.com" target='_blank' fgColor="white" url="www.youtube.com" />
                        </div>
                        <p className="text-left pt-4 items-center text-center lg:text-center text-sm text-slate-600 lg:items-left">©2023 Vrakka. All rights reserved</p>
                    </div>
                </div>
            </div>
        </section>



    )
}