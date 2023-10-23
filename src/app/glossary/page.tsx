"use client";
import React, { useState } from "react";
import { Datatable } from "./data";
import Breadcrumb from "../components/breadcrum";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Table = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtra los datos en función de la búsqueda
  const filteredData = Datatable.filter((item: { column1: string }) =>
    item.column1.toLowerCase().includes(search.toLowerCase())
  );

  // Calcula el índice de inicio y fin de la página actual
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = filteredData.slice(firstIndex, lastIndex);

  const handleSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const breadcrumbItems = [
    { href: "/", text: "Home" },
    { href: "/glossary", text: "Glossary" },
    // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
  ];

  return (
    <div>
      <div className="antialiased pt-10 relative mt-10 lg:mt-10 rounded-xl">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-10">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">
            Glossary
          </h1>
          <div className="pb-4 md:pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="relative overflow-x-auto bg-gray-900 border rounded-2xl border-gray-700 shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between p-4 border-b  border-gray-700">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  value={search}
                  onChange={handleSearch}
                  className="block p-2 pl-10 text-sm  border  rounded-lg w-80 bg-gray-800 border-gray-900 placeholder-gray-300 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search for terms"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-sm uppercase bg-gray-900 text-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    TERM
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    DEFINITION
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr
                    key={index}
                    className=" border-b bg-primary-600 border-gray-700  hover:bg-gray-900"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-white"
                    >
                      {item.column1}
                    </th>
                    <td className="px-6 py-4">{item.column2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-8 mt-4 mx-auto text-center justify-center">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`btn-prev ${currentPage === 1 ? "cursor-not-allowed" : ""
                }`}
            >
              <ArrowLeftCircleIcon strokeWidth={2} className="h-10 w-10 text-purple-800 hover:text-purple-500" />
            </button>
            <div className="bg-purple-900 text-white rounded-full py-2 px-10">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`btn-next ${currentPage === totalPages ? "cursor-not-allowed" : ""
                }`}
            >
              <ArrowRightCircleIcon strokeWidth={2} className="h-10 w-10 text-purple-800 hover:text-purple-500" />
            </button>
          </div>

        </div>







      </div>
    </div>
  );
};

export default Table;
