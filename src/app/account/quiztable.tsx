import React from 'react'
import { BsDownload } from 'react-icons/bs'

function Quiztable() {
  return (
   
    <div className="w-full bg-slate-200 dark:bg-gray-800 shadow-xl rounded-xl border border-gray-100 dark:border-gray-600">
    <header className="px-5 py-4 border-b border-gray-400 dark:border-gray-700 rounded-t-xl bg-slate-300 dark:bg-gray-900 border-gray-100">
        <h2 className="font-semibold text-left dark:text-slate-200 text-slate-700">Quiz Results</h2>
    </header>
    <div className="p-3">
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase dark:text-slate-200 text-slate-700 ">
                    <tr className="border-b border-gray-700">
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
                <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                        <td className="p-2 whitespace-nowrap ">
                            <div className="flex items-center ">
                                <div className="w-8 h-8 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="/images/courses/theme_blockchain.png" width="40" height="40" alt="Alex Shatov"/></div>
                                <div className="font-medium text-gray-800">Blockchain</div>
                            </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-left dark:text-slate-200 text-slate-700">Knoledge basic of Blockchain</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-center font-medium  text-green-500">8.5</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center mx-auto justify-center flex text-gray-500 cursor-pointer	"><BsDownload/></div>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
</div>

  )
}

export default Quiztable