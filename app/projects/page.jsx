'use client'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '../../assets/assets'

const projectList = [
  { id: 'radar', title: 'Radar Visualization', description: 'Real-time radar data rendering using embedded C and WebGL.' },
  { id: 'rover', title: 'Autonomous Rover', description: 'Electrical design and embedded control for a robotics rover.' },
  { id: 'portfolio', title: 'Portfolio Site', description: 'Next.js site showcasing technical and design skills.' },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="w-full min-h-screen px-[12%] py-10 relative">

      {/* Logo */}
      <Link href="/">
        <Image 
          src={assets.signature} 
          alt="Ian's logo" 
          className="w-28 sm:w-32 cursor-pointer absolute top-10 left-[12%]" 
        />
      </Link>

      <h1 className="text-4xl font-Ovo text-center mb-10">My Projects</h1>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* Sidebar */}
        <div className="lg:w-1/4 border-r pr-6 sticky top-20 h-fit">
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
              <p className="text-lg leading-relaxed font-Ovo">{project.description}</p>
              {/* You can add images, links, or tech stacks here */}
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
