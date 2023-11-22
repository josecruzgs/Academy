'use client'

import { useRef, useEffect, Fragment } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Tab } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { Caveat } from 'next/font/google'
import TabImage01 from '../../../../../public/videos/blockchain/1.jpg'
import Tab0Image2 from '../../../../../public/videos/blockchain/2.jpg'
import Tab0Image3 from '../../../../../public/videos/blockchain/3.jpg'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
})

interface Tab {
  title: string
  img: StaticImageData
  tag: string
  excerpt: string
  link: string
}

export default function Tabs() {

  const tabs: Tab[] = [
    {
      title: 'Stuart H. and W. Scott S.',
      img: TabImage01,
      tag: 'The begining',
      excerpt: "Before Bitcoin was the star of the show, Stuart Haber and W. Scott Stornetta were already kicking around a -time chain- in the 90s to securely seal documents.",
      link: '#0'
    },
    {
      title: 'Satoshi Nakamoto',
      img: Tab0Image2,
      tag: 'The big leap ',
      excerpt: "But the big leap was in 2008, when someone (or maybe a group, nobody knows) under the pseudonym of Satoshi Nakamoto publishes a document that changes everything. It is called -Bitcoin: A Peer-to-Peer Electronic Cash System-,and with it bitcoin is born.",
      link: '#0'
    },
    {
      title: 'The genesis block',
      img: Tab0Image3,
      tag: 'First Bitcoin block',
      excerpt: "In January 2009, the first Bitcoin block, known as the -genesis block-, was created, marking the beginning of the cryptocurrency and the first successful application of blockchain technology.",
      link: '#0'
    },
  ]

  const tabsRef = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabsRef.current && tabsRef.current.parentElement) tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])   

  return (
    <Tab.Group>
      {({ selectedIndex }) => (
        <div className={`${caveat.variable}`}>
          {/* Buttons */}
          <div className="flex justify-center pt-10 pb-4">
            <Tab.List className="max-[480px]:max-w-[220px] inline-flex flex-wrap justify-center bg-purple-100 rounded-[20px] p-1 mb-6 min-[480px]:mb-2">
              {tabs.map((tab, index) => (
                <Tab key={index} as={Fragment}>
                  <button
                    className={`flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${selectedIndex === index ? 'bg-purple-500 text-slate-900' : 'text-slate-600 hover:text-slate-900'}}`}>{tab.title}</button>
                </Tab>
              ))}
            </Tab.List>
          </div>

          {/* Tab panels */}
          <Tab.Panels className="max-w-[840px] mx-auto ">
            <div className="relative flex flex-col" ref={tabsRef}>

              {tabs.map((tab, index) => (
                <Tab.Panel
                  key={index}
                  as={Fragment}
                  static={true}
                >
                  <Transition
                    as="article"
                    show={selectedIndex === index}
                    unmount={false}
                    className="w-full bg-white rounded-2xl shadow-xl min-[480px]:flex items-stretch focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform order-first"
                    enterFrom="opacity-0 -translate-y-8"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-12"
                    beforeEnter={() => heightFix()}
                  >
                    <figure className="min-[480px]:w-1/2 p-2">
                      <Image className="w-full h-[180px] min-[480px]:h-full object-cover rounded-lg" width="304" height="214" src={tab.img} alt={tab.title} />
                    </figure>
                    <div className="min-[480px]:w-1/2 flex flex-col justify-center p-5 pl-3">
                      <div className="flex justify-between mb-1">
                        <header>
                          <div className="font-caveat text-xl font-medium text-sky-500">{tab.tag}</div>
                          <h1 className="text-xl font-bold text-slate-900">{tab.title}</h1>
                        </header>
                       
                      </div>
                      <div className="text-slate-500 text-sm line-clamp-8 mb-2">{tab.excerpt}</div>
                      
                    </div>
                  </Transition>
                </Tab.Panel>
              ))}

            </div>
          </Tab.Panels>
        </div>
      )}
    </Tab.Group>
  )
}