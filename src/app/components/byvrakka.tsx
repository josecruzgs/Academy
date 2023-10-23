import React from 'react'
import Spotlight from './spotlight'
import { SpotlightCard } from './spotlight'
import Image from 'next/image'
import Logosmall from "../../../public/images/logo-small.png";

function Byvrakka() {
    return (
        <section className="antialiased relative pt-10 ">

            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 ">
                <div className="w-full mb-12">
                    <section>
                        <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-1 items-start lg:max-w-none group">

                            <SpotlightCard>
                                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                                    {/* Radial gradient */}
                                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                        <div className="absolute inset-0 translate-z-0 bg-primary-200 rounded-full blur-[100px]"></div>
                                    </div>
                                    <div className="flex flex-col h-full">
                                        <div className="grow mb-5 pt-12">
                                            <h2 className="text-4xl font-bold mb-4 text-center">The best investment in life is YOU.</h2>
                                            <p className="text-xl mb-5 font-light text-center">Mavie Academy was created to provide you with the necessary tools and education about the crypto world.</p>
                                        </div>
                                        <div className="flex items-end justify-end text-right">
                                            <Image src={Logosmall} width={60} height={60} alt='Logo' />
                                            <p className="text-lg mb-5 font-light text-right">- By Vrakka</p>
                                        </div>
                                    </div>

                                </div>
                            </SpotlightCard>
                        </Spotlight>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Byvrakka