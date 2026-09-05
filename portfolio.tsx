"use client"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/ContactForm"
import {
  Moon,
  Sun,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Globe,
  MapPin,
  PenToolIcon as Tool,
  User,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  Phone,
} from "lucide-react"
import { Text } from "@mantine/core"

export default function Portfolio() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal")
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    const setCursorAvailability = () => {
      const enabled = finePointer.matches && !reducedMotion.matches
      document.documentElement.classList.toggle("custom-cursor-enabled", enabled)
      if (!enabled) document.documentElement.classList.remove("custom-cursor-visible")
    }
    const moveCursor = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`)
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`)
      document.documentElement.classList.add("custom-cursor-visible")
    }
    const hideCursor = () => document.documentElement.classList.remove("custom-cursor-visible")

    setCursorAvailability()
    window.addEventListener("mousemove", moveCursor)
    document.documentElement.addEventListener("mouseleave", hideCursor)
    window.addEventListener("blur", hideCursor)
    finePointer.addEventListener("change", setCursorAvailability)
    reducedMotion.addEventListener("change", setCursorAvailability)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.documentElement.removeEventListener("mouseleave", hideCursor)
      window.removeEventListener("blur", hideCursor)
      finePointer.removeEventListener("change", setCursorAvailability)
      reducedMotion.removeEventListener("change", setCursorAvailability)
      document.documentElement.classList.remove("custom-cursor-enabled")
      document.documentElement.classList.remove("custom-cursor-visible")
    }
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setMenuOpen(false)
    }
  }

  const Skills = {
    languages: ["Java", "SQL"],
    frameworksAndLibraries: ["Spring Boot 3", "Spring MVC", "Spring Data JPA", "Spring Security", "REST APIs", "gRPC", "Microservices Architecture"],
    webDev: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "Thymeleaf", "React", "JSP"],
    tools: ["Docker", "Git", "GitHub", "Maven", "Gradle", "Swagger/OpenAPI", "API Gateway", "Postman", "MySQL", "PostgreSQL"],
    Concepts: ["JWT", "OAuth2", "Keycloak", "Apache Kafka", "JUnit", "Mockito", "Unit Testing", "Integration Testing", "SOLID Principles", "OOP", "Data Structures & Algorithms", "System Design Fundamentals", "Agile/Scrum"],
  }

  const Projects = [
    {
      title: "Smart Contact Manager",
      description:
        "Built a secure, scalable contact management platform with Google and GitHub OAuth2 login and JWT-based session handling. Implemented CRUD operations backed by Spring Data JPA and MySQL, with server-side validation, structured exception handling, and Cloudinary image storage.",
      tech: ["Java", "Spring Boot", "Spring Security (JWT/OAuth2)", "Spring Data JPA", "MySQL", "Thymeleaf", "Tailwind CSS", "Cloudinary"],
      icon: <User className="w-6 h-6" />,
      link: "https://github.com/Rudraprasadd/smart-Contact-manager-springboot"
    },
    {
      title: "URL Shortener",
      description:
        "Built a full-stack URL shortener with custom short-link generation, expiration handling, and role-based access control using Spring Security. Designed the relational schema and JPA entity mappings in MySQL to support link analytics and expiration lifecycle management.",
      tech: ["Java", "Spring Boot", "Spring Security", "JPA", "Bootstrap CSS", "Thymeleaf", "MySQL", "Maven"],
      icon: <Code className="w-6 h-6" />,
      link: "https://github.com/Rudraprasadd/url_shortener_SpringBoot"
    },
    {
      title: "Patient Management System | Spring Boot Microservices ",
      description:
        "Architected a microservices-based patient management platform with JWT authentication and role-based access control. Engineered asynchronous Kafka messaging and gRPC inter-service calls, then containerized services with Docker behind a centralized API Gateway using MySQL and PostgreSQL storage.",
      tech: ["Java", "Spring Boot", "REST APIs","Apache Kafka","gRPC", "PostgreSQL", "Docker", "JWT", "API Gateway", "Git", "GitHub"],
      icon: <MessageSquare className="w-6 h-6" />,
      link: "https://github.com/Rudraprasadd/PatientManagement_Microservice",
    },

  ]
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="portfolio-shell portfolio-grid overflow-x-hidden">
        <div className="crosshair-cursor" aria-hidden="true">
          <svg className="cursor-arrow" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L2.5 23L8.2 17.3L12.5 26L17.1 23.7L12.8 15L21 14.8L2 2Z" />
          </svg>
          <span className="crosshair-greeting">Hi</span>
        </div>
        {/* Navigation */}
        <nav className="fixed top-0 z-50 w-full border-b border-white/50 bg-white/70 shadow-sm shadow-slate-950/5 backdrop-blur-xl dark:border-white/5 dark:bg-gray-950/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between py-3">
              <div className="brand-gradient text-xl font-extrabold tracking-tight sm:text-2xl">
                Rudra Prasad Satapathy
                <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Java Backend Developer</p>
              </div>

              <div className="hidden items-center rounded-full border border-slate-200/70 bg-white/60 px-2 py-1 shadow-sm dark:border-gray-700 dark:bg-gray-900/70 md:flex md:space-x-1">
                {["Home", "About", "Skills", "Projects", "Resume", "Contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium capitalize transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/40 dark:hover:text-blue-300 ${activeSection === section ? "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300" : "text-gray-600 dark:text-gray-300"
                      }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                aria-pressed={isDark}
                className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                className="ml-2 rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 md:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
            <div className={`${menuOpen ? "mobile-menu-open" : "mobile-menu-closed"} mobile-menu md:hidden`}>
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((section) => (
                <button key={section} onClick={() => scrollToSection(section)} className={activeSection === section ? "mobile-nav-active" : ""}>
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Home Section */}
        <section id="Home" className="flex min-h-screen items-center pt-20">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div className="reveal space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                    Hi, I'm{" "}
                    <span className="brand-gradient">
                      Rudra Prasad Satapathy
                    </span>
                  </h1>
                  <p className="brand-gradient text-lg font-semibold">Java Backend Developer</p>
                  <p className="text-xl font-medium text-gray-700 dark:text-gray-200 lg:text-2xl">
                    Spring Boot · Microservices · REST APIs
                  </p>
                  <p className="max-w-xl text-lg leading-8 text-gray-500 dark:text-gray-400">Building secure, scalable backend systems and future-ready digital solutions.</p>
                </div>

                <Button
                  size="lg"
                  className="primary-cta rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-6 text-base text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/30"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/Rudraprasad_satapathy_Resume.pdf"
                    link.download = "Rudraprasad_satapathy_Resume.pdf"
                    link.click()
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>

              </div>

              <div className="reveal reveal-delay flex justify-center lg:justify-end">
                <div className="hero-orb relative">
                  <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-blue-400/35 via-violet-400/20 to-pink-400/35 blur-3xl" />
                  <div className="h-72 w-72 rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-1 shadow-2xl shadow-indigo-500/30 sm:h-80 sm:w-80">
                    <div className="flex h-full w-full items-center justify-center rounded-[2.3rem] bg-gray-100 p-2 dark:bg-gray-900">
                      <img
                        src="/profile.png"
                        alt="Rudra Prasad Satapathy"
                        className="h-full w-full rounded-[2rem] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="About" className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading text-4xl font-extrabold tracking-tight">About Me</h2>
            </div>

            <Card className="soft-card reveal rounded-3xl">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  🚀 Java Backend Developer with hands-on experience building secure, scalable applications using Java, Spring Boot, REST APIs, and microservices. I work with JWT/OAuth2 security, Apache Kafka messaging, Docker, and relational databases to turn real-world requirements into reliable backend systems.
                  <br /><br />
                  I enjoy designing clean service architecture, solving backend problems, and writing maintainable code. My projects include a microservices-based patient management platform, a secure contact manager, and a role-based URL shortener.
                  <br /><br />
                  I have completed my B.Tech in Computer Science & Engineering and am available to join immediately for Java backend roles where I can contribute, grow, and learn with a collaborative team.
                </p>
                <br />
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  🧰 Tech Stack: <br />
                  Languages: Java, SQL <br />
                  Backend: Spring Boot 3, Spring MVC, Spring Data JPA, Spring Security, REST APIs, gRPC, Microservices <br />
                  Security & Messaging: JWT, OAuth2, Keycloak, Apache Kafka <br />
                  Databases & Tools: MySQL, PostgreSQL, Docker, Git, GitHub, Maven, Gradle, Swagger/OpenAPI, Postman <br />
                  Practices: JUnit, Mockito, integration testing, SOLID principles, OOP, DSA, system design fundamentals <br />

                  📍 Location: India (GMT+5:30) <br />
                  🤝 Let’s connect!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="Skills" className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading text-4xl font-extrabold tracking-tight">Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="soft-card soft-card-hover reveal rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-6 h-6 mr-2 text-blue-600" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="soft-card soft-card-hover reveal rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-6 h-6 mr-2 text-purple-600" />
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Skills.frameworksAndLibraries.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="soft-card soft-card-hover reveal rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-green-600" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Skills.webDev.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="soft-card soft-card-hover reveal rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tool className="w-6 h-6 mr-2 text-orange-600" />
                    Tools & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="soft-card soft-card-hover reveal rounded-2xl md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-6 h-6 mr-2 text-red-600" />
                    Concepts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Skills.Concepts.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="Projects" className="border-y border-slate-200/70 bg-white/45 py-24 dark:border-gray-800 dark:bg-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading text-4xl font-extrabold tracking-tight">Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Projects.map((project, index) => (
                <Card
                  key={index}
                  className="soft-card soft-card-hover reveal group overflow-hidden rounded-2xl"
                >
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110">
                          {project.icon}
                        </div>
                        <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          <Text lineClamp={2}>{project.title}</Text>

                        </CardTitle>
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-300"
                    >
                      <span>View Project</span>
                     <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {/* If your Text component supports lineClamp, great; else use Tailwind */}
                      <Text className={!expanded[index] ? "line-clamp-5" : ""}>
                        {project.description}
                      </Text>

                      <button
                        onClick={() => setExpanded({ ...expanded, [index]: !expanded[index] })}
                        className="hover:underline text-blue-600 cursor-pointer mt-1"
                      >
                        {expanded[index] ? "View less" : "View more"}
                      </button>
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>



                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="Resume" className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading text-4xl font-extrabold tracking-tight">Resume</h2>
            </div>

            <Card className="soft-card reveal mb-8 overflow-hidden rounded-3xl">
              <CardContent className="p-8">
                <div className="rounded-2xl bg-white p-3 shadow-inner dark:bg-gray-900 sm:p-6">
                  <div className="flex justify-center">
                    <img
                      src="/Resume.png" // Change this path based on your project
                      alt="Resume of Rudra Prasad Satapathy"
                      className="w-full max-w-4xl rounded-xl shadow-lg shadow-slate-950/10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                size="lg"
                className="primary-cta rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-6 text-base text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/30"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/Rudraprasad_satapathy_Resume.pdf"
                  link.download = "Rudraprasad_satapathy_Resume.pdf"
                  link.click()
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Resume PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="Contact" className="relative overflow-hidden border-t border-slate-200/70 py-24 dark:border-gray-800">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/30" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-3xl">
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
                Contact
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                Let&apos;s build something practical.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Share a project idea, collaboration request, or role opportunity. I usually respond with the next clear step.
              </p>
            </div>

            {/* Stretched grid keeps both Contact columns the same height on desktop and stacks them on mobile. */}
            <div className="reveal grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
              {/* Full-height flex column distributes the Contact cards evenly against the form card. */}
              <div className="flex h-full min-h-[500px] flex-col justify-between gap-4">
                <a
                  href="mailto:rudraprasadsatapathy21@gmail.com"
                  className="group flex items-start rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-900 dark:hover:bg-gray-900"
                >
                  <span className="mr-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-950 dark:text-white">Email</span>
                    <span className="mt-1 block break-all text-sm text-gray-600 transition group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-300">
                      rudraprasadsatapathy21@gmail.com
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+917008348676"
                  className="group flex items-start rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-900 dark:hover:bg-gray-900"
                >
                  <span className="mr-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-600/20">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-950 dark:text-white">Phone</span>
                    <span className="mt-1 block text-sm text-gray-600 transition group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-300">
                      +91 70083 48676
                    </span>
                  </span>
                </a>

                <a
                  href="https://github.com/Rudraprasadd"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-900 dark:hover:bg-gray-900"
                >
                  <span className="mr-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-white shadow-lg shadow-gray-950/15 dark:bg-white dark:text-gray-950">
                    <Github className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-950 dark:text-white">GitHub</span>
                    <span className="mt-1 block text-sm text-gray-600 transition group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-300">
                      github.com/Rudraprasadd
                    </span>
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/rudraprasad-satapathy"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-900 dark:hover:bg-gray-900"
                >
                  <span className="mr-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-lg shadow-sky-600/20">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-950 dark:text-white">LinkedIn</span>
                    <span className="mt-1 block text-sm text-gray-600 transition group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-300">
                      linkedin.com/in/rudraprasad-satapathy
                    </span>
                  </span>
                </a>

                <div className="flex items-start rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/60">
                  <span className="mr-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-600/20">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-950 dark:text-white">Location</span>
                    <span className="mt-1 block text-sm text-gray-600 dark:text-gray-300">
                      India, available for remote collaboration
                    </span>
                  </span>
                </div>
              </div>

              {/* The form card mirrors the left column height and uses flex so the submit button can sit at the bottom. */}
              <Card className="flex h-full min-h-[500px] flex-col justify-between overflow-hidden border-gray-200 bg-white py-0 shadow-2xl shadow-blue-950/10 dark:border-gray-800 dark:bg-gray-900">
                <CardHeader className="space-y-2 border-b border-gray-100 p-6 dark:border-gray-800">
                  <CardTitle className="text-2xl text-gray-950 dark:text-white">Send a Message</CardTitle>
                  <CardDescription className="text-base">
                    Your message goes directly through EmailJS using the portfolio Contact template.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200/70 py-8 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-600 dark:text-gray-300">
              <p>&copy; 2024 Rudra Prasad Satapathy. All rights reserved.</p>
              <p className="mt-2 text-sm">Developed by Rudra Prasad Satapathy</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
