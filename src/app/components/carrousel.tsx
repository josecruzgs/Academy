import React from 'react'

export default function Carrousel() {
  return (
   
    
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
    <li>
            <img src="/images/vrakka.png" alt="Vrakka" style={{ width: '200px', height: 'auto' }}/>
        </li>
        <li>
            <img src="/images/mavie.png" alt="Mavie" style={{ width: '200px', height: 'auto' }}/>
        </li>
        
    </ul>
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
            <img src="/images/vrakka.png" alt="Vrakka" style={{ width: '200px', height: 'auto' }}/>
        </li>
        <li>
            <img src="/images/mavie.png" alt="Mavie" style={{ width: '200px', height: 'auto' }}/>
        </li>
        
    </ul>
</div>

  )
}
