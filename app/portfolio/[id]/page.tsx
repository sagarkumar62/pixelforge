'use client'

import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useRouter } from "next/navigation"

export default function ProjectDetails() {
  const router = useRouter()
  const selectedItem = useSelector((state: RootState) => state.portfolio.selectedItem)

  if (!selectedItem) {
    router.push('/portfolio')
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <Badge className="absolute top-4 left-4 bg-purple-600">
              {selectedItem.category}
            </Badge>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-bold text-white">{selectedItem.title}</h1>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <span className="text-white text-xl">{selectedItem.rating}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Details</h2>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-gray-400">Release Date:</span> {selectedItem.details.releaseDate}</p>
                  <p><span className="text-gray-400">Developer:</span> {selectedItem.details.developer}</p>
                  <p><span className="text-gray-400">Publisher:</span> {selectedItem.details.publisher}</p>
                  <p><span className="text-gray-400">Platforms:</span> {selectedItem.platforms}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {selectedItem.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">About</h2>
              <p className="text-gray-300 leading-relaxed">
                {selectedItem.details.longDescription}
              </p>
            </div>

            <button
              onClick={() => router.back()}
              className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
