import React from 'react'
import Spotlight from './spotlight'
import { SpotlightCard } from './spotlight'

function CoursesSection() {
  return (
    <section className="antialiased py-1 md:py-10 relative ">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-2 lg:px-2">
        <section>
          <div className="pt-4 px-4 mx-auto max-w-screen-xl text-center lg:pt-2 lg:px-12 flex text-center justify-center mx-auto">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-gray-300 pb-10">Courses</h1>
          </div>
            <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
            {/* Card #1 */}
            <SpotlightCard>
              <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 bg-purple-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  <div className="grow mb-5 ">
                    <div className='flex justify-start'>
                    <button className="m-4 rounded-lg px-4 py-1 bg-gradient-to-b from-purple-600 to-purple-900"> New </button>
                    </div>
                  <p className="text-sm text-slate-500 mb-2">Basics of</p>
                    <h2 className="text-2xl text-slate-200  border border-gray-600 rounded-2xl py-4 mx-4 mb-12">CRYPTO WORLD</h2>
                    <div className='mx-4'>
                    <p className="text-md text-slate-200 font-semibold mb-1 text-left">Basics of the crypto world</p>
                    <p className="text-base text-slate-300 text-left">We know it is difficult to understand the crypto world, we make it easy for you with guides containing key points and basic concepts.</p>
                    </div>
                  </div>
                  <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border-2  border-gray-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                    <span>BEGINNER</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #2 */}
            <SpotlightCard>
              <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 bg-purple-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  <div className="grow mb-5 ">
                    <div className='flex justify-start'>
                    <button className="m-4 rounded-lg px-4 py-1 bg-gradient-to-b from-purple-600 to-purple-900"> New </button>
                    </div>
                  <p className="text-sm text-slate-500 mb-2">Basics of</p>
                    <h2 className="text-2xl text-slate-200  border border-gray-600 rounded-2xl py-4 mx-4 mb-12">BLOCKCHAIN</h2>
                    <div className='mx-4'>
                    <p className="text-md text-slate-200 font-semibold mb-1 text-left">Basics of Blockchain</p>
                    <p className="text-base text-slate-300 text-left">We know it is difficult to understand blockchain, so we make it easy for you with guides containing key points and basic concepts.</p>
                    </div>
                  </div>
                  <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border-2  border-gray-700  px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                    <span>BEGINNER</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #3 */}
            <SpotlightCard>
              <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 bg-purple-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  <div className="grow mb-5 ">
                    <div className='flex justify-start'>
                    <button className="m-4 rounded-lg px-4 py-1 bg-gradient-to-b from-purple-600 to-purple-900"> New </button>
                    </div>
                  <p className="text-sm text-slate-500 mb-2">Basics of</p>
                    <h2 className="text-2xl text-slate-200  border border-gray-600 rounded-2xl py-4 mx-4 mb-12">DECENTRALIZATION</h2>
                    <div className='mx-4'>
                    <p className="text-md text-slate-200 font-semibold mb-1 text-left">Basics of decentralization</p>
                    <p className="text-base text-slate-300 text-left">We know that it is difficult to understand decentralization, we make it easy for you with guides containing key points and basic concepts.</p>
                    </div>
                  </div>
                  <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border-2  border-gray-700  px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                    <span>BEGINNER</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Spotlight>
        </section>

      


      </div>
    </section>
  )
}

export default CoursesSection