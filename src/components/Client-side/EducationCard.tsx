'use client'

import Image from 'next/image'

type EducationEntry = {
  degree: string
  school: string
  years: string
  details: string
  logoSrc: string
}

type EducationCardProps = {
  title: string
  description: string
  educationEntries: EducationEntry[]
}

export default function EducationCard({
  title,
  description,
  educationEntries,
}: EducationCardProps) {
  return (
    <div className="px-4 pt-10 pb-100 flex justify-center">
      <div className="relative w-full max-w-6xl h-auto rounded-3xl overflow-hidden shadow-2xl 
                      dark:bg-gradient-to-br dark:from-zinc-700 dark:to-black bg-white p-8 md:p-12">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">
            {title}
          </h2>
          <p className="text-muted-foreground mt-2">
            {description}
          </p>
        </div>

        {/* Education Entries */}
        <div className="space-y-8">
          {educationEntries.map((entry, index) => (
            <div
              key={index}
              className="border-l-4 pl-4 border-yellow-400 dark:border-yellow-300 flex items-start gap-4"
            >
              {/* Logo */}
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-md overflow-hidden border border-white/20 dark:border-white/30 bg-white p-1">
                <Image
                  src={entry.logoSrc}
                  alt={`${entry.school} logo`}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-foreground dark:text-white">
                  {entry.degree}
                </h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  {entry.school} | {entry.years}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {entry.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
