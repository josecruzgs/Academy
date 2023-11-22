"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getPremiumStatus } from '../../account/getPremiumStatus';
import Breadcrumb from '../../components/breadcrum';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';

function Basic() {

  const app = initFirebase();
  const auth = getAuth(app);


  const router = useRouter();
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const checkPremium = async () => {
      const newPremiumStatus = auth.currentUser
        ? await getPremiumStatus(app)
        : false;
      setIsPremium(newPremiumStatus);
    };
    checkPremium();
  }, [app, auth.currentUser?.uid]);

  const statusPanel = isPremium ? <>Hola premium</> : <>Hola Standar</>;

  const breadcrumbItems = [
    { href: "/", text: "Home" },
    { href: "/courses", text: "Courses" },
    { href: "/courses/basic", text: "Basic Education" },
    // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
  ];

  return (

    <>
      <div className="antialiased pt-10 relative mt-10 lg:mt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-10">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">Basic Education</h1>
          <div className="pb-4 md:pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

      <div className="overflow-hidden transition-shadow duration-300 bg-gray-900 rounded-xl">
          <a href="/courses/basic/blockchain" aria-label="Article">
            <img
              src="/images/courses/blockchain.jpg"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="p-5">
            <p className="mb-2 text-xs font-semibold text-purple-400 uppercase">
              Blockchain
            </p>
            <a
              href="/courses/basic/blockchain"
              aria-label="Class"
              className="inline-block mb-3 text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">What is Blockchain?</p>
            </a>
            <p className="mb-4 text-gray-400">
            The student will be able to recognize the fundamental concepts of the blocchain and apply these program concepts.
            </p>
            <div className="flex space-x-4">
              <a
                href=""
                aria-label="Likes"
                className="flex items-center text-gray-300 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <AiOutlineLike/>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                href=""
                aria-label="Comments"
                className="flex items-center text-gray-300 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                <AiOutlineComment/>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden transition-shadow duration-300 bg-gray-900 rounded-xl">
          <a href="/courses/basic/class" aria-label="Article">
            <img
              src="/images/courses/cryptocurrencies.jpg"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="p-5">
            <p className="mb-2 text-xs font-semibold text-purple-400 uppercase">
              Crypto
            </p>
            <a
              href="/courses/basic/class"
              aria-label="Class"
              className="inline-block mb-3 text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">What are cryptocurrencies?</p>
            </a>
            <p className="mb-4 text-gray-400">
            The student will be able to recognize the fundamental concepts of the cryptocurrencies and apply these program concepts in the blockchain.
            </p>
            <div className="flex space-x-4">
              <a
                href=""
                aria-label="Likes"
                className="flex items-center text-gray-300 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <AiOutlineLike/>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                href=""
                aria-label="Comments"
                className="flex items-center text-gray-300 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                <AiOutlineComment/>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>

        
       
      </div>
    </div>
         
         
         
        </div>
      </div>

    </>
  )
}

export default Basic