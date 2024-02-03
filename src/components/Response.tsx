import React from 'react'
import Image from 'next/image'

function Response() {
  return (
    <div className="flex space-x-2 items-center animate-out zoom-in duration-200 delay-300 mt-24 h-40 w-96 text-center ">
    <div>
        <div className="font-semibold text-center md:text-left">Trusted by</div>
        <div className="flex space-x-2 items-center flex-col md:flex-row">
            <div className="flex -space-x-2 overflow-hidden p-2">
                <Image  width={300} height={300} className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/men/51.jpg" alt=""/>
                <Image  width={300} height={300} className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/women/4.jpg" alt=""/>
                <Image  width={300} height={300} className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/men/34.jpg" alt=""/>
                <Image  width={300} height={300} className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/women/6.jpg" alt=""/>
                <Image  width={300} height={300} className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/men/9.jpg" alt=""/>
                <Image  width={300} height={300} className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/women/9.jpg" alt=""/>
            </div>
            <div>Join 5,000+ other members</div>
        </div>
    </div>
</div>
  )
}

export default Response