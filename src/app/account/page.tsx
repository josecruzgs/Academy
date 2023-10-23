"use client";

import Breadcrumb from "../components/breadcrum";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const breadcrumbItems = [
  { href: "/", text: "Home" },
  { href: "/account", text: "My Account" },
  // { href: "/categoria/subcategoria", text: "Subcategoría" },
  // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
];

export default function AccountPage() {

  return (
    <>
      <div className="antialiased pt-10 relative mt-10 lg:mt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">Challenges</h1>
          <div className="pb-4 md:pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">

            <div className="w-full md:w-1/3 ">
              <div id="left" className="h-full bg-gray-800 rounded-lg">
                Columna Izquierda
              </div>
            </div>


            <div id="right" className="md:w-2/3 w-full">

              <div className="md:flex  mb-4  gap-x-4 gap-y-4">
                
                <div id="col1" className="w-full rounded-lg flex mb-4 md:mb-0 items-center md:basis-1/4 p-4 bg-gray-800 ">
                 <ArrowDownCircleIcon className="h-8 w-8 mr-6"/>
                   <div className="text-right">
                    <p className="mb-2 text-sm  font-medium text-gray-400">
                      Total lessons
                    </p>
                    <p className="text-lg font-semibold  text-xl text-gray-200">
                      20
                    </p>
                  </div>
                </div>

                <div id="col2" className="w-full rounded-lg md:basis-1/4 mb-4 md:mb-0 p-4 bg-gray-800">
                  Columna B
                </div>

                <div id="col3" className="w-full rounded-lg md:basis-1/2 mb-4 md:mb-0 p-4 bg-gray-800">
                  Columna C
                </div>
              </div>

              <div className="mb-4">
                <div className="w-full p-4 rounded-lg bg-gray-800">
                  Columna Simple 1
                </div>
              </div>


              <div>
                <div className="w-full p-4 rounded-lg bg-gray-800">
                  Columna Simple 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
