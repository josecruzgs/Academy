"use client";
import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '../../../public/images/Logo.svg';
import { initFirebase } from '@/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Usertype from './usertype';
import Userbutton from './userbutton';
import MobileLogo from "../../../public/images/logo_mobile.svg"




function Navigation() {
    const [navigation, setNavigation] = useState([
        { name: 'Home', href: '/', current: false },
        { name: 'Courses', href: '/courses', current: false },
        { name: 'Blog', href: '/blog', current: false },
        { name: 'Glossary', href: '/glossary', current: false },
        { name: 'Challenges', href: '/challenges', current: false },
    ]);

    const app = initFirebase();
    const auth = getAuth(app);
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        const currentPath = window.location.pathname;

        const updatedNavigation = navigation.map((item) => {
            return {
                ...item,
                current: item.href === currentPath,
            };
        });

        // Actualiza el estado de 'navigation' con los elementos actualizados.
        setNavigation(updatedNavigation);
    }, []);


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}



    useEffect(() => {
        // Suscribirse a los cambios de autenticación con Firebase
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email);
            } else {
                setEmail(null);
            }
        });

        // Devuelve una función de limpieza para cancelar la suscripción cuando el componente se desmonte
        return () => unsubscribe();
    }, [auth]);

    const AcademyAccess = (
        <button className="text-white bg-purple-700 hover-bg-purple-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
            <a href="/login">
                <div className="flex gap-2 items-center align-middle">Academic Access</div>
            </a>
        </button>
    );

    
    const isMobile = window.innerWidth < 768;
    const BotonUsuario = email ? <Userbutton /> : AcademyAccess;
    const Membresia = email ? <Usertype /> : "";

    return (
        <Disclosure as="nav" className="glass-box  md:mx-4 items-center justify-center">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-left sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="/">
                                        <Image
                                            className="inline-flex ml-12 md:ml-1 lg:ml-2 w-26 md:w-40"
                                            src={isMobile ? MobileLogo : Logo}
                                            width={isMobile ?  50 : 130}
                                            height={isMobile ?  50 : 90}
                                            alt="Logo"
                                        />
                                    </a>
                                </div>
                                <div className="hidden sm:block  items-stretch flex items-center my-auto mx-auto ">
                                    <div className="flex space-x-4 shrink  ">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'border-b-2  h-12  border-purple-500 translate-y-2 text-white translate-z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-800  via-transparent to-transparent' : 'text-gray-300  hover:text-white hover:border-b-2 h-12 translate-y-2 hover:border-purple-500',

                                                    ' px-3 py-1 text-md font-medium '
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {Membresia} {BotonUsuario}
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navigation