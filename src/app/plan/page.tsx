"use client";
import Prospecciones from './load_prospeccion';
import Llamadas from './load_llamadas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../components/breadcrum';
import Presentaciones from './load_presentaciones';
import Cerrados from './load_cerrados';
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { initFirebase } from '@/firebase';
import { getAuth } from 'firebase/auth';
import Link from 'next/link';
import { BsTelephoneForward } from "react-icons/bs";
import { RiPresentationFill } from "react-icons/ri";
import { MdOutlineHandshake } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoFootstepsSharp } from "react-icons/io5";
import { GiTeamIdea } from "react-icons/gi";
import Seguimientos from './load_seguimiento';
import Capacitaciones from './load_capacitacion';
import Image from 'next/image';


const ElementList: React.FC = () => {

  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleFileUploadComplete = () => {
    // Cerrar el modal
    closeForm();
  };

  const breadcrumbItems = [
    { href: "/", text: "Home" },
    { href: "/account", text: "Ninety Days" },
    // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
  ];



  // Define an interface for your document structure
  interface Document {
    id: string;
    categoria: string;
    cantidad: number;
    fecha: string;
    document_url: string;
    // Add other properties as needed
  }

  const [posts, setPosts] = useState<Document[]>([]);
  const [prospeccionesSum, setProspeccionesSum] = useState(0);
  const [llamadasSum, setLlamadasSum] = useState(0);
  const [presentacionesSum, setPresentacionesSum] = useState(0);
  const [cerradosSum, setCerradosSum] = useState(0);
  const [capacitacionesSum, setCapacitacionesSum] = useState(0);
  const [seguimientosSum, setSeguimientosSum] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const loadPosts = async () => {
      // Cargar las publicaciones al cargar la página
      const firebaseApp = initFirebase();
      const db = getFirestore(firebaseApp);
      const app = initFirebase();
      const user = getAuth(app);
      const auth = getAuth(app);

      if (user) {
        const userId = auth.currentUser?.uid;
        const postsCollection = collection(db, `customers/${userId}/90days`);
        const postsQuery = query(postsCollection);

        const snapshot = await getDocs(postsQuery);

        if (!snapshot.empty) {
          const newPosts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Document[]; // Cast the data as the Document interface
          setPosts(newPosts);

          const prospeccionesTotal = newPosts
            .filter((document) => document.categoria === 'Prospecciones')
            .reduce((total, document) => total + document.cantidad, 0);
          setProspeccionesSum(prospeccionesTotal);

          const llamadasTotal = newPosts
            .filter((document) => document.categoria === 'Llamadas')
            .reduce((total, document) => total + document.cantidad, 0);
          setLlamadasSum(llamadasTotal);

          const presentacionesTotal = newPosts
            .filter((document) => document.categoria === 'Presentaciones')
            .reduce((total, document) => total + document.cantidad, 0);
          setPresentacionesSum(presentacionesTotal);

          const cerradosTotal = newPosts
            .filter((document) => document.categoria === 'Cerrados')
            .reduce((total, document) => total + document.cantidad, 0);
          setCerradosSum(cerradosTotal);

          const seguimientosTotal = newPosts
            .filter((document) => document.categoria === 'Seguimientos')
            .reduce((total, document) => total + document.cantidad, 0);
          setSeguimientosSum(seguimientosTotal);

          const capacitacionesTotal = newPosts
            .filter((document) => document.categoria === 'Capacitaciones')
            .reduce((total, document) => total + document.cantidad, 0);
          setCapacitacionesSum(capacitacionesTotal);

          const totalTotal = newPosts
            .reduce((total, document) => total + document.cantidad, 0);
          setTotalSum(totalTotal);
        }
      }
    };

    loadPosts();
  }, []);




  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtra los elementos para mostrar solo los de la página actual
  const visiblePosts = posts.slice(startIndex, endIndex);


  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };


  let Nivel: string = ""; // Inicializa Nivel como una cadena vacía
  let Medal: string = ""; // Inicializa Nivel como una cadena vacía

  if (totalSum >= 0 && totalSum <= 19) {
    Nivel = "Zona de Peligro"; Medal = "/images/level/peligro.png";
  } else if (totalSum >= 20 && totalSum <= 59) {
    Nivel = "Básico"; Medal = "/images/level/basico.png";
  } else if (totalSum >= 60 && totalSum <= 79) {
    Nivel = "Líder"; Medal = "/images/level/lider.png";
  } else if (totalSum >= 80) {
    Nivel = "Profesional"; Medal = "/images/level/pro.png";
  }



  return (

    <>


      <div className="antialiased pt-10 relative mt-10 lg:mt-10 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">Ninety Days</h1>
          <div className="pb-4 md:pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="p-4 glass-box rounded-2xl">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-6 md:col-span-1">
                <div id="left" className="h-full bg-dots-top mx-auto py-8 px-2 items-center my-auto text-center border border-slate-800 shadow-xl bg-gray-900 rounded-lg">
                  <div className="text-center">
                    <Image
                      src={Medal}
                      width={130}
                      height={130}
                      alt="Level"
                      className="mx-auto" // Agregar la clase mx-auto
                    />
                    <div className="font-bold text-2xl">{Nivel}</div>
                    <div className="text-gray-400 border w-24 mx-auto rounded-xl my-2 text-sm">{totalSum} Points</div>
                  </div>

                  <div className='grid grid-cols-6 items-center p-1'>
                    <div className='col-span-1'> <FaUserEdit className="h-4 w-4 mx-auto text-white" /></div>
                    <div className='col-span-3 text-left text-sm pl-2'>Prospections</div>
                    <div className='col-span-2 text-right'>
                      <Prospecciones onUploadComplete={handleFileUploadComplete} />
                      <ToastContainer />
                    </div>
                  </div>

                  <div className='grid grid-cols-6 items-center p-1'>
                    <div className='col-span-1'> <BsTelephoneForward className="h-4 w-4 mx-auto text-white" /></div>
                    <div className='col-span-3 text-left text-sm pl-2'>Calls</div>
                    <div className='col-span-2 text-right'>
                      <Llamadas onUploadComplete={handleFileUploadComplete} />
                      <ToastContainer />
                    </div>
                  </div>

                  <div className='grid grid-cols-6 items-center p-1'>
                    <div className='col-span-1'> <RiPresentationFill className="h-4 w-4 mx-auto text-white" /></div>
                    <div className='col-span-3 text-left text-sm pl-2'>Presentations</div>
                    <div className='col-span-2 text-right'>
                      <Presentaciones onUploadComplete={handleFileUploadComplete} />
                      <ToastContainer />
                    </div>
                  </div>

                  <div className='grid grid-cols-6 items-center p-1'>
                    <div className='col-span-1'> <MdOutlineHandshake className="h-4 w-4 mx-auto text-white" /></div>
                    <div className='col-span-3 text-left text-sm pl-2'>Closeds</div>
                    <div className='col-span-2 text-right'>
                      <Cerrados onUploadComplete={handleFileUploadComplete} />
                      <ToastContainer />
                    </div>
                  </div>

                  <div className='grid grid-cols-6 items-center p-1'>
                    <div className='col-span-1'> <IoFootstepsSharp className="h-4 w-4 mx-auto text-white" /></div>
                    <div className='col-span-3 text-left text-sm pl-2'>Trackings</div>
                    <div className='col-span-2 text-right'>
                      <Seguimientos onUploadComplete={handleFileUploadComplete} />
                      <ToastContainer />
                    </div>
                  </div>

                  <div className='grid grid-cols-6 items-center p-1'>
                    <div className='col-span-1'> <GiTeamIdea className="h-4 w-4 mx-auto text-white" /></div>
                    <div className='col-span-3 text-left text-sm pl-2'>Tranings</div>
                    <div className='col-span-2 text-right'>
                      <Capacitaciones onUploadComplete={handleFileUploadComplete} />
                      <ToastContainer />
                    </div>
                  </div>




                </div>
              </div>



              <div id="right" className="col-span-6 md:col-span-5">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2">

                  <div id="col3" className="col-span-1 rounded-lg flex mb-2 md:mb-0 shadow-xl border border-slate-800 items-center md:col-span-1 p-4 bg-gray-900 ">
                    <FaUserEdit className="h-10 w-10 mx-auto text-purple-700 " />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-xs  font-medium text-gray-400">Prospections</p>
                      <p className="text-2xl font-semibold  text-purple-700">{prospeccionesSum}</p>
                    </div>
                  </div>

                  <div id="col3" className="col-span-1 rounded-lg flex mb-2 md:mb-0 shadow-xl border border-slate-800 items-center md:col-span-1 p-4 bg-gray-900 ">
                    <BsTelephoneForward className="h-10 w-10 mx-auto text-pink-500" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-xs  font-medium text-gray-400">Calls</p>
                      <p className="text-2xl font-semibold   text-pink-500">{llamadasSum}</p>
                    </div>
                  </div>

                  <div id="col3" className="col-span-1 rounded-lg flex mb-2 md:mb-0 shadow-xl border border-slate-800 items-center md:col-span-1 p-4 bg-gray-900 ">
                    <RiPresentationFill className="h-10 w-10 mx-auto text-blue-500" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-xs  font-medium text-gray-400">Presentations</p>
                      <p className="text-2xl font-semibold   text-blue-500">{presentacionesSum}</p>
                    </div>
                  </div>

                  <div id="col3" className="col-span-1 rounded-lg flex mb-2 md:mb-0 shadow-xl border border-slate-800 items-center md:col-span-1 p-4 bg-gray-900 ">
                    <MdOutlineHandshake className="h-10 w-10 mx-auto text-fuchsia-500" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-xs  font-medium text-gray-400">Closeds</p>
                      <p className="text-2xl font-semibold   text-fuchsia-500">{cerradosSum}</p>
                    </div>
                  </div>

                  <div id="col3" className="col-span-1 rounded-lg flex mb-2 md:mb-0 shadow-xl border border-slate-800 items-center md:col-span-1 p-4 bg-gray-900 ">
                    <IoFootstepsSharp className="h-10 w-10 mx-auto text-rose-500" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-xs  font-medium text-gray-400">Trackings</p>
                      <p className="text-2xl font-semibold   text-rose-500">{seguimientosSum}</p>
                    </div>
                  </div>

                  <div id="col3" className="col-span-1  rounded-lg flex mb-2 md:mb-0 shadow-xl border border-slate-800 items-center md:basis-1/6 p-4 bg-gray-900 ">
                    <GiTeamIdea className="h-10 w-10 mx-auto text-green-500" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-xs  font-medium text-gray-400">Trainings</p>
                      <p className="text-2xl font-semibold   text-green-500">{capacitacionesSum}</p>
                    </div>
                  </div>

                </div>

                <div className="bg-slate-800 relative shadow-xl mt-2 sm:rounded-lg overflow-hidden border border-gray-700">

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-400">
                      <thead className="text-xs uppercase bg-slate-900 text-gray-400">
                        <tr>
                          <th className="px-4 py-3 text-center">Categoría</th>
                          <th className="px-4 py-3 text-center">Fecha</th>
                          <th className="px-4 py-3 text-center">Link</th>
                          <th className="px-4 py-3 text-center">Cantidad</th>

                        </tr>
                      </thead>
                      <tbody>
                        {visiblePosts.map((document, index) => (
                          <tr key={document.id} className="border-b border-gray-700 text-slate-200 hover:bg-gray-700 bg-slate-800">
                            <td className="px-4 py-3 text-center">{document.categoria}</td>
                            <td className="px-4 py-3 text-center">{document.fecha}</td>
                            <td className="px-4 py-3 text-center text-green-500 ">
                              <Link href={document.document_url} target="_blank" className="px-4 py-1 text-center margin border border-green-500 rounded-full">
                                Ver documento
                              </Link>
                            </td>
                            <td className="px-4 py-3 text-center">{document.cantidad}</td>
                            {/* Agrega más celdas si es necesario */}
                          </tr>
                        ))}

                      </tbody>
                    </table>

                  </div>
                  <nav className="flex flex-col justify-end bg-gray-900 text-slate-200 items-center space-y-3 md:space-y-0 py-2 px-4" aria-label="Table navigation">

                    <ul className="inline-flex items-stretch -space-x-px">
                      <li>
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-l-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          <span className="sr-only">Previous</span>
                          <FiChevronLeft />
                        </button>
                      </li>
                      <li>
                        <span className="flex items-center text-sm justify-center h-full py-1.5 px-3 ml-0  border  bg-gray-800 border-gray-700 text-gray-400">
                          Showing
                          <span className="font-semibold text-white mx-2">
                            {startIndex + 1}-{endIndex}
                          </span>
                          of
                          <span className="font-semibold text-white mx-2">{posts.length}</span>
                        </span>
                      </li>
                      <li>
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={endIndex >= posts.length}
                          className="flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-r-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          <span className="sr-only">Next</span>
                          <FiChevronRight />
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>



  );
};

export default ElementList;

