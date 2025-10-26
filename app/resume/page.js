'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'

export default function Resume() {
  const [activeResume, setActiveResume] = useState('resume1')

  const getResumeSrc = () => {
    return activeResume === 'resume1'
      ? '/sample-resume.pdf'
      : '/sample-resume.pdf'
  }

  return (
    <div className='w-full min-h-screen px-[12%] py-10 relative'>

      {/* Logo */}
      <div className="absolute top-10 left-[12%]">
        <Link href="/">
            <Image 
                src={assets.signature} 
                alt="Ian's logo" 
                className="w-28 sm:w-32 cursor-pointer" 
            />
        </Link>
      </div>

      <h1 className='text-4xl font-Ovo text-center mb-6'>My Resume</h1>

      {/* Resume */}
      <div className='flex justify-center gap-4 mb-6'>
        <button
          onClick={() => setActiveResume('resume1')}
          className={`px-6 py-2 rounded-full border ${
            activeResume === 'resume1'
              ? 'bg-black text-white'
              : 'bg-white text-black'
          }`}
        >
          Resume 1
        </button>
        <button
          onClick={() => setActiveResume('resume2')}
          className={`px-6 py-2 rounded-full border ${
            activeResume === 'resume2'
              ? 'bg-black text-white'
              : 'bg-white text-black'
          }`}
        >
          Resume 2
        </button>
      </div>

      {/* PDF Viewer */}
      <div className='flex justify-center mb-8'>
        <iframe
          src={getResumeSrc()}
          width="100%"
          height="700px"
          className='border rounded-lg shadow-md'
        />
      </div>

      {/* Download Button */}
      <div className='flex justify-center mb-20'>
        <a
          href={getResumeSrc()}
          download
          className='px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition'
        >
          Download {activeResume === 'resume1' ? 'Resume 1' : 'Resume 2'}
        </a>
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className='fixed bottom-6 left-6 px-5 py-2 bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition'
      >
        ← Back to Home
      </Link>
    </div>
  )
}
