"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getPremiumStatus } from '../account/getPremiumStatus';
import Breadcrumb from '../components/breadcrum';
import { StopIcon } from '@heroicons/react/24/solid';
import BasicButton from '../components/basicbutton';
import MediumButton from '../components/mediumbutton';
import AdvancedButton from '../components/advancedbutton';
import Link from 'next/link';

function courses() {

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
    // { href: "/categoria/subcategoria", text: "Subcategoría" },
    // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
  ];

  return (

    <>
      <div className="antialiased pt-10 relative mt-10 lg:mt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-10">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">Courses</h1>
          <div className="pb-4 md:pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none pt-10">
          <div> <Link href="/courses/basic"><BasicButton/></Link></div>
          <div><MediumButton/></div>
          <div><AdvancedButton/></div>
          </div>
          <section>
            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group pt-10">
              <div className="border-l border-slate-500">
                <div className="text-md font-bold uppercase text-xl py-1.5 text-slate-300 pl-4">Blockchain</div>
                <ul className="text-sm pl-4 leading-8">
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Cryptocurrency?</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is A Smart Contract? </a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Blockchain and How Does It Work? </a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Bitcoin Halving?</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-red-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is an EVM and How Does It Work?</a>
                  </li>
                </ul>
              </div>

              <div className="border-l border-slate-500">
                <div className="text-md font-bold uppercase text-xl py-1.5 text-slate-300 pl-4">Cryptocurrency</div>
                <ul className="text-sm pl-4 leading-8">
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Tether? USDT Meaning, Explained</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Bitcoin Cash (BCH) Cryptocurrency? </a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Uniswap UNI, And How Does It Work? </a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Litecoin (LTC)? How Does It Work?</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-red-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">NFTs: An Advanced Guide</a>
                  </li>
                </ul>
              </div>

              <div className="border-l border-slate-500">
                <div className="text-md font-bold uppercase text-xl py-1.5 text-slate-300 pl-4">Training</div>
                <ul className="text-sm pl-4 leading-8">
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">Crypto Profit Calculator</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">Simple Interest vs. Compound Interest.</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">Best Crypto for Day Trading in 2023</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Over-the-Counter Trading? OTC Trading</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-red-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">How to Read Candlestick Charts for Trading</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group pt-10">
              <div className="border-l border-slate-500">
                <div className="text-md font-bold uppercase text-xl py-1.5 text-slate-300 pl-4">Desentralization</div>
                <ul className="text-sm pl-4 leading-8">
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Cryptocurrency?</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is A Smart Contract? </a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Blockchain and How Does It Work? </a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Bitcoin Halving?</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-red-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is an EVM and How Does It Work?</a>
                  </li>
                </ul>
              </div>

              <div className="border-l border-slate-500">
                <div className="text-md font-bold uppercase text-xl py-1.5 text-slate-300 pl-4">NFTs</div>
                <ul className="text-sm pl-4 leading-8">
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Tether? USDT Meaning, Explained</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Bitcoin Cash (BCH) Cryptocurrency? </a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Uniswap UNI, And How Does It Work? </a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Litecoin (LTC)? How Does It Work?</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-red-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">NFTs: An Advanced Guide</a>
                  </li>
                </ul>
              </div>

              <div className="border-l border-slate-500">
                <div className="text-md font-bold uppercase text-xl py-1.5 text-slate-300 pl-4">Metaverse & GameFi</div>
                <ul className="text-sm pl-4 leading-8">
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">Crypto Profit Calculator</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-green-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">Simple Interest vs. Compound Interest.</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">Best Crypto for Day Trading in 2023</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-yellow-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">What Is Over-the-Counter Trading? OTC Trading</a>
                  </li>
                  <li className="flex items-center"> <StopIcon className="w-4 h-4 -ml-6 text-red-500" />
                    <a className="hover:text-purple-400 pl-4 text-md" href="#">How to Read Candlestick Charts for Trading</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

    </>
  )
}

export default courses