"use client"

import { useState } from "react"
import { Copy, Check, Twitter, MessageCircle, Globe, TrendingUp, Users, Zap, Shield, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function HomePage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("Coming Soon - Join our community for updates!")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-brain"></div>
            <span className="font-bold text-xl text-gradient-brain">$BRAIN</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </a>
            <a href="#docs" className="text-gray-600 hover:text-primary transition-colors">
              Docs
            </a>
            <a href="#roadmap" className="text-gray-600 hover:text-primary transition-colors">
              Roadmap
            </a>
            <a href="#community" className="text-gray-600 hover:text-primary transition-colors">
              Community
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://x.com/BRAIN__LET" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer transition-colors" />
            </a>
            <a href="https://t.me/+5JUFhHohSIQ0YWVk" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <Image
                src="/brain-logo.png"
                alt="$BRAIN Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-gradient-brain leading-tight">
              $BRAIN
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The smartest memecoin on Solana. Powered by collective intelligence and lightning-fast transactions.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-brain hover:opacity-90 text-white px-8"
                onClick={() => window.open("https://t.me/+5JUFhHohSIQ0YWVk", "_blank")}
              >
                Join Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-transparent"
                onClick={() => window.open("https://x.com/BRAIN__LET", "_blank")}
              >
                Follow Us
              </Button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 max-w-md mx-auto">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Contract Address</h3>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-3">
                  <code className="text-sm text-gray-600 flex-1 truncate">Coming Soon...</code>
                  <Button size="sm" variant="ghost" onClick={copyToClipboard} className="shrink-0">
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gradient-brain">About $BRAIN</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            $BRAIN isn't just another memecoin - it's the evolution of collective intelligence in crypto. Born on Solana's 
            lightning-fast blockchain, $BRAIN harnesses the power of community-driven innovation. We're building more than 
            a token; we're creating a movement where every holder contributes to our collective genius.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl">Lightning Fast</h3>
              <p className="text-gray-600">Powered by Solana's high-speed blockchain</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl">Collective Intelligence</h3>
              <p className="text-gray-600">Powered by collective intelligence</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl">Secure & Transparent</h3>
              <p className="text-gray-600">Audited smart contracts and full transparency</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl">Growth Focused</h3>
              <p className="text-gray-600">Built for sustainable long-term growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient-brain">Tokenomics</h2>
            <p className="text-lg text-gray-600">Fair launch with community-first distribution</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gradient-brain">1B</CardTitle>
                <CardDescription>Total Supply</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">Fixed supply, no minting</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gradient-brain">90%</CardTitle>
                <CardDescription>Liquidity Pool</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">Locked for community trading</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gradient-brain">5%</CardTitle>
                <CardDescription>Marketing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">Community growth & partnerships</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gradient-brain">5%</CardTitle>
                <CardDescription>Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">Future platform development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gradient-brain">Documentation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-brain rounded-full mx-auto flex items-center justify-center mb-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Whitepaper</CardTitle>
                <CardDescription>Deep dive into $BRAIN's vision and technology</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-brain rounded-full mx-auto flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Smart Contract</CardTitle>
                <CardDescription>Verified and audited contract details</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gradient-brain">Why $BRAIN?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="font-bold text-xl">Early Opportunity</h3>
              <p className="text-gray-600">Get in before the masses discover the power of collective intelligence</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl mb-4">🌐</div>
              <h3 className="font-bold text-xl">Strong Community</h3>
              <p className="text-gray-600">Join thousands of like-minded individuals building the future</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="font-bold text-xl">Innovation First</h3>
              <p className="text-gray-600">Not just a meme - we're building real utility and value</p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient-brain">Roadmap</h2>
            <p className="text-lg text-gray-600">Our journey to becoming the smartest memecoin</p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-gradient-brain rounded-full flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Launch Phase</h3>
                <p className="text-gray-600">Community building, social media presence, and preparing for launch</p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Complete
                </span>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-gradient-brain rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Token Launch</h3>
                <p className="text-gray-600">Smart contract deployment, DEX listing, and initial trading</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  In Progress
                </span>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Growth & Utility</h3>
                <p className="text-gray-600">Marketing campaigns, partnerships, and utility development</p>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Future
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-gradient-brain">Join the Community</h2>
          <p className="text-lg text-gray-600">
            Connect with thousands of $BRAIN enthusiasts and be part of the collective intelligence revolution
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://t.me/+5JUFhHohSIQ0YWVk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-primary transition-colors group"
            >
              <div className="space-y-4">
                <MessageCircle className="w-10 h-10 text-primary mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl">Telegram</h3>
                <p className="text-gray-600 text-sm">Join our active community chat</p>
              </div>
            </a>
            <a
              href="https://x.com/BRAIN__LET"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-primary transition-colors group"
            >
              <div className="space-y-4">
                <Twitter className="w-10 h-10 text-primary mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl">X (Twitter)</h3>
                <p className="text-gray-600 text-sm">Follow for updates and announcements</p>
              </div>
            </a>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="space-y-4">
                <Globe className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold text-xl">Website</h3>
                <p className="text-gray-600 text-sm">Official $BRAIN headquarters</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-brain rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join the Revolution?</h3>
            <p className="text-lg mb-6 opacity-90">
              Be part of the collective intelligence that's reshaping the future of memecoins
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.open("https://t.me/+5JUFhHohSIQ0YWVk", "_blank")}
              >
                Join Telegram
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.open("https://x.com/BRAIN__LET", "_blank")}
              >
                Follow on X
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-brain"></div>
            <span className="font-bold text-xl text-gradient-brain">$BRAIN</span>
          </div>
          <p className="text-gray-400">Collective Intelligence. Powered by Solana.</p>
          <div className="flex items-center justify-center gap-6">
            <a href="https://x.com/BRAIN__LET" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </a>
            <a href="https://t.me/+5JUFhHohSIQ0YWVk" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </a>
          </div>
          <div className="text-sm text-gray-500 space-y-2">
            <p>© 2024 $BRAIN. All rights reserved.</p>
            <p>This is a meme token created for entertainment purposes.</p>
            <p>Please do your own research before investing.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}