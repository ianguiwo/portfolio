import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.signature} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            ianguiwo@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Ian Guiwo. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://www.linkedin.com/in/ian-guiwo-753a5423a/?skipRedirect=true">Linkedin</a></li>
            <li><a target='_blank' href="https://www.instagram.com/_ianguiwo/">Instagram</a></li>
            <li><a target='_blank' href="https://www.youtube.com/@shotsbyiann">YouTube</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
