import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              A collection of my work, showcasing my skills and experience in web development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ProjectCard
              title="TapQuiz"
              description="A fun and engaging quiz app where you can test your knowledge on various topics. Create quizzes and compete with friends in real-time."
              link="https://quiz.erzen.tk"
              featured
            />
            <ProjectCard
              title="Erzen Files"
              description="A modern cloud storage app designed for simplicity and ease of use. Upload, download, and share files seamlessly."
              link="https://files.erzen.tk"
              featured
            />
            <ProjectCard
              title="Erzen Chat"
              description="Stay connected with a sleek and user-friendly chat app. Create groups, send messages, and share files effortlessly."
              link="https://s.erzenchat.tk"
              featured
            />
            <ProjectCard
              title="URL Shortener"
              description="Simplify long URLs with this efficient and straightforward tool. Create short links and share them in just a few clicks."
              link="https://er-z.tk"
            />
            <ProjectCard
              title="Groceries"
              description="Plan and organize your shopping with ease. Create detailed grocery lists, add items, and share them with others for better collaboration."
              link="https://groceries.erzen.tk"
            />
            <ProjectCard
              title="Portfolio Website"
              description="My personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS."
              link="#"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

