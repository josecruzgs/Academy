import React from 'react'
import Breadcrumb from '../components/breadcrum'


const breadcrumbItems = [
  { href: "/", text: "Home" },
  { href: "/challenges", text: "Challenges" },
  // { href: "/categoria/subcategoria", text: "Subcategoría" },
  // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
];

function Challenges() {
  return (

    <>
      <div className="antialiased pt-10 relative mt-10 lg:mt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">Challenges</h1>
          <div className="pb-4 md:pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className='my-40 p-2'>
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-gray-300">Working on...Come back soon!</h1>
          </div>

        </div>
      </div>
    </>

  )
}

export default Challenges