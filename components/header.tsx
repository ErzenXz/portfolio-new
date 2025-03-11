"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="font-bold text-2xl relative group">
            <span className="relative z-10">Erzen Krasniqi</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-base font-medium transition-colors hover:text-primary relative group ${
                  pathname === route.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ${
                    pathname === route.href ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild className="rounded-full px-6">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 top-20 z-50 bg-background/95 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col items-center justify-center h-full gap-10">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors hover:text-primary ${
                  pathname === route.href ? "text-primary" : "text-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
            <Button asChild className="mt-6 rounded-full px-8 py-6 text-lg">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Let's Talk
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

