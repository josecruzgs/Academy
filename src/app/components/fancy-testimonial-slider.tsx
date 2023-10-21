import React from 'react'
import TestimonialImg01 from '../../../public/images/testimonial-01.jpg'
import TestimonialImg02 from '../../../public/images/testimonial-02.jpg'
import TestimonialImg03 from '../../../public/images/testimonial-03.jpg'
import Image from 'next/image'

function Testimonials() {
  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center py-5 px-5">
   
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-5xl font-bold mb-5 text-gray-300">What our Acamedics are saying.</h1>
                <h3 className="text-xl mb-5 font-light">Our purpose is to provide you with the basic knowledge to understand the new technologies and their benefits.</h3>
                <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-purple-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-purple-500 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-purple-500"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-purple-500 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-purple-500 ml-1"></span>
                </div>
            </div>
            <div className="-mx-3 md:flex items-start">
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg glass-box border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                            <Image className="inline-flex" src={TestimonialImg01} width={200} height={200} alt="Card 02" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-200">Jenny Stevens</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm text-white leading-tight"><span className="text-lg leading-none italic font-bold text-purple-400 mr-1">"</span> I have always understood a little about this topic but with the Vrakka academy it was much better to understand certain topics<span className="text-lg leading-none italic font-bold text-purple-400 ml-1">"</span></p>
                        </div>
                    </div>
                   
                </div>
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg glass-box border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                            <Image className="inline-flex" src={TestimonialImg02} width={200} height={200} alt="Card 02" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-200">Tommie Ewart</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm text-white leading-tight"><span className="text-lg leading-none italic font-bold text-purple-400 mr-1">"</span> Now I have more knowledge about blockchain, and I can understand all the concepts!<span className="text-lg leading-none italic font-bold text-purple-400 ml-1">"</span></p>
                        </div>
                    </div>
                   
                </div>
                <div className="px-3 md:w-1/3">
                   
                    <div className="w-full mx-auto rounded-lg glass-box border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                          
                                <Image className="inline-flex" src={TestimonialImg03} width={200} height={200} alt="Card 02" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-white text-sm uppercase text-gray-600">Kris Stanton</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm text-white leading-tight"><span className="text-lg leading-none italic font-bold text-purple-400 mr-1">"</span> I have always understood a little about this topic but with the Vrakka academy it was much better to understand certain topics<span className="text-lg leading-none italic font-bold text-purple-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</div>
  )
}

export default Testimonials