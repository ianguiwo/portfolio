'use client'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '../../assets/assets'

const projectList = [
  {
    id: 'musicbox',
    title: 'I2C Music Box',
    abstract: 'In the process of creating a programmable music box using a Sparkfun Redboard Plus and Qwiic Buzzers.' +
              'The goal is to recreate the song "Like Someone In Love" by Chet Baker, with possibilites of expanding ' +
              'the project into a program that can read and transcribe three harmony sheet music.',
    approach: [
      'Chose the Sparkfun Redboard Plus due to compatibilties with the buzzer\'s Arduino library (buzzers can be used to program sequences and tones).',
      'Modified existing C++ software for the Arduino-IDE.',
      'Using sheet-music writing software to write the music prior to programming the sounds.'
    ],
    outcome: 'Still currently a work in progress.',
    skills: 'Embedded Systems, C++, Microcontroller Prototyping',
  },
  {
    id: 'asl',
    title: 'Computer Vision ASL Translator',
    abstract: 'Created a real-time ASL translator to help deaf and hard-of-hearing coworkers communicate in hybrid workplaces, aiming to reduce communication barriers and provide a simple alternative to expensive hearing aids.',
    approach: [
      'Considering portability, cost, reliability, and ease of use, we decided to use an external webcam as a tool for this project.',
      'After collecting and hand labeling images of the ASL alphabet, we trained Google\'s Teachable Machine to recognize symbols.',
      'Using Python, TensorFlow, and Keras, the prototype displays translations on-screen.',
      'Due to time constraints the code wasn\'t fully integrated into a webcam, yet it demonstrates a working model that can be applied in professional and daily settings.'
    ],
    outcome: 'We tested the project by training the algorithm on various ASL signs, improving accuracy from 58.06% to 89.65% by adding more samples and clearer signs. The software also converts recognized signs into text, building words as users press a key and reading out sentences using Python’s text-to-speech library. Some technical limitations remain, such as freezing when the hand moves out of bounds, but further testing aims to maximize accuracy and refine functionality.',
    skills: 'Python, Tensorflow, Keras, Google\'s Teachable Machine',
    image: '/cv_asl_poster-1.png'
  },
  {
    id: 'security',
    title: 'Biometric Security System',
    abstract: 'Prototyped and created an Arduino-powered 3D container with finger scanning/unlocking capabilities for use in a shared accommodation.',
    approach: [
      'Designed a container that could house an Arduino Uno, a servo motor, battery, fingerprint scanner, and respective wiring.',
      'Powered using a 9V battery.',
      'Created two different designs before settling on a final product.',
    ],
    outcome: 'Successfully produced one working container (that was used extensively my freshman year of college).',
    skills: 'AutoCAD, Arduino',
  },
  {
    id: 'site',
    title: 'Personal Website',
    abstract: 'Created a website to showcase my interests and experience.',
    approach: [
      'Followed YouTube tutorials and utilized online resources to create an envisioned portfolio website.',
    ],
    outcome: 'It worked.',
    skills: 'Javascript, React, Tailwind, Next.js',
  },
]

export default function Projects() {
  return (
    <div className="w-full min-h-screen px-[12%] pt-20 sm:pt-10 relative">
      {/* Logo */}
      <div className="w-full flex justify-center sm:justify-start mb-6">
        <Link href="/">
          <Image 
            src={assets.signature} 
            alt="Ian's logo" 
            className="w-28 sm:w-32 cursor-pointer" 
          />
        </Link>
      </div>

      <h1 className="text-4xl font-Ovo text-center mb-10">My Projects</h1>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <div className="lg:w-1/4 border-r pr-6 lg:sticky lg:top-20 h-fit">
          <ul className="space-y-4 font-Ovo text-lg">
            {projectList.map(project => (
              <li key={project.id}>
                <a href={`#${project.id}`} className="hover:underline">{project.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Content */}
        <div className="flex-1 space-y-16">
          {projectList.map(project => (
            <section key={project.id} id={project.id} className="scroll-mt-20">
              <h2 className="text-2xl font-Ovo mb-2">{project.title}</h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">Abstract / Goal</h3>
                <p className="text-base leading-relaxed font-Ovo">{project.abstract}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">Approach</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {project.approach.map((point, index) => (
                    <li key={index} className="text-base leading-relaxed font-Ovo">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">Outcome</h3>
                <p className="text-base leading-relaxed font-Ovo">{project.outcome}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Skills</h3>
                <p className="text-base leading-relaxed font-Ovo">{project.skills}</p>
              </div>

              {project.image && (
                <div className="mt-6">
                  <Image
                    src={project.image}
                    alt={`${project.title} image`}
                    width={800}
                    height={500}
                    className="rounded-lg shadow-md"
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="fixed bottom-6 left-6 px-5 py-2 bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition"
      >
        ← Back to Home
      </Link>
    </div>
  )
}
