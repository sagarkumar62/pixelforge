'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setSelectedItem } from "@/redux/features/portfolioSlice"
import { useRouter } from "next/navigation"

export default function PortfolioPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const portfolioItems = useSelector((state: RootState) => state.portfolio.items)

  const handleCardClick = (id: string) => {
    dispatch(setSelectedItem(id))
    router.push(`/portfolio/${id}`)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our latest gaming masterpieces that have captivated players worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id}
              className="bg-white/5 border-white/10 overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick(item.id)}
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
    </div>
  )
}
