"use client";

import { useRouter } from "next/navigation";
import { PremiumPanel } from "../account/premiumPanel";
import { StandardPanel } from "../account/standardPanel";
import { Fragment, useEffect, useState } from "react";
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";
import { getCheckoutUrl, getPortalUrl } from "../account/stripePayment";
import { getPremiumStatus } from "../account/getPremiumStatus";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Logo from "../../../public/images/logo.png"

const navigation = [
    { name: 'Courses', href: '/courses', current: true },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Glossary', href: '/glossary', current: false },
    { name: 'Challenges', href: '/challenges', current: false },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

function Navigation() {
    const app = initFirebase();
    const auth = getAuth(app);
    const userName = auth.currentUser?.displayName;
    const email = auth.currentUser?.email;
    const defaultProfilePhotoURL = '/images/avatar.png';
    const [photoURL, setPhotoURL] = useState(auth.currentUser?.photoURL || defaultProfilePhotoURL);
    const [loadingProfileImage, setLoadingProfileImage] = useState(true);

    const router = useRouter();
    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const photoURL = user.photoURL;
                setIsPremium(await getPremiumStatus(app));
                setPhotoURL(photoURL || defaultProfilePhotoURL);
                setLoadingProfileImage(false); // Mark the image as loaded
            } else {
                setIsPremium(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [app, auth]);


    useEffect(() => {
        const checkPremium = async () => {
            const newPremiumStatus = auth.currentUser
                ? await getPremiumStatus(app)
                : false;
            setIsPremium(newPremiumStatus);
        };
        checkPremium();
    }, [app, auth.currentUser?.uid]);

    const upgradeToPremium = async () => {
        const priceId = "price_1O2JRlKwnCNgrsJqB6SrWWS9";
        const checkoutUrl = await getCheckoutUrl(app, priceId);
        router.push(checkoutUrl);
        console.log("Upgrade to Premium");
    };

    const manageSubscription = async () => {
        const portalUrl = await getPortalUrl(app);
        router.push(portalUrl);
        console.log("Manage Subscription");
    };

    const signOut = () => {
        auth.signOut();
        router.push("/");
    };

    const upgradeToPremiumButton = (
        <button
            onClick={upgradeToPremium}
            className="bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg"
        >
            <div className="flex gap-2 items-center align-middle justify-center">
                Upgrade To Premium
            </div>
        </button>
    );

    const managePortalButton = (
        <button
            onClick={manageSubscription}
            className="bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg"
        >
            <div className="flex gap-2 items-center align-middle justify-center">
                Manage Subscription
            </div>
        </button>
    );



    const InfoNoLogeado = (
        <button

            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            <a href="/login">
                <div className="flex gap-2 items-center align-middle">
                    Login In
                </div></a>
        </button>
    );

    const InfoLogeado = (
        <button
            onClick={signOut}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            Sign Out
        </button>
    );


    const statusPanel = isPremium ? <PremiumPanel /> : <StandardPanel />;
    const memberButton = isPremium ? managePortalButton : upgradeToPremiumButton;


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
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="/">
                                        <Image
                                            className="inline-flex ml-8 md:ml-1 lg:ml-1 w-24 md:w-40"
                                            src={Logo}
                                            width={110}
                                            height={100}
                                            alt="Logo"
                                        />
                                    </a>
                                </div>
                                <div className="hidden sm:block  items-stretch flex items-center my-auto mx-auto">
                                    <div className="flex space-x-4 shrink">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white ' : 'text-gray-300 hover:text-white',
                                                    'rounded-md px-3 py-2 text-md font-medium'
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

                                {email ? (
                                    <>

                                        {statusPanel}
                                    </>
                                ) : (
                                    InfoNoLogeado
                                )}

                                {/* Profile dropdown */}
                                {email ? (
                                    <>
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex rounded-full w-8 h-8 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    {photoURL && (
                                                        <img src={photoURL} alt="Profile Photo" className="w-8 h-8 rounded-full" />
                                                    )}
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >

                                                <Menu.Items className="absolute right-0 bg-gray-900 z-50 mt-5 w-80 md:w-60 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'text-gray-100 ' : '', 'block px-4 pt-2 pointer-events-none text-md lg:text-sm text-gray-300')}
                                                            >
                                                                {userName}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'text-gray-100 ' : '', 'block px-4 pb-2 pointer-events-none text-md lg:text-xs text-gray-300')}
                                                            >
                                                                {email}
                                                            </a>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'text-purple-500 ' : '', 'block px-4 py-2 text-md lg:text-sm text-gray-300')}
                                                            >
                                                                My Account
                                                            </a>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                onClick={signOut}
                                                                className={classNames(active ? 'text-purple-500 ' : '', 'block px-4 py-2  text-md lg:text-sm text-gray-300')}
                                                                style={{ cursor: 'pointer' }}>
                                                                Sign out
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </>
                                ) : (
                                    ""
                                )}


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