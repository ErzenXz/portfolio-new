import Link from "next/link"
import { ArrowLeft, Mail, Github, Linkedin, Facebook } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] opacity-60"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <Link
            href="/"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-col gap-4 mb-8">
            <Badge className="w-fit px-4 py-1.5 text-sm bg-primary/10 text-primary">Contact</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              I'm always open to new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mt-8 items-stretch">
            <div className="flex flex-col gap-10 h-full">
              <div className="bg-background/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-primary/10 flex-1 transform transition-all duration-300 hover:shadow-2xl hover:border-primary/20">
                <h2 className="text-3xl font-semibold mb-6">Let's create something amazing together</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind or just want to say hello, I'd love to hear from you. Fill out the
                  form or reach out through any of the channels below.
                </p>

                <div className="space-y-6 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:contact@example.com" className="text-lg hover:text-primary transition-colors">
                        contact@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg">Prishtina, Kosovo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-primary/10 flex-1 transform transition-all duration-300 hover:shadow-2xl hover:border-primary/20">
                <h2 className="text-3xl font-semibold mb-6">Connect with me</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Follow me on social media to stay updated with my latest projects and design insights.
                </p>

                <div className="flex gap-6 mt-auto">
                  <a
                    href="https://github.com/ErzenXz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 w-14 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors shadow-md border border-border"
                  >
                    <Github className="h-7 w-7" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/erzen-krasniqi7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 w-14 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors shadow-md border border-border"
                  >
                    <Linkedin className="h-7 w-7" />
                  </a>
                  <a
                    href="https://www.facebook.com/erzen.krasniqi.58/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 w-14 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors shadow-md border border-border"
                  >
                    <Facebook className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-primary/10 h-full transform transition-all duration-300 hover:shadow-2xl hover:border-primary/20">
              <h2 className="text-3xl font-semibold mb-8">Send me a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

