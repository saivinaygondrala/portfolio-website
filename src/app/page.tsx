import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Publications from '@/components/Publications'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { portfolioConfig } from '@/config/portfolio'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Publications />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center text-gray-400">
        <div className="section-padding">
          <p>&copy; 2024 {portfolioConfig.personal.name}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}