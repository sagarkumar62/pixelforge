import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Bring Your Game to Life
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with our team to discuss your game development project
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-white/5 border-white/10">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-sm">First Name</label>
                    <Input 
                      type="text" 
                      placeholder="John"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm">Last Name</label>
                    <Input 
                      type="text" 
                      placeholder="Doe"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm">Project Type</label>
                  <select className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white">
                    <option value="" className="bg-slate-900">Select project type</option>
                    <option value="pc-console" className="bg-slate-900">PC/Console Game</option>
                    <option value="mobile" className="bg-slate-900">Mobile Game</option>
                    <option value="vr" className="bg-slate-900">VR Experience</option>
                    <option value="porting" className="bg-slate-900">Game Porting</option>
                    <option value="other" className="bg-slate-900">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[150px]"
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-semibold">Email Us</h3>
                    <p className="text-gray-300">contact@pixelforge.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-semibold">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-semibold">Visit Us</h3>
                    <p className="text-gray-300">123 Game Street<br />Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-semibold">Live Chat</h3>
                    <p className="text-gray-300">Available 24/7 for support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
