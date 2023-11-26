import { ReactNode } from 'react'
import Link from 'next/link';
import { Metadata } from 'next'

// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  title: 'Florian Cartier - Software Engineer',
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className='flex flex-row w-full bg-indigo-500 h-28 content-center'>
        {/* Logo and Header Content */}
        <div className='logo bg-white w-1/4 text-center  '>
          Florian Cartier
        </div> 
        {/* Navigation Links */}
        <nav className='flex flex-row gap-4 bg-red-200 mr-2 justify-evenly w-3/4'>

              <Link href="/Projects">Projects</Link>

              <Link href="/Playground">Playground</Link>

              <Link href="/Blog">Blog</Link>

        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        {/* Footer Content */}
      </footer>
    </>
  )
}
