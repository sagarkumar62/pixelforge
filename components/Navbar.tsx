'use client'

import { Button } from './ui/button'
import { Gamepad2 } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Gamepad2 className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">PixelForge</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <Button 
          onClick={() => window.location.href = '/contact'} 
          className="bg-purple-600 hover:bg-purple-700"
        >
          Get Started
        </Button>
      </div>
    </nav>
  )
}
