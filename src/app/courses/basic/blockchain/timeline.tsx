import React from 'react'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

function Timeline() {
    return (
        <>
            <div className="my-6">

               
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                    <Zoom triggerOnce>
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Ethereum arrives</div>
                        </Zoom>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2014</time>
                        </div>
                        <Fade triggerOnce delay={500}>
                        <div className="text-slate-200 text-sm">Ethereum arrives for the development of smart contracts, which we will detail later. This allowed us to bring solutions to different industries beyond transactions.
                        </div>
                        </Fade>
                       
                    </div>


                    <div className="relative pl-8 sm:pl-32 py-6 group">
                    <Zoom triggerOnce>
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Blockchain 2.0</div>
                        </Zoom>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2015</time>
                        </div>
                        <Fade triggerOnce delay={500}>
                        <div className="text-slate-200 text-sm">Blockchain 2.0 is introduced: which allows the creation of decentralized applications and more complex smart contracts.
                        </div>
                        </Fade>
                    </div>


                    <div className="relative pl-8 sm:pl-32 py-6 group">
                    <Zoom triggerOnce>
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Companies in the blockchain</div>
                        </Zoom>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2016</time>
                        </div>
                        <Fade triggerOnce delay={500}>
                        <div className="text-slate-200 text-sm">Someone decides to include companies in the blockchain and a platform is developed for them.</div>
                        </Fade>
                        </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                    <Zoom triggerOnce>
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0"> Version 3.0</div>
                        </Zoom>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2017</time>
                        </div>
                        <Fade triggerOnce delay={500}>
                        <div className="text-slate-200 text-sm"> Version 3.0 arrives, faster, more secure, scalable and environmentally friendly. </div>
                        </Fade>
                         </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                    <Zoom triggerOnce>
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0"> Interoperability between blockchains</div>
                        </Zoom>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2018</time>
                        </div>
                        <Fade triggerOnce delay={500}>
                        <div className="text-slate-200 text-sm"> They do magic with interoperability between blockchains, allowing funds to be transferred more easily.  </div>
                        </Fade>
                        </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                    <Zoom triggerOnce>
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Blockchain 4.0</div></Zoom>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2022</time>
                        </div>
                        <Fade triggerOnce delay={500}>
                        <div className="text-slate-200 text-sm"> We land on blockchain 4.0! which focuses on creating an autonomous, open and intelligent Internet. </div>
                        </Fade>
                        </div>
             


            </div>
        </>
    )
}

export default Timeline