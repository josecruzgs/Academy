"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getPremiumStatus } from '../../../account/getPremiumStatus';
import Breadcrumb from '../../../components/breadcrum';
import { GoPeople } from 'react-icons/go';
import { AiOutlineBook } from 'react-icons/ai';
import VideoWelcome from '@/app/components/videowelcome';
import VideoThumb from "/public/images/courses/cryptocurrencies.jpg"
import EvaluationModal from './evaluationmodal';

function Class() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };


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
        { href: "/courses/basic/class", text: "What are cryptocurrencies" },
    ];

    return (

        <>
            <div className="antialiased pt-10 relative mt-10 lg:mt-10">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-10">
                    <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">What are cryptocurrencies?</h1>
                    <div className="pb-4 md:pb-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>

                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid gap-12 row-gap-8 lg:grid-cols-2 justify-center items-center">
                            <div className="flex flex-col justify-center">
                                <div className="max-w-xl mb-6">
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl sm:leading-none">
                                        What you'll learn?
                                        <br className="hidden md:block " />
                                    </h2>

                                    <p className="text-base text-gray-300 md:text-sm">
                                        The cryptocurrency space is growing exponentially with different career opportunities. You’ll find many ways to get involved depending on your interests, whether that be the technology or creative design aspect of it. Taking a cryptocurrency course is a great way to explore different topics and learn about the avenues to become involved in this industry. In this article, you'll find many professional courses, roles, and more in the cryptocurrency field.
                                    </p>
                                </div>
                                <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                                    <div>
                                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-500">
                                            <GoPeople className='h-6 w-6' />
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Audience
                                        </h6>
                                        <p className="text-sm text-gray-300">
                                            <ol>
                                                <li>- Anyone who is curious about Blockchain.</li>
                                                <li>- Business Professionals who want to gain a basic understanding what Cryptocurrencies are.</li>
                                            </ol>
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-500">
                                            <AiOutlineBook className='h-6 w-6' />
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            What's Included
                                        </h6>
                                        <p className="text-sm text-gray-300">
                                            <ol>
                                                <li>- 90 Minutes of training.</li>
                                                <li>- Certificate of Completion.</li>
                                                <li>- Ability to stop, pause, rewind and move through all chapters.</li>
                                            </ol>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center p-2 ">
                                <VideoWelcome
                                    thumb={VideoThumb}
                                    thumbWidth={900}
                                    thumbHeight={732}
                                    thumbAlt="Vrakka Academy"
                                    video="/videos/cryptocurrencies.mp4"
                                    videoWidth={660}
                                    videoHeight={415}
                                />
                            </div>

                        </div>
                    </div>



                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-purple-700 ">
                                    Evaluation
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>

                                </span>
                                Ready for your evaluation
                            </h2>
                            <p className="text-base text-gray-300 md:text-lg">
                                Repeat the video as many times as necessary to absorb the knowledge as clearly as possible, and once you feel prepared, take the evaluation exam.
                            </p>
                        </div>
                        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                            <div className="duration-300 transform bg-gray-800 border-l-4 border-purple-500 rounded-r-lg hover:-translate-y-2">
                                <div className="h-full p-5  border-l-0  shadow-sm">
                                    <h6 className="mb-2 font-semibold leading-5">Opportunities</h6>
                                    <p className="text-sm text-gray-300">
                                        You will have 3 opportunities to repeat the exam, after the third opportunity that will be your final grade.
                                    </p>
                                </div>
                            </div>
                            <div className="duration-300 transform bg-gray-800 border-l-4 border-purple-500 rounded-r-lg hover:-translate-y-2">
                                <div className="h-full p-5  border-l-0  shadow-sm">
                                    <h6 className="mb-2 font-semibold leading-5">Time</h6>
                                    <p className="text-sm text-gray-300">
                                        The exam has a maximum time of 20 minutes, each question has one minute to capture the answer.
                                    </p>
                                </div>
                            </div>
                            <div className="duration-300 transform bg-gray-800 border-l-4 border-purple-500 rounded-r-lg hover:-translate-y-2">
                                <div className="h-full p-5  border-l-0  shadow-sm">
                                    <h6 className="mb-2 font-semibold leading-5">Answers</h6>
                                    <p className="text-sm text-gray-300">
                                        All questions are multiple choice, you must select the answer that you consider correct.
                                    </p>
                                </div>
                            </div>
                            <div className="duration-300 transform bg-gray-800 border-l-4 border-purple-500 rounded-r-lg hover:-translate-y-2">
                                <div className="h-full p-5  border-l-0  shadow-sm">
                                    <h6 className="mb-2 font-semibold leading-5">Qualification</h6>
                                    <p className="text-sm text-gray-300">
                                        The grading of your evaluation is automatic; if you pass, your certificate will be sent to your user dashboard for download.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ... tu código anterior ... */}
                        <div className="text-center">
                            <button
                                onClick={openModal}
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-700 hover:bg-purple-600 focus:shadow-outline focus:outline-none"
                            >
                                Take the Evaluation
                            </button>
                        </div>
                        {showModal && <EvaluationModal onClose={closeModal} />}
                    </div>


                </div>
            </div>

        </>
    )
}

export default Class