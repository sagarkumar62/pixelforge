import { Gamepad2 } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity">
              <Gamepad2 className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">PixelForge</span>
            </Link>
            <p className="text-gray-400">Crafting epic gaming experiences with passion and innovation.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/game-development" className="hover:text-purple-400 transition-colors">
                  Game Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-games" className="hover:text-purple-400 transition-colors">
                  Mobile Games
                </Link>
              </li>
              <li>
                <Link href="/services/art-design" className="hover:text-purple-400 transition-colors">
                  Art & Design
                </Link>
              </li>
              <li>
                <Link href="/services/game-porting" className="hover:text-purple-400 transition-colors">
                  Game Porting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-purple-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-purple-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="https://twitter.com/pixelforge" target="_blank" className="hover:text-purple-400 transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/company/pixelforge" target="_blank" className="hover:text-purple-400 transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/pixelforge" target="_blank" className="hover:text-purple-400 transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com/c/pixelforge" target="_blank" className="hover:text-purple-400 transition-colors">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PixelForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
