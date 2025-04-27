'use client'

export default function Footer() {
  return (
    <footer className="w-full mt-12 border-t border-muted-foreground/20 dark:border-muted-foreground/40 py-6 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} Fares Bahamdan. All rights reserved.
      </p>
      <p className="mt-2">
        Built with <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js</span> and ❤️
      </p>
    </footer>
  )
}
