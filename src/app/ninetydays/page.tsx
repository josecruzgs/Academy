"use client";
import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, query, getDocs } from 'firebase/firestore';
import { initFirebase } from '@/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth } from 'firebase/auth';
import Breadcrumb from '../components/breadcrum';
import { ArrowLeftCircleIcon, ArrowLeftIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';



const Evidence: React.FC = () => {
    const app = initFirebase();
    const [image, setImage] = useState<File | null>(null);
    const [text, setText] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [posts, setPosts] = useState<any[]>([]);

    const [selectedDate, setSelectedDate] = useState(new Date());
    // Obtener la fecha actual en formato ISO (yyyy-MM-dd)
    const currentDate = new Date().toISOString().slice(0, 10);

    // Utiliza useEffect para establecer la fecha actual al cargar el componente
    useEffect(() => {
        setSelectedDate(new Date());
    }, []);




    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
        }
    };

    const handleUpload = async () => {
        if (image) {
            const firebaseApp = initFirebase();
            const storageInstance = getStorage(firebaseApp);
            const storageRef = ref(storageInstance, `90days/${image.name}`);

            try {
                // Subir la imagen a Firebase Storage
                await uploadBytes(storageRef, image);

                // Obtener la URL de la imagen
                const imageUrl = await getDownloadURL(storageRef);

                // Inicializar Firebase Firestore
                const db = getFirestore(firebaseApp);

                // Comprobar si el usuario está autenticado
                const app = initFirebase();
                const user = getAuth(app);
                const auth = getAuth(app);
                if (user) {
                    const userId = auth.currentUser?.uid;

                    // Definir una referencia a la colección customers/90days
                    const customer90daysCollection = collection(db, `customers/${userId}/90days`);

                    // Datos que deseas agregar al documento en Firestore
                    const data = {
                        evidence_name: text,
                        evidence_status: isChecked,
                        evidence_date: selectedDate ? selectedDate : null,
                        image_url: imageUrl, // Agregar la URL de la imagen
                    };

                    // Agregar los datos al documento en Firestore
                    const docRef = await addDoc(customer90daysCollection, data);
                    console.log('Documento añadido con ID: ', docRef.id);

                    toast.success('Carga de evidencia exitosa');

                    // Actualizar la lista de publicaciones
                    const postsCollection = collection(db, `customers/${userId}/90days`);
                    const postsQuery = query(postsCollection);

                    const snapshot = await getDocs(postsQuery);

                    if (!snapshot.empty) {
                        const newPosts = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }));
                        setPosts(newPosts);
                    }
                } else {
                    toast.error('Usuario no autenticado');
                }
            } catch (error) {
                console.error('Error al subir la imagen o guardar datos:', error);
                toast.error('Error en carga de evidencia. Inténtelo de nuevo');
            }
        }
    };

    useEffect(() => {
        // Cargar las publicaciones al cargar la página
        const loadPosts = async () => {
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
                    }));
                    setPosts(newPosts);
                }
            }
        };

        loadPosts();
    }, []); // Se ejecuta solo una vez al cargar la página

    const breadcrumbItems = [
        { href: "/", text: "Home" },
        { href: "/ninetydays", text: "90 Day Challenge" },
        // { href: "/blog/subcategoria", text: post.data.title },
        // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
    ];


    // Ordenar los posts por fecha de la más reciente a la más antigua
    const sortedPosts = posts.slice().sort((a, b) => {
        if (a.evidence_date && b.evidence_date) {
            return b.evidence_date.toDate().getTime() - a.evidence_date.toDate().getTime();
        }
        return 0;
    });

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visiblePosts = sortedPosts.slice(startIndex, endIndex);


    return (
        <>
            <div className="antialiased  pt-10 relative mt-10 lg:mt-1 ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 ">
                    <div className="pb-4 md:pb-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="bg-gray-900 p-4 border-gray-700 border rounded-lg">
                        <div className="flex flex-wrap -mx-4 ">
                            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-4">
                                <label className="block text-white text-sm font-medium">Evidence Title:</label>
                                <input
                                    type="text"
                                    id="evidence_name"
                                    placeholder="Enter a title for your evidence"
                                    value={text}
                                    required
                                    onChange={(e) => setText(e.target.value)}
                                    className="w-full bg-gray-700 text-white border rounded p-2.5 focus:ring-primary-600 focus:border-primary-600"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-4">
                                <label className="block text-white text-sm font-medium">Select a image:</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required
                                    className="w-full bg-gray-700 text-white border rounded p-2.5 focus:ring-primary-600 focus:border-primary-600"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-4 flex items-center">
                                <input
                                    id="evidence_status"
                                    type="checkbox"
                                    checked={isChecked}
                                    required
                                    onChange={() => setIsChecked(!isChecked)}
                                    className="text-primary-600 border-gray-600 h-8 w-8"
                                />
                                <p className="ml-2 text-white">Required daily calls</p>
                            </div>

                            <div className="w-full md:w-1/2 px-4">
                                <label className="block text-white text-sm font-medium">Date:</label>
                                <input
                                    id="evidence_date"
                                    type="date"
                                    value={currentDate}
                                    readOnly // Para evitar la edición del campo
                                    className="w-full bg-gray-700 text-white border rounded p-2.5 focus:ring-primary-600 focus:border-primary-600"
                                />
                            </div>
                        </div>

                        <button onClick={handleUpload} className="w-full md:w-auto mt-4 bg-purple-700 px-12 py-4 min-w-min rounded-lg">Upload Evidence</button>
                        <ToastContainer />
                    </div>



                    <div className='mt-8 border bg-gray-800 border-gray-600 rounded-t-xl overflow-x-auto'>
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead>
                                <tr>
                                    <th className="px-6 py-6 text-left text-sm leading-4 font-bold text-gray-400 uppercase">
                                        Title
                                    </th>
                                    <th className="px-6 py-6 text-left text-sm leading-4 font-bold text-gray-400 uppercase">
                                        Evidence
                                    </th>
                                    <th className="px-6 py-6 text-left text-sm leading-4 font-bold text-gray-400 uppercase">
                                        Calls
                                    </th>
                                    <th className="px-6 py-6 text-left text-sm leading-4 font-bold text-gray-400 uppercase">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-900 divide-y divide-gray-700">
                                {visiblePosts.map((post) => (
                                    <tr key={post.id}>
                                        <td className="px-6 py-4 md:px-4 md:py-6 whitespace-no-wrap">
                                            {post.evidence_name}
                                        </td>
                                        <td className="px-6 w-2 max-w-2	 py-4 md:px-4 md:py-6 whitespace-no-wrap">
                                            <img src={post.image_url} alt={post.evidence_name} />
                                        </td>
                                        <td className="px-6 py-4 md:px-4 md:py-6 whitespace-no-wrap">
                                            {post.evidence_status ? 'Checked' : 'Unchecked'}
                                        </td>
                                        <td className="px-6 py-4 md:px-4 md:py-6 whitespace-no-wrap">
                                            {post.evidence_date
                                                ? new Date(post.evidence_date.toDate()).toLocaleDateString()
                                                : 'N/A'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>



                    <nav className="flex items-center gap-8 py-2 rounded-b-xl border border-gray-600 mx-auto text-center justify-center bg-gray-800">
                        <div className='flex items-center'>

                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 0}
                                className={`bg-transparent border border-transparent text-gray-300 px-2 py-1 ${currentPage === 0 ? 'cursor-not-allowed' : 'cursor-pointer'} ${currentPage === 0 ? '' : 'hover:text-purple-purple'}`}
                            >
                                <ArrowLeftCircleIcon strokeWidth={2} className="h-10 w-10 text-purple-800 hover:text-purple-500" />
                            </button>
                        </div>
                        <div className="mx-4">Page {currentPage + 1} of {Math.ceil(sortedPosts.length / itemsPerPage)}</div>
                        <div className='flex items-center'>
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === Math.ceil(sortedPosts.length / itemsPerPage) - 1}
                                className={`bg-transparent border border-transparent text-gray-300 px-2 py-1 ${currentPage === Math.ceil(sortedPosts.length / itemsPerPage) - 1 ? 'cursor-not-allowed' : 'cursor-pointer'} ${currentPage === Math.ceil(sortedPosts.length / itemsPerPage) - 1 ? '' : 'hover:text-purple-500'}`}
                            >
                                <ArrowRightCircleIcon strokeWidth={2} className="h-10 w-10 text-purple-800 hover:text-purple-500" />
                            </button>
                        </div>
                    </nav>






                </div>
            </div>



        </>
    );
};

export default Evidence;
