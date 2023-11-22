"use client";
import Breadcrumb from '@/app/components/breadcrum';
import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import VideoWelcome from '@/app/components/videowelcome';
import VideoThumb from "/public/videos/blockchain/blockchain.jpg"
import Timeline from './timeline';
import Tabs from './tabs';
import { Characteristics } from './characteristics';
import Examples from './examples';
import Simplercase from './simplercase';
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";


interface Section {
    title: string;
    content: React.ReactNode;
}



const sections: Section[] = [
    {
        title: 'What is Blockchain?',
        content: (
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-2 lg:py-2">
                <div className="grid gap-6 row-gap-8 lg:grid-cols-1 justify-center items-center">
                    <div className="flex flex-col justify-center">
                    

                        <div className=" mb-1">

                            <p className="text-base text-gray-300 md:text-sm">
                                Let's explore this fascinating technology, which is changing the way we handle transactions and records in the digital world.
                            </p>
                        </div>
                        <Slide direction="up" triggerOnce delay={600}>
                        <div className='px-10 py-6 '>
                            <VideoWelcome
                                thumb={VideoThumb}
                                thumbWidth={900}
                                thumbHeight={732}
                                thumbAlt="Vrakka Academy"
                                video="/videos/blockchain.mp4"
                                videoWidth={660}
                                videoHeight={415}
                            />
                        </div>
                        </Slide>
                        <p className="text-base text-gray-300 md:text-sm">
                            Now you know that Blockchain, in a few words, is like a shared, unchanging digital ledger that facilitates the process of recording transactions and tracking assets in a business network.
                        </p>

                    </div>

                    <div className="text-center p-2 ">

                    </div>

                </div>
            </div>
        ),
    },
    {
        title: 'Some examples ',
        content: (
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-2 lg:py-2">
                <p className="text-base text-gray-300 md:text-sm">
                    Some examples that may help you understand it:
                </p>
                <Zoom cascade damping={0.2} triggerOnce>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="lg:w-3/5 lg:pr-4">
                        <div className="flex flex-col justify-center">
                        <Slide direction='right' triggerOnce>
                            <h2 className="text-xl font-bold w-1/2 border-b-2 border-purple-500  ">Financial transactions:</h2>
                            </Slide>
                            <Fade delay={1500} cascade damping={0.5} triggerOnce>
                                <p className="text-base text-gray-300 md:text-sm pt-2">
                                Imagine you want to send money to a friend in another country.
                            </p>
                            <p className="text-base text-gray-300 md:text-sm pt-2">
                                 Instead of relying on a bank or transfer company, you can use a cryptocurrency like Bitcoin. Each transaction is recorded in a block on the blockchain, and everyone can see it.
                            </p>
                            <p className="text-base text-gray-300 md:text-sm pt-2">
                                Each transaction is recorded in a block on the blockchain, and everyone can see it.
                            </p>
                            </Fade>
                        </div>
                    </div>
                    <div className="lg:w-2/5">
                        <img src="/videos/blockchain/1.png" alt="Imagen" className="w-full h-auto lg:rounded-l-lg lg:shadow-lg hover:scale-105 duration-300 " />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center">

                    <div className="lg:w-2/5">
                        <img src="/videos/blockchain/2.png" alt="Imagen" className="w-full h-auto lg:rounded-l-lg lg:shadow-lg hover:scale-105 duration-300 " />
                    </div>
                    <div className="lg:w-3/5 lg:pl-4">
                        <div className="flex flex-col justify-center">
                        <Slide direction='right' triggerOnce>
                            <h2 className="text-xl font-bold w-1/2 border-b-2 border-purple-500  ">Supply chain:</h2>
                            </Slide>
                            <Fade delay={1500} cascade damping={0.5} triggerOnce>
                            <p className="text-base text-gray-300 md:text-sm pt-2">
                             Supermarkets often want to know all the information about items and food for handling and logistics. 
                            </p>
                            <p className="text-base text-gray-300 md:text-sm pt-2">
                             Companies can use blockchain to track the provenance of products. For example, they can scan a QR code on a package of meat and see all the information about its origin, transportation and processing.
                            </p>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center">
                    <div className="lg:w-3/5 lg:pr-4">
                        <div className="flex flex-col justify-center">
                        <Slide direction='right' triggerOnce>
                            <h2 className="text-xl font-bold w-1/2 border-b-2 border-purple-500  ">Secure electronic voting:</h2>
                            </Slide>
                            <Fade delay={1500} cascade damping={0.5} triggerOnce>
                            <p className="text-base text-gray-300 md:text-sm pt-2">
                                In elections, the integrity of the voting process is crucial. 
                            </p>
                            <p className="text-base text-gray-300 md:text-sm pt-2">
                                With blockchain, each vote is securely recorded on the blockchain which ensures that votes cannot be tampered with and allows for transparent verification of results.
                            </p>
                            </Fade>
                        </div>
                    </div>
                    <div className="lg:w-2/5">
                        <img src="/videos/blockchain/3.png" alt="Imagen" className="w-full h-auto lg:rounded-l-lg lg:shadow-lg hover:scale-105 duration-300 " />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center">
                    <div className="lg:w-2/5">
                        <img src="/videos/blockchain/4.png" alt="Imagen" className="w-full h-auto lg:rounded-l-lg lg:shadow-lg hover:scale-105 duration-300 "  />
                    </div>
                    <div className="lg:w-3/5 lg:pl-4">
                        <div className="flex flex-col justify-center">
                        <Slide direction='right' triggerOnce>
                            <h2 className="text-xl font-bold w-1/2 border-b-2 border-purple-500  ">Property management:</h2>
                            </Slide>
                            <Fade delay={1500} cascade damping={0.5} triggerOnce>
                            <p className="text-base text-gray-300 md:text-sm pt-2">
                                Buying a house involves a lot of documentation and paperwork. 
                            </p>
                            <p className="text-base text-gray-300 md:text-sm pt-2">
                                By registering the purchase on a blockchain, you avoid future ownership disputes and fraud.
                            </p>
                            </Fade>
                        </div>
                    </div>
                </div>
                </Zoom>
            </div>


        ),
    },
    {
        title: 'History of Blockchain',
        content: (
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-2 lg:py-2">
                <p className="text-base text-gray-300 md:text-sm">
                    The idea of some sort of ultra-secure transaction ledger is not the product of a single genius mind, but rather of many researchers relying on mathematics, secure code and databases over decades.
                </p>
                <div className="grid gap-6 row-gap-8 lg:grid-cols-1 justify-center items-center">
                    <div className="flex flex-col justify-center pb-4">
                       <Slide triggerOnce direction='right'>
                       <Tabs />
                        </Slide> 

                    </div>

                    <div className="text-center p-2 ">

                    </div>

                </div>
            </div>
        ),
    },
    {
        title: 'Timeline',
        content: (
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-2 lg:py-2">
                <p className="text-base text-gray-300 md:text-sm">
                    After that boom, blockchain started to evolve and diversify; its timeline continues to expand and grow:
                </p>
                <div className="grid gap-6 row-gap-8 lg:grid-cols-1 justify-center items-center">
                    <div className="flex flex-col justify-center">
                        <Timeline /> </div>
                    <div className="text-center p-2 ">
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'How does it work?',
        content: (
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-2 lg:py-2">
                <p className="text-base text-gray-300 md:text-sm">
                To reinforce what you learned earlier, let's go into more detail to understand the function of a Blockchain. 
                </p>
                <p className="text-base text-gray-300 md:text-sm">
                In the video example, we explain that Blockchain works like a museum's record book, but digital. This book has the ability to record and store data.
                </p>
                <p className="text-base text-gray-300 md:text-sm">
                For it to operate, the following essential characteristics must be covered:
                </p>
                <div className="grid gap-6 row-gap-8 lg:grid-cols-1 justify-center items-center">
                   <Characteristics/>
                </div>
            </div>
        ),
    },
    {
        title: 'Real-life use cases ',
        content: (
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-2 lg:py-2">
                <div className="grid gap-6 row-gap-8 lg:grid-cols-1 justify-center items-center">
                    <div className="flex flex-col justify-center">
                        <div className=" mb-1">

                            <p className="text-base text-gray-300 md:text-sm">
                            The real use cases of blockchain are numerous and extend to a variety of industries and applications that we can observe on a daily basis. 
                            </p>
                        </div>
                       
                        <p className="text-base text-gray-300 md:text-sm">
                        Let's look at some examples where it has been implemented for some years now, and without realizing it, it has become an everyday tool:


                        </p>

                    </div>

                    <div className="text-center p-2 ">
                        <Examples/>

                    </div>

                </div>
            </div>
        ),
    },
    
    {
        title: 'Simpler example',
        content: (
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-2 lg:py-2">
                <p className="text-base text-gray-300 md:text-sm">
                Now we'll explain how you can apply it to your daily life: 
                </p>
                <p className="text-base text-gray-300 md:text-sm">
                Let's imagine Ana, who is completely new to blockchain, is looking for simple ways to get involved.
                </p>
               
               <Simplercase/>

               <p className="text-base text-gray-300 md:text-sm">
               In summary, the world of blockchain and cryptocurrencies is full of exciting opportunities, and you too can be like Ana, actively participating and benefiting from this growth. Don't worry, we will help you learn, explore and be part of the blockchain revolution!
                </p>
               
            </div>


        ),
    },
];

const CoursesV2: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<number>(0);
    const totalSections = sections.length;
    const progress = ((currentSection + 1) / totalSections) * 100;

    const handleNext = () => {
        setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
    };

    const handlePrev = () => {
        setCurrentSection((prev) => Math.max(prev - 1, 0));
    };

    const breadcrumbItems = [
        { href: "/", text: "Home" },
        { href: "/courses", text: "Courses" },
        { href: "/courses/basic", text: "Basic Education" },
        { href: "/courses/basic/class", text: "What is Blockchain?" },
    ];

   
    return (
        <>
         

            <div className="antialiased pt-10 pb-40 relative mt-10 lg:mt-10">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-10">
                    <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">What is Blockchain?</h1>
                    <div className="pb-4 md:pb-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>

                    {/* Sidebar y Contenido principal */}
                    <div style={{ display: 'flex' }}>
                        {/* Sidebar */}
                        <div className="hidden lg:block" style={{ width: '350px', height: '100%', padding: '5px', boxSizing: 'border-box', float: 'left', position: 'relative' }}>
                            <h2>Index</h2>
                            <ul className="py-4">
                                {sections.map((section, index) => (
                                    <li key={index} className="py-2">
                                        <a
                                            href="#"
                                            onClick={() => setCurrentSection(index)}
                                            className={`text-${currentSection === index ? 'white border-t border-b border-purple-500 px-2 py-1' : 'purple-500'} cursor-pointer`}
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Barra de progreso vertical */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    height: '100%',
                                    width: '2px',
                                    backgroundColor: '#ccc',
                                    transition: 'height 0.5s',
                                }}
                            >
                                <div
                                    style={{
                                        height: `${progress}%`,
                                        backgroundColor: '#7e12ea',
                                        width: '100%',
                                        transition: 'height 0.5s',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Contenido principal */}
                        <div className="lg:ml-10 md:ml-10 ml-1 p-4">
                        
                            <h1 className='font-bold text-2xl lg:text-4xl pb-4'>{sections[currentSection].title}</h1>
                            {sections[currentSection].content}

                            {/* Botones de navegación */}
                            <div className='mt-4 flex justify-between items-center'>
                                <div className='flex border border-purple-800 rounded-lg bg-purple-950 px-4 py-1 items-center'>
                                    <button onClick={handlePrev} disabled={currentSection === 0} className='flex items-center'>
                                        <ArrowLeftIcon className='h-4 mr-2' /> Prev
                                    </button>
                                </div>
                                <div className='flex border border-purple-800 rounded-lg bg-purple-950 px-4 py-1 items-center'>
                                    <button onClick={handleNext} disabled={currentSection === totalSections - 1} className='flex items-center'>
                                        Next <ArrowRightIcon className='h-4 ml-2' />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default CoursesV2;