"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 flex justify-between items-center px-8 py-4 shadow">
        <h1 className="text-2xl font-bold text-cyan-600">Dr. Akanksha</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-cyan-600">About</a>
          <a href="#skills" className="hover:text-cyan-600">Skills</a>
          <a href="#experience" className="hover:text-cyan-600">Experience</a>
          <a href="#projects" className="hover:text-cyan-600">Projects</a>
          <a href="#contact" className="hover:text-cyan-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20
        bg-gradient-to-br from-gray-900 via-cyan-700 to-gray-900 text-white">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-cyan-300">Dr. Akanksha Vishwakarma</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-light mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            words={[
              "Data Scientist",
              "Research Scientist",
              "Machine Learning Enthusiast",
              "Problem Solver",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-cyan-500 rounded-lg shadow hover:bg-cyan-600 transition"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-white rounded-lg shadow hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-5xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-cyan-600">About Me</h2>
        <motion.p
          className="text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I’m a passionate <span className="text-cyan-600">Data Scientist</span> with expertise in
          machine learning, NLP, and data-driven problem solving. My background as a research
          scientist enables me to bridge academic rigor with industry solutions. I thrive on
          extracting insights from complex datasets and building models that make real-world impact.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-cyan-600 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Python",
            "R",
            "SQL",
            "Machine Learning",
            "Deep Learning",
            "NLP",
            "TensorFlow",
            "PyTorch",
            "AWS",
            "Data Visualization",
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow p-6 text-center hover:bg-cyan-500 hover:text-white hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 max-w-5xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-cyan-600">Experience</h2>
        <div className="space-y-8">
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold">Research Scientist</h3>
            <p className="text-gray-500">XYZ Institute | 2021 - 2023</p>
            <p className="mt-2 text-gray-700">
              Led research in data-driven modeling and AI systems, publishing in peer-reviewed
              journals and collaborating across disciplines.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold">Data Scientist</h3>
            <p className="text-gray-500">ABC Corp | 2019 - 2021</p>
            <p className="mt-2 text-gray-700">
              Designed machine learning solutions for predictive analytics, improving efficiency and
              driving business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-cyan-600 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "NLP Sentiment Analysis",
              desc: "Built an NLP pipeline for sentiment analysis using deep learning.",
            },
            {
              title: "Predictive Analytics Dashboard",
              desc: "Developed a real-time dashboard for business insights using Python and SQL.",
            },
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:scale-105 hover:bg-cyan-500 hover:text-white transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 text-center bg-gradient-to-b from-gray-900 to-black text-white">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Get In Touch</h2>
        <p className="text-gray-300 mb-8">Let’s connect and collaborate on exciting opportunities!</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:your.email@example.com" className="hover:text-cyan-400 transition">
            <Mail size={28} />
          </a>
          <a href="https://linkedin.com/in/avishwak" target="_blank" className="hover:text-cyan-400 transition">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-cyan-400 transition">
            <Github size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}
