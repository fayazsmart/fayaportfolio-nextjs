import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
      <h1 className=' bg-gradient-to-r from-black via-gray-800 to-gray-900 
               text-transparent bg-clip-text transition duration-300 
               text-4xl font-bold cursor-text mb-2'>Fayaa </h1>

             <div className='flex items-center justify-center gap-2 mx-auto w-max'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                aafrithfayaz@gmail.com 
             </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t 
      boeder-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Fayaa. All rights reserved. </p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>


        <li><a target="_blank" href="https://www.instagram.com/_fayaz_fx._/?next=%2Freel%2FDJMQVwXy-rq%2F">
        <i className="fa-brands fa-instagram text-2xl"></i></a></li>
        <li><a target='_blank' href='https://www.linkedin.com/in/afrith-fayaz-34b4a0326/'>
        <i className="fa-brands fa-linkedin text-2xl"></i></a></li>
        <li><a target='_blank' href='https://github.com/fayazsmart'>
        <i className="fa-brands fa-github text-2xl"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
