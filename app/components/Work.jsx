import { assets, workData } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>a minor glimpse into</h4>

      <h2 className='text-center text-5xl font-Ovo'>my portfolio</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        i encourage
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {workData.map((project, index) => (
          <div
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
            relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className='bg-white w-8/12 rounded-md absolute 
                bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex flex-col items-center
                text-center duration-500 group-hover:bottom-7'
            >
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
        my-20 hover:bg-blue-50 duration-500'
      >
        Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
      </a>
    </div>
  )
}

export default Work
