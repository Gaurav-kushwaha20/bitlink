import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='text-white h-16 px-3 bg-purple-800 flex justify-between items-center'>
            <div className='font-bold text-lg'>
                BitLinks
            </div>
            <ul className='flex gap-4 items-center'>
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/"}><li>About</li></Link>
                <Link href={"/shorten"}><li>Shorten</li></Link>
                <Link href={"/"}><li>Contact Us</li></Link>

                <li className='flex gap-4'>
                    <Link href={"/generate"}><button className='bg-purple-500 rounded-lg p-3 py-1 shadow-lg '>Try Now</button></Link>
                    <Link href={"/github"}><button className='bg-purple-500 rounded-lg p-3 py-1 shadow-lg'>Github</button></Link>
                </li>
            </ul>
        </nav>
  )
}




export default Navbar
