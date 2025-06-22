'use client';

import { Supabase, JavaScript, Postman, Python, TailwindCSS, TypeScript, React, NextJs, Figma, GitHubLight, VercelLight, Java} from "developer-icons";

const skills = [
  { name: 'React', icon: <React size={20} /> },
  { name: 'Next.js', icon: <NextJs size={20} /> },
  { name: 'TypeScript', icon: <TypeScript size={20}/> },
  { name: 'Tailwind CSS', icon: <TailwindCSS size={20} /> },
  { name: 'Figma', icon: <Figma size={20} /> },
  { name: 'Python', icon: <Python size={20} /> },
  { name: 'GitHub', icon: <GitHubLight size={20}/> },
  { name: 'Vercel', icon: <VercelLight size={20}/> },
  { name: 'Supabase', icon: <Supabase size={20} /> },
  { name: 'JavaScript', icon: <JavaScript size={20} /> },
  { name: 'Postman', icon: <Postman size={20} /> },
  { name: 'Java', icon: <Java size={20} /> },

];

export default function Technologies() {
  return (
    <div className="px-4 pt-10 pb-20 flex justify-center">
      <div className="relative w-full max-w-6xl h-auto rounded-3xl overflow-hidden shadow-2xl 
                      dark:bg-gradient-to-br dark:from-zinc-700 dark:to-black bg-white p-8 md:p-12">
      {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">
          <span className="text-x3">💻</span> Skills
        </h2>
        <p className="text-muted-foreground mt-2 mb-5">
          I&apos;ve worked with the following but not limited to.
        </p>
        {/* Content */}
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-md shadow hover:scale-105 transition-transform duration-200"
            >
              {skill.icon}
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
