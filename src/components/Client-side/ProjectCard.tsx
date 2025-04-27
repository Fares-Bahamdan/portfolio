'use client'

import Image from 'next/image'

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  repoUrl: string
  logoSrc: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  repoUrl,
  logoSrc,
}: ProjectCardProps) {
  return (
    <div className="px-4 pt-10 pb-20 flex justify-center">
      <div className="relative w-full max-w-6xl h-auto rounded-3xl overflow-hidden shadow-2xl 
                      dark:bg-gradient-to-br dark:from-zinc-700 dark:to-black bg-white p-8 md:p-12">

        <div className="flex items-start gap-4">
          {/* Project Logo */}
          <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-md overflow-hidden border border-white/20 dark:border-white/30 bg-white p-1">
            <Image
              src={logoSrc}
              alt={`${title} logo`}
              width={64}
              height={64}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-muted px-2 py-1 rounded-full dark:bg-zinc-600 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Repository →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
