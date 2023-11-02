import React, { useState, ChangeEvent, useEffect } from 'react';
import { initFirebase } from '@/firebase';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
} from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth } from 'firebase/auth';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface DocumentUploadFormProps {
  onUploadComplete: () => void;
}

const Cerrados: React.FC<DocumentUploadFormProps> = ({
  onUploadComplete,
}) => {
  const app = initFirebase();
  const [document, setDocument] = useState<File | null>(null);
  const [number, setNumber] = useState<number>(1);
  const [currentDateTime, setCurrentDateTime] = useState<string>(
    new Date().toLocaleString()
  ); // Fecha y hora actual
  const categoria = 'Cerrados'; // Valor para el campo "categoria"

  const [showForm, setShowForm] = useState(false);
  const openForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };


  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handleDocumentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setDocument(file);
    }
  };

  const handleSubmit = async () => {
    if (document) {
      const firebaseApp = initFirebase();
      const storageInstance = getStorage(firebaseApp);
      const storageRef = ref(storageInstance, `90days/${document.name}`);

      try {
        await uploadBytes(storageRef, document);
        const documentUrl = await getDownloadURL(storageRef);
        const db = getFirestore(firebaseApp);
        const auth = getAuth(firebaseApp);
        const user = auth.currentUser;

        if (user) {
          const userId = user.uid;
          const customer90daysCollection = collection(
            db,
            `customers/${userId}/90days`
          );
          const data = {
            document_url: documentUrl,
            cantidad: number,
            fecha: currentDateTime,
            categoria: categoria, // Agregar el campo "Categoria"
          };
          const docRef = await addDoc(customer90daysCollection, data);
          console.log('Documento añadido con ID:', docRef.id);
          toast.success('Carga de evidencia exitosa');
          setShowForm(false); // Cierra el popup
        } else {
          toast.error('Usuario no autenticado');
        }
      } catch (error) {
        console.error('Error al subir el documento o guardar datos:', error);
        toast.error('Error en carga de evidencia. Inténtelo de nuevo');
      }
    } else {
      toast.error('Por favor, seleccione un documento');
    }
    onUploadComplete();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Actualizar la fecha y hora actual cada segundo
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (

    <>

      <button onClick={openForm}>
        <AiOutlinePlus className="w-4 h-4 -mb-1 justify-end" />
      </button>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center text-center z-10 ">
          <div className="modal-container bg-gray-800 w-96 mx-auto p-4 rounded-xl shadow-lg border text-center flex justify-center items-center">
            <div className="text-center justify-center items-center mx-auto">
              <div className="flex flex-col">
                <div className="text-center justify-center items-center my-4">
                  <input type="file" onChange={handleDocumentChange} />
                </div>

                <div className="flex flex-row justify-center">
                  <div>
                    <div>
                      <ul className="inline-flex items-stretch -space-x-px">
                        <li>
                          <button className="flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-l-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                            onClick={decrementNumber}>
                            <span className="sr-only">Previous</span>
                            <AiOutlineMinus />
                          </button>
                        </li>
                        <li>
                          <span className="flex items-center text-sm justify-center h-full py-1.5 px-3 ml-0  border  bg-gray-800 border-gray-700 text-gray-400">
                            {number}
                          </span>
                        </li>
                        <li>
                          <button
                            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-r-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                            onClick={incrementNumber}>
                            <span className="sr-only">Next</span>
                            <AiOutlinePlus />
                          </button>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <input type="hidden" name="fecha" value={currentDateTime} />
                  <input type="hidden" name="categoria" value={categoria} />
                </div>
                <div className="flex flex-row  justify-center">
                  <button onClick={handleSubmit} className="mt-4 bg-purple-500 text-white p-2 rounded-md ">Upload Evidence</button>
                </div>
                <div className="flex flex-row  justify-center">
                  <button onClick={closeForm} className="mt-1 text-red-500 p-2 rounded-md">Cancel</button>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      )}
    </>



  );
};

export default Cerrados;
