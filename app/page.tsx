'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/Footer"
import {
  Gamepad2,
  Smartphone,
  Monitor,
  Zap,
  Users,
  Trophy,
  Star,
  ArrowRight,
  Play,
  Code,
  Palette,
  Headphones,
} from "lucide-react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useRouter } from "next/navigation"

export default function GameDevAgency() {
  const { services, items } = useSelector((state: RootState) => state.portfolio)
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            Award-Winning Game Development
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Epic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Gaming</span>
            <br />
            Experiences
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From indie gems to AAA blockbusters, we bring your gaming vision to life with cutting-edge technology and
            creative excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
              onClick={(e) => {
                e.preventDefault();
                router.push('/portfolio');
              }}
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We offer comprehensive game development services across all platforms and genres
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  {service.icon === 'Monitor' && <Monitor className="h-12 w-12 text-purple-400 mb-4" />}
                  {service.icon === 'Smartphone' && <Smartphone className="h-12 w-12 text-purple-400 mb-4" />}
                  {service.icon === 'Code' && <Code className="h-12 w-12 text-purple-400 mb-4" />}
                  {service.icon === 'Palette' && <Palette className="h-12 w-12 text-purple-400 mb-4" />}
                  {service.icon === 'Headphones' && <Headphones className="h-12 w-12 text-purple-400 mb-4" />}
                  {service.icon === 'Zap' && <Zap className="h-12 w-12 text-purple-400 mb-4" />}
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore our latest gaming masterpieces that have captivated players worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <Card 
                key={item.id}
                className="bg-white/5 border-white/10 overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/portfolio/${item.id}`);
                }}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-purple-600">{item.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white">{item.rating}</span>
                    </div>
                    <span className="text-gray-400">{item.platforms}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
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
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About PixelForge</h2>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your gaming vision and turn it into reality. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
