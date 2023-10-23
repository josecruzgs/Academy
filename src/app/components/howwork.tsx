import React from 'react'
import { Fade } from 'react-awesome-reveal';

function HowWork() {
    return (
        <section className="antialiased lg:pt-20 relative">
        <div className="pt-12 px-4 mx-auto max-w-screen-xl bg-curve text-center lg:pt-20">
        <h1 className="text-5xl md:text-5xl font-bold mb-5 text-gray-300 pb-4 pt-20 md:pt-1 md:pb-12">How does it work</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-cover px-4 py-6 lg:py-10">
  
            <div className="p-4 bg-opacity-80 text-center text-white col-span-full md:col-span-1 w-full">
              <h1 className="text-4xl font-semibold mb-4">Sign Up</h1>
              <hr className="custom-hr"/>
              <p className="text-base mb-5 font-light">Create an account to get started.</p>
            </div>
            <div className="bg-opacity-80 text-center text-white px-4 lg:-mt-20 col-span-full md:col-span-1 w-full">
              <h1 className="text-4xl font-semibold mb-4">Learn</h1>
              <hr className="custom-hr"/>
              <p className="text-base mb-5 font-light">Watch all the videos and courses in each module.</p>
            </div>
            <div className="p-4 bg-opacity-80 text-center px-4 text-white col-span-full md:col-span-1 w-full">
              <h1 className="text-4xl font-semibold mb-4">Get your reward</h1>
              <hr className="custom-hr"/>
              <p className="text-base mb-5 font-light">Receive a certificate and reward in cryptoassets for completing courses.</p>
            </div>
            
           
          
          </div>
        </div>
      </section>
      
    )
}

export default HowWork
