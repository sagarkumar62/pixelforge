import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Code, Palette, Headphones, Smartphone, Zap } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Game Development Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We offer end-to-end game development services across all platforms and genres
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <Monitor className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">PC & Console Games</CardTitle>
              <CardDescription className="text-gray-300">
                High-performance games for PC, PlayStation, Xbox, and Nintendo Switch
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• Unity & Unreal Engine development</li>
                <li>• Cross-platform optimization</li>
                <li>• Performance tuning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <Smartphone className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Mobile Games</CardTitle>
              <CardDescription className="text-gray-300">
                Engaging mobile experiences for iOS and Android platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• Native & hybrid development</li>
                <li>• App Store optimization</li>
                <li>• Monetization strategies</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <Code className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Game Programming</CardTitle>
              <CardDescription className="text-gray-300">
                Custom game engines and advanced programming solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• Custom engine development</li>
                <li>• Multiplayer networking</li>
                <li>• AI & procedural generation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <Palette className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Art & Design</CardTitle>
              <CardDescription className="text-gray-300">
                Stunning visuals and immersive game art creation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• 2D/3D art & animation</li>
                <li>• UI/UX design</li>
                <li>• Concept art & storyboarding</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <Headphones className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Audio Design</CardTitle>
              <CardDescription className="text-gray-300">
                Immersive soundscapes and dynamic audio systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• Music composition</li>
                <li>• Sound effects design</li>
                <li>• Voice acting & recording</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <Zap className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Game Porting</CardTitle>
              <CardDescription className="text-gray-300">
                Seamless game porting across multiple platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• Platform optimization</li>
                <li>• Performance enhancement</li>
                <li>• Quality assurance testing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
