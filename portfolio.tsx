"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import emailjs from 'emailjs-com';
import { useRef } from 'react';
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
  PenToolIcon as Tool,
  User,
  MessageSquare,
  Send,
} from "lucide-react"

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

const form = useRef<HTMLFormElement>(null);


  const sendEmail = (e) => {
    e.preventDefault();
      if (!form.current) return; //
  emailjs.sendForm(
    'service_c7qvjl9',   // Replace with actual SERVICE ID
    'template_x01thqe',  // Replace with actual TEMPLATE ID
    form.current,
    'p5BJB_Yom4DtZc5cE'    // Replace with actual PUBLIC KEY
  ).then(
    (result) => {
      alert("Message sent!");
    },
    (error) => {
      alert("Failed to send message.");
    }
  );

  e.target.reset(); // Clear the form
};


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
      tech: [ "Java", "Spring Boot", "Spring Security", "JPA", "Bootstrap CSS", "Thymeleaf", "MySQL", "Maven","Bootstrap", "Git", "GitHub", "Postman"],
      icon: <Code className="w-6 h-6" />,
      link: "https://github.com/Rudraprasadd/url_shortener_SpringBoot"
    },
    {
      title: "TO-DO List App",
      description:
        "Built this project to keep track of tasks that need to be done. This application will act like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks, they can also remove them from the list. They can also edit the entered tasks. Additionally, users can mark tasks as completed, and the application will automatically categorize them for better organization and easy tracking.",
      tech: ["Spring Boot", "JSP", "JPA", "Java", "Git", "GitHub", "Postman"],
      icon: <MessageSquare className="w-6 h-6" />,
      link: "https://github.com/Rudraprasadd/Todo-List-using-Spring-Boot",
    },
  ]

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
                    className={`capitalize transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeSection === section ? "text-blue-600 dark:text-blue-400" : ""
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
                  link.href = "/rudra_prasad_satapathy_resumesd.pdf"
                  link.download = "rudra_prasad_satapathy_resumesd.pdf"
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
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">{project.icon}</div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </a>

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
                  link.href = "/rudra_prasad_satapathy_resumesd.pdf"
                  link.download = "rudra_prasad_satapathy_resumesd.pdf"
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
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                  technology.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 text-blue-600" />
                    <a href="mailto:rudraprasadsatapathy@gmail.com" className="hover:text-blue-600 transition-colors">
                      <span>rudraprasadsatapathy3506@gmail.com</span>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-6 h-6 mr-4 text-gray-800 dark:text-gray-200" />
                    <a href="https://github.com/Rudraprasadd" className="hover:text-blue-600 transition-colors">
                      github.com/Rudraprasadd
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-6 h-6 mr-4 text-blue-600" />
                    <a href="https://www.linkedin.com/in/rudraprasad-satapathy" className="hover:text-blue-600 transition-colors">
                      linkedin.com/in/rudraprasad-satapathy
                    </a>
                  </div>
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input id="name" name="user_name" placeholder="Your Name"  required/>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input id="email" name="user_email" type="email" placeholder="your.email@example.com"  required/>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea id="message" name="message" placeholder="Your message..." rows={5}  required/>
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
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
