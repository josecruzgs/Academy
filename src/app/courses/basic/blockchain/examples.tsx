import React from 'react'
import { Zoom } from 'react-awesome-reveal'

function Examples() {
  return (
          <div className="px-2 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-6">
            
            <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-2">
             
             <Zoom triggerOnce cascade damping={0.5}>
              <div className="p-5 duration-300 transform border-2 border-dashed rounded shadow-sm border-purple-500 hover:-translate-y-2">
                <div className="flex items-center mb-2">
                  <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-600">
                    1
                  </p>
                  <p className="text-lg font-bold leading-5">To send money</p>
                </div>
                <p className="text-sm text-gray-100">
                To send money to a friend in another country. Instead of using a bank that charges fees and takes days to process the transaction, instead a blockchain-based platform can be used to make the transaction fast and inexpensive, as it eliminates intermediaries.
                </p>
              </div>

              <div className="p-5 duration-300 transform border-2 border-dashed rounded shadow-sm border-purple-500 hover:-translate-y-2">
                <div className="flex items-center mb-2">
                  <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-600">
                    2
                  </p>
                  <p className="text-lg font-bold leading-5">Manage identity online</p>
                </div>
                <p className="text-sm text-gray-100">
                Blockchain offers a secure and decentralized way to manage identity online. Individuals can have full control over their identity and share only the necessary information, reducing the risk of identity theft.
                </p>
              </div>

              <div className="p-5 duration-300 transform border-2 border-dashed rounded shadow-sm border-purple-500 hover:-translate-y-2">
                <div className="flex items-center mb-2">
                  <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-600">
                    3
                  </p>
                  <p className="text-lg font-bold leading-5">Electronic medical records</p>
                </div>
                <p className="text-sm text-gray-100">
                Blockchain-based electronic medical records improve healthcare systems and allow patients to securely access and control their own medical data.
                </p>
              </div>

              <div className="p-5 duration-300 transform border-2 border-dashed rounded shadow-sm border-purple-500 hover:-translate-y-2">
                <div className="flex items-center mb-2">
                  <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-600">
                    4
                  </p>
                  <p className="text-lg font-bold leading-5">Execution of agreements</p>
                </div>
                <p className="text-sm text-gray-100">
                In the financial and legal world, blockchain enables automatic execution of agreements when certain conditions are met, reducing the need for intermediaries and simplifying processes.
                </p>
              </div>

              <div className="p-5 duration-300 transform border-2 border-dashed rounded shadow-sm border-purple-500 hover:-translate-y-2">
                <div className="flex items-center mb-2">
                  <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-600">
                    5
                  </p>
                  <p className="text-lg font-bold leading-5">Real estate</p>
                </div>
                <p className="text-sm text-gray-100">
                Transforming real estate assets on blockchain allows for more efficient investment and transfer of property more efficiently and affordably.
                </p>
              </div>

              <div className="p-5 duration-300 transform border-2 border-dashed rounded shadow-sm border-purple-500 hover:-translate-y-2">
                <div className="flex items-center mb-2">
                  <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-600">
                    6
                  </p>
                  <p className="text-lg font-bold leading-5">Protect their copyrights</p>
                </div>
                <p className="text-sm text-gray-100">
                Artists and creators can use blockchain to protect their copyrights and receive fair compensation for their work.
                </p>
              </div>
              </Zoom>
              
            </div>
          </div>
  )
}

export default Examples