import React from 'react'

function Steps() {
    return (
        <section className="antialiased lg:pt-4 relative">
            <div className="py-1 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 sm:flex-row flex-col">
                    <div className="md:col-span-1 col-span-2 order-last md:order-first">
                        <div className="mb-4 border rounded-xl glass-box  py-8 px-10 mx-10 container1 ">
                        If you are already part of Mavie, log in with your username and password.

                            <div className="circle1 text-center flex justify-center items-center">
                                <p className="inline-block text-center font-bold text-2xl">1</p>
                            </div>
                        </div>
                        <div className="mb-4 border rounded-xl glass-box py-8 px-10 mx-10 container1 ">
                        Don't have an account? Click on "New member" to create an account and allow our team to contact you.
                            <div className="circle1 text-center flex justify-center items-center">
                                <p className="inline-block text-center font-bold text-2xl">2</p>
                            </div>
                        </div>
                        <div className="mb-4 border rounded-xl glass-box  py-8 px-10 mx-10 container1 ">
                        Select the type of account you want to start your learning experience with. Done!
                            <div className="circle1 text-center flex justify-center items-center">
                                <p className="inline-block text-center font-bold text-2xl">3</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 col-span-2 my-auto align-middle sm:order-first md:order-last">
                        <p className="mb-2 text-5xl text-center md:text-left md:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient ">How can I register?</p>
                        <div className="text-xl mb-5 font-light text-center md:text-left">
                            <p>Follow 3 simple steps</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Steps