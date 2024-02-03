import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Brands = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="faq">
    <h2 className="text-4xl font-bold text-center">Happy Customers</h2>
    <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Collaborating Brands and  Happy coustumer. Extremely powerfull technologies
    </p>
    <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent opacity-20 mt-10">
        <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            <Link target="_blank" href="">
                <Image width={300} height={300} alt="" className="h-20  mx-auto"  src="https://www.svgrepo.com/show/442910/brand-apple.svg"/>
            </Link>
            <Link target="_blank" href="">
                <Image width={300} height={300} alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/443329/brand-pixar.svg"/>
            </Link>
            <Link target="_blank" href="">
                <Image width={300} height={300} alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/443079/brand-geforce.svg"/>
            </Link>
            <Link target="_blank" href="">
                <Image width={300} height={300} alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/443042/brand-ethereum.svg"/>
            </Link>
            <Link target="_blank" href="">
                <Image width={300} height={300} alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/443206/brand-line.svg"/>
            </Link>
            <Link target="_blank" href="">
                <Image width={300} height={300} alt="" className="h-20  mx-auto" src="https://www.svgrepo.com/show/519278/slack.svg"/>
            </Link>
        </div>
    </div>
</div>
  )
}

export default Brands