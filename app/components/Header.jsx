import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col
      items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='Profile Image' className="mt-25 w-32 h-32 rounded-full object-cover" />
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Afrith Fayaz
        <Image src={assets.hand_icon} alt='Waving Hand' className='w-6' />
      </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-serif'>
        Fullstack web Developer<br/> based in TN.
      </h1>

      <p className='max-w-2xl mx-auto font-Ovo'>
        I am a Fullstack Developer from CBE, TN with 1 year of experience
        in multiple companies.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a
          href='#contact'
          className='px-10 py-3 border border-white rounded-full bg-black 
                text-white flex items-center gap-2'
        >
          contact me
          <Image src={assets.right_arrow_white} alt='Arrow Icon' className='w-4' />
        </a>

        <a
          href='https://faya-portfolio.vercel.app/'
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex
                items-center gap-2'
        >
          2nd portfolio
          <Image src={assets.download_icon} alt='Download Icon' className='w-4' />
        </a>
      </div>
    </div>
  )
}

export default Header
