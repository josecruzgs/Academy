import React from 'react'

function CoursesTake() {
    return (
        <>


            <div className="bg-gray-800 relative shadow-xl sm:rounded-lg overflow-hidden">

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs uppercase bg-gray-900 text-gray-400">
                            <tr>
                                <th scope="col" className="px-4 py-3">Course</th>
                                <th scope="col" className="px-4 py-3">Category</th>
                                <th scope="col" className="px-4 py-3">Level</th>
                                <th scope="col" className="px-4 py-3">Status</th>
                                <th scope="col" className="px-4 py-3">Progress</th>
                                <th scope="col" className="px-4 py-3">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700">
                                <th scope="row" className="px-4 py-3 font-medium  whitespace-nowrap ">Blockchain for Business</th>
                                <td className="px-4 py-3">Blockchain</td>
                                <td className="px-4 py-3">Intermediate</td>
                                <td className="px-4 py-3">
                                <div className="inline-flex items-center px-4 py-1 rounded-full gap-x-2 text-emerald-600 bg-emerald-100/90">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <h2 className="text-xs">Complete</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="h-2 w-full bg-white rounded-full">
                                        <div className="h-2 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                </td>
                               
                            </tr>
                            <tr className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700">
                                <th scope="row" className="px-4 py-3 font-medium  whitespace-nowrap ">Reinforcement Learning in Trading</th>
                                <td className="px-4 py-3">Trading</td>
                                <td className="px-4 py-3">Advanced</td>
                                <td className="px-4 py-3">
                                <div className="inline-flex items-center px-4 py-1 rounded-full gap-x-2 text-red-600 bg-red-100/90">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <h2 className="text-xs">Delayed</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="h-2 w-full bg-white rounded-full">
                                        <div className="h-2 bg-red-500 rounded-full" style={{ width: "35%" }}></div>
                                    </div>
                                </td>
                               
                            </tr>
                            <tr className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700">
                                <th scope="row" className="px-4 py-3 font-medium  whitespace-nowrap ">Optimizing Gas Costs</th>
                                <td className="px-4 py-3">Blockchain</td>
                                <td className="px-4 py-3">Intermediate</td>
                                <td className="px-4 py-3">
                                <div className="inline-flex items-center px-4 py-1 rounded-full gap-x-2 text-yellow-600 bg-yellow-100/90">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <h2 className="text-xs">Active</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="h-2 w-full bg-white rounded-full">
                                        <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "60%" }}></div>
                                    </div>
                                </td>
                               
                            </tr>
                            <tr className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700">
                                <th scope="row" className="px-4 py-3 font-medium  whitespace-nowrap ">NFTs: An Advanced Guide</th>
                                <td className="px-4 py-3">NFTs</td>
                                <td className="px-4 py-3">Advanced</td>
                                <td className="px-4 py-3">
                                <div className="inline-flex items-center px-4 py-1 rounded-full gap-x-2 text-emerald-600 bg-emerald-100/90">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <h2 className="text-xs ">Complete</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="h-2 w-full bg-white rounded-full">
                                        <div className="h-2 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                </td>
                               
                            </tr>
                            <tr className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700">
                                <th scope="row" className="px-4 py-3 font-medium  whitespace-nowrap ">Alfabetización de IA</th>
                                <td className="px-4 py-3">AI</td>
                                <td className="px-4 py-3">Basic</td>
                                <td className="px-4 py-3">
                                <div className="inline-flex items-center px-4 py-1 rounded-full gap-x-2 text-emerald-600 bg-emerald-100/90">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <h2 className="text-xs ">Complete</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="h-2 w-full bg-white rounded-full">
                                        <div className="h-2 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                </td>
                               
                            </tr>

                        </tbody>
                    </table>
                </div>
                <nav className="flex flex-col md:flex-row justify-between bg-gray-900  items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-400">
                        Showing
                        <span className="font-semibold text-white mx-2">1-5</span>
                        of
                        <span className="font-semibold text-white mx-2">12</span>
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

        </>
    )
}

export default CoursesTake