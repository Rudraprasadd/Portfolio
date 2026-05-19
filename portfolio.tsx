"use client"

import { useState, useEffect } from "react"
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

} from "lucide-react"
import { Text } from "@mantine/core"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const skills = {
    languages: ["Java", "SQL", "JavaScript"],
    frameworksAndLibraries: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JDBC", "JSP", "JPA", "Thymeleaf", "JUnit", "Mockito"],
    webDev: ["HTML", "CSS", "Bootstrap", "TailwindCSS", "REST APIs"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Docker(Basic)", "Maven", "IntelliJ IDEA", "MySQL"],
    Concepts: ["OOPs", "Data Structures", "MVC Architecture", "Authentication (JWT/OAuth)", "Unit Testing"],
  }

  const projects = [
    {
      title: "Smart Contact Manager",
      description:
        "Built a secure and scalable web app to manage personal contacts with fields like name, email, number, LinkedIn, GitHub, and address. Integrated Google/GitHub OAuth2 login, full contact CRUD operations, and cloud storage using Cloudinary and role-based access control.",
      tech: ["Java", "Spring Boot", "Spring Security (JWT/OAuth2)", "Spring Data JPA", "MySQL", "Thymeleaf", "Tailwind CSS", "Cloudinary", "Git", "GitHub", "Postman"],
      icon: <User className="w-6 h-6" />,
      link: "https://github.com/Rudraprasadd/smart-contact-manager-springboot"
    },
    {
      title: "URL Shortener",
      description:
        "Built a full-stack web application to shorten long URLs with custom keys, expiration time.Implemented user authentication and role-based access (admin/user) using Spring Security.Admins can manage all URLs, while users can only manage their own URLs.Used MySQL for data storage and Thymeleaf for the frontend.",
      tech: ["Java", "Spring Boot", "Spring Security", "JPA", "Bootstrap CSS", "Thymeleaf", "MySQL", "Maven", "Bootstrap", "Git", "GitHub", "Postman"],
      icon: <Code className="w-6 h-6" />,
      link: "https://github.com/Rudraprasadd/url_shortener_SpringBoot"
    },
    {
      title: "QUIZ APPLICATION - (Open Source Project) - Presently Contributing",
      description:
        "Developed a secure, full-stack quiz platform featuring AI-generated questions, real-time scoring, and role-based access control using Keycloak. Built and containerized the backend with Spring Boot (Gradle) and PostgreSQL (Docker), with comprehensive API documentation via Swagger. Integrated an interactive React + Vite frontend to deliver a seamless and scalable user experience.",
      tech: ["Spring Boot", "React", "Vite", "PostgreSQL", "Docker", "Keycloak", "Swagger", "Git", "GitHub"],
      icon: <MessageSquare className="w-6 h-6" />,
      link: "https://github.com/Rudraprasadd/QuizGame",
    },

  ]
  const [expanded, setExpanded] = useState([false,false,false]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white ">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-between items-center py- mt-1">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rudra Prasad Satapathy
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 ">Software Developer</p>
              </div>

              <div className="hidden md:flex space-x-8">
                {["home", "about", "skills", "projects", "resume", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === section ? "text-blue-600 dark:text-blue-400" : ""
                      }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Home Section */}
        <section id="home" className="pt-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Rudra Prasad Satapathy
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4">Software Developer</p>
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
                    A passionate Computer Science student
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400">Building future-ready digital solutions</p>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/Rudraprasad_satapathy_resume.pdf"
                    link.download = "Rudraprasad_satapathy_resume.pdf"
                    link.click()
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>

              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      <img
                        src="/profile.png"
                        alt="Rudra Prasad Satapathy"
                        className="w-72 h-72 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  🚀 Final-year B.Tech student passionate about backend development, cloud technologies, and building scalable applications using Java and Spring Boot. I’ve developed hands-on experience through academic projects and self-driven learning, working with modern tools and frameworks to build real-world solutions.
                  <br /><br />
                  I enjoy solving problems and exploring Spring-based ecosystems. I’ve implemented CRUD-based apps using Spring Boot, Hibernate, and JSP, and I’m comfortable with Git-based collaboration.
                  <br /><br />
                  Currently looking for backend development roles (Java/Spring Boot) where I can grow, contribute, and learn in a collaborative environment — open to internships or full-time opportunities.
                </p>
                <br />
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  🧰 Tech Stack: <br />
                  Languages: Java, SQL, JavaScript <br />
                  Frameworks & Libraries: Spring Boot, Spring MVC, Spring Security, Hibernate, JDBC, JSP, JPA, Thymeleaf,   Junit, Mockito <br />
                  Web Technologies: HTML, CSS, Tailwind CSS, REST APIs <br />
                  Tools: Git, GitHub, Postman, MySQL, Docker (basic), Maven, IntelliJ IDEA, VS Code <br />
                  Concepts: OOPs, Data Structures, MVC Architecture, Authentication (JWT/OAuth), Unit Testing <br />

                  📍 Location: India (GMT+5:30) <br />
                  🤝 Let’s connect!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-6 h-6 mr-2 text-blue-600" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-6 h-6 mr-2 text-purple-600" />
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworksAndLibraries.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-green-600" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.webDev.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tool className="w-6 h-6 mr-2 text-orange-600" />
                    Tools & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-6 h-6 mr-2 text-red-600" />
                    Concepts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.Concepts.map((skill) => (
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
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader className="releative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-md transform transition-transform duration-300 group-hover:scale-110">
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
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group"
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
                        onClick={() => setExpanded({...expanded, [index]: !expanded[index]})}
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
        <section id="resume" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Resume</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <Card className="shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                  <div className="flex justify-center">
                    <img
                      src="/resume.png" // Change this path based on your project
                      alt="Resume of Rudra Prasad Satapathy"
                      className="w-full max-w-4xl rounded-lg shadow"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/Rudraprasad_satapathy_resume.pdf"
                  link.download = "Rudraprasad_satapathy_resume.pdf"
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
        <section id="contact" className="relative overflow-hidden py-24 bg-white dark:bg-gray-950">
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

            {/* Stretched grid keeps both contact columns the same height on desktop and stacks them on mobile. */}
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
              {/* Full-height flex column distributes the contact cards evenly against the form card. */}
              <div className="flex h-full min-h-[500px] flex-col justify-between gap-4">
                <a
                  href="mailto:rudraprasadsatapathy3506@gmail.com"
                  className="group flex items-start rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-900 dark:hover:bg-gray-900"
                >
                  <span className="mr-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-950 dark:text-white">Email</span>
                    <span className="mt-1 block break-all text-sm text-gray-600 transition group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-300">
                      rudraprasadsatapathy3506@gmail.com
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
                    Your message goes directly through EmailJS using the portfolio contact template.
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
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
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
