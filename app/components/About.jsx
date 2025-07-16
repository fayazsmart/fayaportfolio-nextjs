import {assets,  infoList, toolsData } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10
    scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo mt-0'>Introduction</h4>
      <h2 className='text-center sm:text-5xl font-Ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20
      sm:ml-0 ml-10'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
        <Image src={assets.user_image} alt='user' className='ml-[-40px] ... w-70 mt--8 h-100 object-cover 
            rounded-3xl'/>
        </div>

        <div className='flex-1'>
          <p className='ml-[-80px] ... -translate-y-5'>I am an experienced fullstack developer with over a 
            decade of professional expertise in the field.
            Thoughout my career, I have had the privilege of collaborating 
            with prestigious organizations,
            contributing to their success and growth.
          </p>

          <ul className='grid grid-cols-3 sm:grid-cols-3 gap-6 max-w-2xl transform translate-y-2 ... ml-[-80px] ...'>
            {infoList.map(({icon,iconDark,title,description}, index) => (
                <li className='border-[0.5px] border-gray-400 rounded-xl
                p-6 cursor-pointer hover:bg-pink-50
                hover:-translate-y-1 duration-500 
                hover:shadow-[4px_4px_0_#000] ' 
                 key={index}>
                    <Image src={icon} alt="title" className='w-7 mt-3' />
                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                    <p className='text-gray-600 text-sm'>{description}</p>
                </li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700 font-Ovo ml-[-80px] ...'>Tools I use</h4>

          <ul className='flex items-center gap-3 sm:gap-5 ml-[-80px] ...'>
            {toolsData.map((tool,index)=>(
              <li className='flex items-center justify-center
              w-12 sm:w-14 aspect-square border border-gray-400 
              rounded-lg cursor-pointer hover:-translate-y-1 duration-500  '
               key={index}>
                <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
