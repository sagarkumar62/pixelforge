import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Gamepad2, Award, Code2, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the Game Development Experts
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate gamers and industry veterans creating unforgettable gaming experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 text-lg mb-6">
              Founded by passionate gamers and industry veterans, PixelForge has been at the forefront of game
              development innovation for over 8 years. We combine artistic vision with technical excellence to create
              unforgettable gaming experiences.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Our team of 25+ developers, artists, and designers work collaboratively to bring your gaming dreams to
              reality, whether you're an indie developer or a major publisher.
            </p>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-purple-400" />
                <span className="text-white font-semibold">25+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-purple-400" />
                <span className="text-white font-semibold">Award Winning</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/game-dev-team.png" alt="PixelForge Team" className="rounded-lg shadow-2xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-white/5 border-white/10 p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Award className="h-8 w-8 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300">
              To push the boundaries of gaming by creating innovative, engaging, and unforgettable experiences that inspire players worldwide.
            </p>
          </Card>

          <Card className="bg-white/5 border-white/10 p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Lightbulb className="h-8 w-8 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300">
              To become the leading force in game development, known for creativity, technical excellence, and player-first experiences.
            </p>
          </Card>

          <Card className="bg-white/5 border-white/10 p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Code2 className="h-8 w-8 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Our Approach</h3>
            </div>
            <p className="text-gray-300">
              Combining cutting-edge technology with artistic innovation to create games that resonate with players globally.
            </p>
          </Card>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Company Milestones</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Games Shipped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">10M+</div>
              <div className="text-gray-300">Players Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Constantly pushing boundaries and embracing new technologies to create unique gaming experiences.
              </p>
            </Card>
            <Card className="bg-white/5 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quality</h3>
              <p className="text-gray-300">
                Unwavering commitment to excellence in every aspect of game development.
              </p>
            </Card>
            <Card className="bg-white/5 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Player Focus</h3>
              <p className="text-gray-300">
                Creating games that prioritize player enjoyment and engagement above all else.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
