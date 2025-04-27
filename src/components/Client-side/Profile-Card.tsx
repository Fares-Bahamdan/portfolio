'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function ProfileCard() {
  useTheme()

  return (
    <div className="px-4 pt-10 pb-35 flex justify-center">
      <div className="relative w-full max-w-6xl h-auto rounded-3xl overflow-hidden shadow-2xl 
                      dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black bg-white p-8 md:p-12">

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 
                        text-foreground dark:text-white">
          
          {/* Text Section */}
          <div className="flex-1 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">🌐 About Me</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            hey, I&apos;m <span className="text-yellow-400 dark:text-yellow-300">Fares</span> 👋
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Passionate FullStack Web Developer from Saudi Arabia, pushing the boundaries of web technology to create immersive digital experiences.
            </p>

            <div className="mt-8 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-xl p-5 w-full">
              <p className="text-sm uppercase font-semibold tracking-wider mb-2 text-muted-foreground">
                🚀 My Mission
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bridging the Gap Between Design and Development: Where creativity meets functionality, and innovation drives progress.
              </p>
              <p className="italic mt-3 text-muted-foreground">
                Keep moving, don't settle. 🚀
              </p>
            </div>
          </div>

          {/* Right: Circular Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 
                          border-white/20 dark:border-white/30 shadow-lg">
            <Image
              src="/face.jpg"
              alt="Suhaib"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
