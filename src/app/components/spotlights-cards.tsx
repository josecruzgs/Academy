import React from 'react'
import Spotlight from './spotlight'
import { SpotlightCard } from './spotlight'
import Image from 'next/image'
import Card01 from "../../../public/images/card-01.png";
import Card02 from "../../../public/images/card-02.png";
import Card03 from "../../../public/images/card-03.png";
import { AcademicCapIcon } from '@heroicons/react/24/outline';

function Spotlightscards() {
  return (

    <section className="antialiased  pt-1 md:pt-8 relative justify-center mb-10 ">
      <div className="relative mx-6 z-20 overflow-hidden py-8  md:mx-auto max-w-screen-xl text-center  justify-center lg:py-16 lg:px-12 border md:border-purple-800 border-primary-100 rounded-3xl">
        <div className="absolute px-6 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
          <div className="absolute inset-0 translate-z-0 bg-primary-200 rounded-full blur-[90px]"></div>
        </div>
        <section>
       
          <div className="flex flex-col md:flex-row gap-4">
          <Spotlight>
            <div className="w-full md:basis-1/5">
              <SpotlightCard>
                <div className="relative h-full bg-slate-900 p-1 md:p-6  pb-8 rounded-[inherit] z-20 overflow-hidden ">
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-purple-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                      <Image className="inline-flex" src={Card01} width={200} height={200} alt="Card 02" />
                    </div>
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Crypto assets</h2>
                    </div>
                    <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                      <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                      <span className="pl-1">Learn about</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
           </Spotlight>
            <div className="w-full md:basis-1/5">
              <SpotlightCard>
                <div className="relative h-full bg-slate-900 p-1 md:p-6 pb-8 rounded-[inherit] z-20 overflow-hidden ">
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-purple-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                      <Image className="inline-flex" src={Card02} width={200} height={200} alt="Card 02" />
                    </div>
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Habits</h2>
                    </div>
                    <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                      <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                      <span className="pl-1">Learn about</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
            <div className="w-full md:basis-1/5">
              <SpotlightCard>
                <div className="relative h-full bg-slate-900 p-1 md:p-6  pb-8 rounded-[inherit] z-20 overflow-hidden">
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-purple-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                      <Image className="inline-flex" src={Card03} width={200} height={200} alt="Card 03" />
                    </div>
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">New technology</h2>
                    </div>
                    <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                      <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                      <span className="pl-1">Learn about</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
            
            <div className="w-full md:basis-2/5 my-auto">
              <div className="pt-8 px-4 mx-auto max-w-screen-xl text-left lg:pt-4 lg:px-12 flex mx-auto flex-col items-center">
              <h1 className="text-5xl md:text-5xl font-bold mb-5 text-gray-300">Everything in <span className="tracking-tight leading-none bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient ">one place</span></h1>
              </div>
              <div className="pt-8 px-4 mx-auto max-w-screen-xl text-left lg:pt-4 lg:px-12 flex mx-auto flex-col items-center">
              <h3 className="text-xl mb-5 font-light">We have for you a wide variety of courses to make you part of this world.</h3>
              </div>
            </div>
           
          </div>
          
        </section>
      </div>
    </section>
  )
}

export default Spotlightscards