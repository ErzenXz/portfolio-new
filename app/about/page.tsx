import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Get to know more about my background, skills, and passion for web development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-8">
            <div className="md:col-span-1">
              <div className="sticky top-20">
                <div className="aspect-square relative rounded-xl overflow-hidden mb-6 border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Erzen Krasniqi"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <Button className="w-full" asChild>
                    <a href="/CV.pdf" download="Erzen_Krasniqi_CV.pdf">
                      <Download className="mr-2 h-4 w-4" /> Download CV
                    </a>
                  </Button>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Web Developer</Badge>
                    <Badge variant="outline">UI/UX Enthusiast</Badge>
                    <Badge variant="outline">Problem Solver</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Hey there!</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    I am a passionate and creative Software Developer with a strong background in front-end and back-end
                    development. I have a keen eye for detail and a strong understanding of the latest web technologies.
                    I am a team player and a problem solver who thrives in a fast-paced environment. I am always looking
                    to learn and grow as a developer and as a person.
                  </p>
                  <p>
                    I am currently studying Computer Science at the University of Prishtina. I enjoy working on personal
                    projects and collaborating with other developers to create innovative solutions. I am always looking
                    for new challenges and opportunities to expand my skill set.
                  </p>
                  <p>
                    Feel free to check out my projects and get in touch if you would like to work together. I am always
                    open to new ideas and collaborations. Let's create something amazing together!
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Skills & Expertise</h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-4">Programming Skills</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          HTML
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          CSS
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          JavaScript
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          TypeScript
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          C#
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          SQL
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          PHP
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Python
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Java
                        </Badge>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-4">Tools</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Adobe XD
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Photoshop
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Illustrator
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          VS Code
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          GitHub
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Git
                        </Badge>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-4">Frameworks</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          React
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Angular
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Node.js
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          .NET
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Bootstrap
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          jQuery
                        </Badge>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-4">Soft Skills</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Teamwork
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Problem Solving
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Communication
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Time Management
                        </Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2" variant="secondary">
                          Adaptability
                        </Badge>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Background</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    I was born and raised in Lipjan, Kosovo. I have always been passionate about technology and design.
                    I started learning web development at a young age and have been hooked ever since. I love creating
                    beautiful and functional websites that make a difference in people's lives.
                  </p>
                  <p>
                    In my free time, I enjoy playing video games, reading, and traveling. I am always looking for new
                    experiences and adventures to broaden my horizons. I am a firm believer in lifelong learning and am
                    always looking for ways to improve myself and my skills.
                  </p>
                  <p>
                    I am always open to new ideas and collaborations. If you have a project you would like to work on
                    together, feel free to get in touch. I am always looking for new challenges and opportunities to
                    create something amazing. Let's build something great together!
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

