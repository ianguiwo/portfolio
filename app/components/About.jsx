import { assets, infoList, toolsData } from '../../assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>a brief synopsis</h4>
      <h2 className='text-center text-5xl font-Ovo'>about me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className="w-64 sm:w-80 rounded-3xl max-w-none h-full lg:h-auto flex-shrink-0">
            <Image src={assets.headshot_one} alt="user" className="w-full h-full object-cover rounded-3xl" />
        </div>

        <div className='flex-1 h-full'>
            <h5 className='text-3xl sm:text-4xl font-Ovo mb-4'>
                I'm a computer/electrical engineer based in Philadelphia.
            </h5>

            <p className='max-w-2xl font-Ovo text-lg sm:text-xl leading-relaxed'>
                Currently a fourth year at Drexel University (out of five!), dual majoring in Electrical and
                Computer Engineering with a dual minor in Mathematics and Computer Science. 
                My work spans from low-level C/C++ applications for embedded hardware to electrical design for robotics.
                <br /> <br />
                But I'm not just an engineer! In my free time, I study jazz piano (with a particular interest in Bill Evans and Vince Guaraldi), am a long distance runner (aiming for a marathon!),
                hike, and train Muay Thai. 
                <br /> <br />
                I am currently in Leeds, UK, taking a semester at the University of Leeds. Here, I am part of the Jazz/Blues big band and run for the cross country team.
                </p>
                <p className="mt-6">
                    <strong>Side note:</strong> I would encourage you to take a look at my{' '}
                    <span className="underline">project portfolio and full, multi-page resume</span>{' '}
                    using the navigation bar, as there's only so much that can fit in one page!
                </p>
        </div>


      </div>
    </div>
  )
}

export default About
