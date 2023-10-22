import React from 'react'

function BasicButton() {
  return (
    
     
        <div className="text-center ">
          <a className="flex flex-col  lg:flex-row items-center justify-center text-xl sm:text-xl md:text-xl font-semibold text-slate-400 before:absolute before:inset-0 before:-z-10 before:transition-colors before:duration-500 group" href="#0">
            <span className="relative p-0.5 rounded-full border border-1 border-slate-700  transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0 group-hover:before:opacity-100 before:absolute before:w-1/2 before:pb-[100%] before:bg-[linear-gradient(90deg,_theme(colors.indigo.500/0)_0%,_theme(colors.indigo.500)_35%,_theme(colors.indigo.200)_50%,_theme(colors.indigo.500)_65%,_theme(colors.indigo.500/0)_100%)] before:animate-[spin_3s_linear_infinite]">
              <span className="relative whitespace-nowrap ">
                <span className="block px-8 py-3 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">Basic Education</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-10 inline-flex items-center whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:bg-clip-text before:text-transparent before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 after:bg-clip-text after:text-transparent after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-300 before:content-['The_best_way_to_start'] after:content-['The_best_way_to_start'] before:px-2 after:px-2 before:animate-infinite-scroll after:animate-infinite-scroll" aria-hidden="true"></span>
              </span>
            </span>
          </a>
        </div>
      
  

  )
}

export default BasicButton