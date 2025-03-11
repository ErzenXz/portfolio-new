import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Facebook, ExternalLink, ChevronDown } from "lucide-react"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center py-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] opacity-40"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-primary/10 rounded-full hidden lg:block"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary/10 rounded-full hidden lg:block"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20">
            <div className="flex-1 space-y-10">
              <div className="space-y-2">
                <div className="inline-block animate-fade-in">
                  <Badge className="px-4 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors backdrop-blur-sm">
                    UI/UX Designer & Developer
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                  Crafting{" "}
                  <span className="relative inline-block">
                    <span className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 blur-md rounded-lg -z-10"></span>
                    <span className="relative text-primary">Digital</span>
                  </span>{" "}
                  Experiences
                </h1>
              </div>

              <p className="text-muted-foreground text-xl md:text-2xl max-w-[600px] leading-relaxed">
                I transform complex problems into elegant, intuitive designs that elevate brands and delight users.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <Link href="/contact">
                    Start a project
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="group rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-primary/5 transition-all duration-300"
                >
                  <Link href="/projects">
                    View portfolio
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M21 7 9 19" />
                      <path d="m15 7 6 0 0 6" />
                    </svg>
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <a
                  href="https://github.com/ErzenXz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/erzen-krasniqi7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/erzen.krasniqi.58/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-sm text-muted-foreground">Available for freelance work</div>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative animate-float">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-full blur-xl opacity-75"></div>
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <Image src="/profile-image.jpg" alt="Erzen Krasniqi" fill className="object-cover" priority />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-6 -right-6 bg-background/80 backdrop-blur-md rounded-full p-4 shadow-lg border border-border animate-bounce-slow">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
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
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-md rounded-full p-4 shadow-lg border border-border animate-pulse-slow">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
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
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m2 12 5-5" />
                      <path d="M2 12h7" />
                      <path d="m2 12 5 5" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-10 -translate-y-1/2 bg-background/80 backdrop-blur-md rounded-full p-4 shadow-lg border border-border animate-float-slow">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
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
                    >
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                      <path d="M7 2v20" />
                      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </section>

      {/* Clients/Brands Section */}

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]"></div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 text-center mb-20">
            <div className="inline-block mx-auto">
              <Badge className="px-4 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors backdrop-blur-sm">
                About Me
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Designing with <span className="text-primary">Purpose</span>
            </h2>
            <p className="text-muted-foreground text-xl mx-auto max-w-[700px]">
              I create thoughtful digital experiences that balance form and function
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-70 -z-10"></div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-primary/10 shadow-2xl">
                <Image src="/designer-working.jpg" alt="Erzen Krasniqi working" fill className="object-cover" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-8 -right-8 bg-background/80 backdrop-blur-md rounded-full p-6 shadow-xl border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold">My Design Philosophy</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I believe that exceptional design is invisible. It should guide users intuitively, solve problems
                  effortlessly, and create memorable experiences that resonate on an emotional level.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every pixel, interaction, and animation in my work serves a purpose — to create digital experiences
                  that are not just beautiful, but meaningful and impactful.
                </p>
              </div>

              <Tabs defaultValue="skills" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="skills" className="text-base">
                    Skills
                  </TabsTrigger>
                  <TabsTrigger value="process" className="text-base">
                    Process
                  </TabsTrigger>
                  <TabsTrigger value="education" className="text-base">
                    Education
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="skills" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <Link href="/services/ui-design">
                      <Card className="p-6 border-primary/10 hover:border-primary/30 transition-colors cursor-pointer hover:shadow-md">
                        <h4 className="text-lg font-medium mb-3 flex items-center">
                          <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                              <path d="M12 2v2" />
                              <path d="M12 22v-2" />
                              <path d="m17 20.66-1-1.73" />
                              <path d="M11 10.27 7 3.34" />
                              <path d="m20.66 17-1.73-1" />
                              <path d="m3.34 7 1.73 1" />
                              <path d="M14 12h8" />
                              <path d="M2 12h2" />
                              <path d="m20.66 7-1.73 1" />
                              <path d="m3.34 17 1.73-1" />
                              <path d="m17 3.34-1 1.73" />
                              <path d="m7 20.66 1-1.73" />
                            </svg>
                          </span>
                          UI Design
                        </h4>
                        <p className="text-muted-foreground">
                          Creating visually stunning interfaces that balance aesthetics with usability.
                        </p>
                      </Card>
                    </Link>

                    <Link href="/services/ux-design">
                      <Card className="p-6 border-primary/10 hover:border-primary/30 transition-colors cursor-pointer hover:shadow-md">
                        <h4 className="text-lg font-medium mb-3 flex items-center">
                          <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 16v-4" />
                              <path d="M12 8h.01" />
                            </svg>
                          </span>
                          UX Design
                        </h4>
                        <p className="text-muted-foreground">
                          Crafting intuitive user experiences that solve real problems.
                        </p>
                      </Card>
                    </Link>

                    <Link href="/services/development">
                      <Card className="p-6 border-primary/10 hover:border-primary/30 transition-colors cursor-pointer hover:shadow-md">
                        <h4 className="text-lg font-medium mb-3 flex items-center">
                          <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m18 16 4-4-4-4" />
                              <path d="m6 8-4 4 4 4" />
                              <path d="m14.5 4-5 16" />
                            </svg>
                          </span>
                          Development
                        </h4>
                        <p className="text-muted-foreground">Bringing designs to life with clean, efficient code.</p>
                      </Card>
                    </Link>

                    <Link href="/services/animation">
                      <Card className="p-6 border-primary/10 hover:border-primary/30 transition-colors cursor-pointer hover:shadow-md">
                        <h4 className="text-lg font-medium mb-3 flex items-center">
                          <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                              <path d="m17 4 2 2" />
                              <path d="m19 2 2 2" />
                            </svg>
                          </span>
                          Animation
                        </h4>
                        <p className="text-muted-foreground">
                          Creating delightful motion that enhances user experience.
                        </p>
                      </Card>
                    </Link>
                  </div>
                </TabsContent>

                <TabsContent value="process" className="space-y-6">
                  <div className="space-y-8">
                    <Link href="/process/discovery" className="group">
                      <div className="flex gap-6 items-start group-hover:bg-muted/30 p-3 rounded-lg transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <span className="font-semibold text-primary">01</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                            Discovery
                          </h4>
                          <p className="text-muted-foreground">
                            Understanding the problem space, user needs, and business goals through research and
                            analysis.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href="/process/strategy" className="group">
                      <div className="flex gap-6 items-start group-hover:bg-muted/30 p-3 rounded-lg transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <span className="font-semibold text-primary">02</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                            Strategy
                          </h4>
                          <p className="text-muted-foreground">
                            Developing a clear roadmap that aligns user needs with business objectives.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href="/process/design" className="group">
                      <div className="flex gap-6 items-start group-hover:bg-muted/30 p-3 rounded-lg transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <span className="font-semibold text-primary">03</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                            Design
                          </h4>
                          <p className="text-muted-foreground">
                            Creating wireframes, prototypes, and high-fidelity designs that solve the identified
                            problems.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href="/process/implementation" className="group">
                      <div className="flex gap-6 items-start group-hover:bg-muted/30 p-3 rounded-lg transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <span className="font-semibold text-primary">04</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                            Implementation
                          </h4>
                          <p className="text-muted-foreground">
                            Developing the solution with clean, efficient code and attention to detail.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="space-y-6">
                  <div className="space-y-8">
                    <Link href="/education/computer-science">
                      <div className="flex gap-6 items-start group-hover:bg-muted/30 p-3 rounded-lg transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                            Computer Science
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">University of Prishtina</p>
                          <p className="text-muted-foreground">
                            Studying advanced programming concepts, algorithms, and software engineering principles.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href="/education/ui-ux-certification">
                      <div className="flex gap-6 items-start group-hover:bg-muted/30 p-3 rounded-lg transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <rect width="18" height="10" x="3" y="11" rx="2" />
                            <circle cx="12" cy="5" r="2" />
                            <path d="M12 7v4" />
                            <line x1="8" x2="8" y1="16" y2="16" />
                            <line x1="16" x2="16" y1="16" y2="16" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                            UI/UX Design Certification
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">Nielsen Norman Group</p>
                          <p className="text-muted-foreground">
                            Specialized training in user research, interaction design, and usability principles.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href="/education/front-end-development">
                      <div className="flex gap-6 items-start group-hover:bg-muted/30 p-3 rounded-lg transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M2 3h20" />
                            <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                            <path d="m7 21 5-5 5 5" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                            Front-End Development
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">freeCodeCamp</p>
                          <p className="text-muted-foreground">
                            Mastering modern web technologies including React, TypeScript, and responsive design
                            principles.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/10 bg-gradient-to-r from-primary to-primary/80 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <Link href="/about">
                    Learn more about me
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]"></div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 text-center mb-20">
            <div className="inline-block mx-auto">
              <Badge className="px-4 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors backdrop-blur-sm">
                Portfolio
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Selected <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-xl mx-auto max-w-[700px]">
              A showcase of my most impactful work across various industries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard
              title="TapQuiz"
              description="An interactive quiz platform with real-time multiplayer functionality, custom animations, and an intuitive user interface."
              link="https://quiz.erzen.tk"
              featured
              tags={["UI/UX Design", "React", "Firebase"]}
            />
            <ProjectCard
              title="Erzen Files"
              description="A sophisticated cloud storage solution with drag-and-drop functionality, advanced file organization, and seamless sharing capabilities."
              link="https://files.erzen.tk"
              featured
              tags={["UI/UX Design", "TypeScript", "AWS"]}
            />
            <ProjectCard
              title="Erzen Chat"
              description="A modern messaging platform featuring end-to-end encryption, rich media sharing, and a clean, minimalist interface designed for clarity."
              link="https://s.erzenchat.tk"
              featured
              tags={["UI/UX Design", "React Native", "WebRTC"]}
            />
          </div>

          <div className="flex justify-center mt-16">
            <Button
              asChild
              variant="outline"
              className="group rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-primary/5 transition-all duration-300"
            >
              <Link href="/projects">
                View all projects <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Case Study Preview */}
          <div className="mt-32 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-70 -z-10"></div>
            <div className="bg-background/80 backdrop-blur-md rounded-3xl border border-primary/10 shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <Badge className="w-fit mb-6 px-4 py-1.5 text-sm bg-primary/10 text-primary">
                    Featured Case Study
                  </Badge>
                  <h3 className="text-3xl font-bold mb-6">Reimagining Digital Banking</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    A comprehensive redesign of a banking app that increased user engagement by 43% and reduced customer
                    support inquiries by 26%.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Simplified user flows reduced task completion time by 37%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Accessibility improvements increased user satisfaction by 28%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Redesigned information architecture improved feature discovery</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-fit rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/10 bg-gradient-to-r from-primary to-primary/80 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                  >
                    <Link href="/projects/banking-app">
                      View case study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="relative aspect-square md:aspect-auto">
                  <Image src="/banking-app-redesign.jpg" alt="Banking app redesign" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:bg-gradient-to-l"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-primary/5"></div>
        </div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 text-center mb-20">
            <div className="inline-block mx-auto">
              <Badge className="px-4 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors backdrop-blur-sm">
                Testimonials
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Client <span className="text-primary">Feedback</span>
            </h2>
            <p className="text-muted-foreground text-xl mx-auto max-w-[700px]">What people say about working with me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-background/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-primary/10 relative transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -top-6 -left-6 text-6xl text-primary opacity-20">"</div>
              <div className="relative">
                <p className="text-xl text-muted-foreground italic mb-8 leading-relaxed">
                  Erzen delivered an exceptional website that perfectly captured our brand's essence. His attention to
                  detail and technical expertise made the entire process smooth and enjoyable. The final product
                  exceeded our expectations.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-xl font-semibold text-primary">JD</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">John Doe</h4>
                    <p className="text-muted-foreground">CEO, TechStart</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-primary/10 relative transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -top-6 -left-6 text-6xl text-primary opacity-20">"</div>
              <div className="relative">
                <p className="text-xl text-muted-foreground italic mb-8 leading-relaxed">
                  Working with Erzen was a pleasure. He understood our requirements perfectly and delivered a solution
                  that exceeded our expectations. His strategic approach to UX design transformed our product and
                  significantly improved user engagement.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-xl font-semibold text-primary">JS</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Jane Smith</h4>
                    <p className="text-muted-foreground">Marketing Director, CreativeHub</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-primary/10 relative transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -top-6 -left-6 text-6xl text-primary opacity-20">"</div>
              <div className="relative">
                <p className="text-xl text-muted-foreground italic mb-8 leading-relaxed">
                  Erzen's ability to translate complex requirements into intuitive designs is remarkable. He not only
                  delivered a visually stunning interface but also ensured that every interaction was thoughtfully
                  considered. A true professional.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-xl font-semibold text-primary">RJ</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Robert Johnson</h4>
                    <p className="text-muted-foreground">Product Manager, InnovateTech</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-primary/10 relative transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -top-6 -left-6 text-6xl text-primary opacity-20">"</div>
              <div className="relative">
                <p className="text-xl text-muted-foreground italic mb-8 leading-relaxed">
                  I've worked with many designers, but Erzen stands out for his holistic approach. He doesn't just
                  create beautiful interfaces; he creates meaningful experiences that drive results. Our conversion rate
                  increased by 35% after his redesign.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-xl font-semibold text-primary">EW</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Emily Williams</h4>
                    <p className="text-muted-foreground">Founder, GrowthLabs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]"></div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 text-center mb-20">
            <div className="inline-block mx-auto">
              <Badge className="px-4 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors backdrop-blur-sm">
                Get In Touch
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let's Create <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted-foreground text-xl mx-auto max-w-[700px]">
              Have a project in mind? I'd love to hear about it and discuss how we can collaborate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            <div className="bg-background/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-primary/10 h-full transform transition-all duration-300 hover:shadow-2xl hover:border-primary/20">
              <div className="space-y-6 mb-10">
                <h3 className="text-3xl font-semibold">Send me a message</h3>
                <p className="text-xl text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="flex flex-col gap-10 h-full">
              <div className="bg-background/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-primary/10 flex-1 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/20">
                <div className="flex items-start gap-8 h-full">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-6 flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl font-semibold">Email Me</h3>
                      <p className="text-lg text-muted-foreground mt-3">
                        For project inquiries or just to say hello, feel free to drop me an email.
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <a
                        href="mailto:contact@example.com"
                        className="inline-flex items-center text-primary hover:underline group text-lg"
                      >
                        contact@example.com
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-primary/10 flex-1 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/20">
                <div className="flex items-start gap-8 h-full">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="space-y-6 flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl font-semibold">Connect With Me</h3>
                      <p className="text-lg text-muted-foreground mt-3">
                        Follow me on social media to stay updated with my latest projects and design insights.
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <div className="flex gap-6">
                        <a
                          href="https://github.com/ErzenXz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 w-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-md"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/erzen-krasniqi7/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 w-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-md"
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.facebook.com/erzen.krasniqi.58/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 w-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-md"
                        >
                          <Facebook className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-32 text-center">
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-16 rounded-3xl max-w-5xl mx-auto backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to elevate your digital presence?</h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Let's collaborate to create something extraordinary together. I'm ready to help you bring your vision to
                life with thoughtful design and flawless execution.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 py-7 text-xl shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <Link href="/contact">
                  Start a Project
                  <ExternalLink className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

