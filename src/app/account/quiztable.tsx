import React from 'react'
import { BsDownload } from 'react-icons/bs'

function Quiztable() {
  return (
   
    <div className="w-full bg-gray-800 shadow-xl rounded-xl border border-slate-800">
    <header className="px-5 py-4 border-b  border-slate-800 rounded-t-xl bg-gray-900  ">
        <h2 className="font-semibold text-left text-slate-200 ">Quiz Results</h2>
    </header>
    
        <div className="overflow-x-auto ">
            <table className="table-auto w-full px-4">
                <thead className="text-xs font-semibold uppercase bg-slate-900 text-slate-200">
                    <tr className="border-b border-gray-600">
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Category</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Quiz name</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">Results</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">Download</div>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100 ">
                    <tr className='border-b border-gray-700 text-slate-200 hover:bg-gray-700 bg-slate-800'>
                        <td className="p-2 whitespace-nowrap ">
                            <div className="flex items-center ">
                                <div className="w-8 h-8 flex-shrink-0 sm:mr-3"><img className="rounded-full" src="/images/courses/theme_blockchain.png" width="40" height="40" alt="Alex Shatov"/></div>
                                <div className="font-medium text-gray-300">Blockchain</div>
                            </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-slate-200">Knoledge basic of Blockchain</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-center font-medium  text-green-500">8.5</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center mx-auto justify-center flex text-gray-300 cursor-pointer	"><BsDownload/></div>
                        </td>
                    </tr>
                   
                </tbody>
               
                
            </table>
            
        </div>
        <nav className="flex flex-col md:flex-row justify-between bg-gray-900 rounded-b-xl text-slate-200 items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-400">
                        Showing
                        <span className="font-semibold text-white mx-2">1-1</span>
                        of
                        <span className="font-semibold text-white mx-2">1</span>
                    </span>
                    <ul className="inline-flex items-stretch -space-x-px">
                        <li>
                            <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-l-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-r-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
    
</div>

  )
}

export default Quiztable