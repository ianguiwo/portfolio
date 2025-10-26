import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const Header = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-16'
    >
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='flex items-center justify-center gap-4 text-4xl sm:text-6xl lg:text-[66px] font-Ovo'
      >
        <span>hi, i'm ian</span>
        <Image src={assets.exclamation_mark} alt="Exclamation mark icon" className='w-12 sm:w-16 rounded-full' />
      </motion.div>


      <motion.h1
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-4xl sm:text-6xl lg:text-[66px] font-Ovo'
      >
        a computer/electrical engineer.
      </motion.h1>

      <motion.p
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='max-w-2xl mx-auto font-Ovo'
      >
        particularly interested in embedded systems, electronics, low-level work. <br />
        always open to expand and try new things!
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='flex flex-col sm:flex-row items-center gap-4 mt-4'
      >
        <a 
          href="#contact" 
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
        >
          contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </a>

        <a 
          href="/sample-resume.pdf" 
          download 
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
        > 
          my resume <Image src={assets.download_icon} alt='' className='w-4'/>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Header
