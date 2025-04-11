import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
// import profilePic from './public/profilepic.jpg'; // Remove this import

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true; // Default to dark mode
  });
  const [scrollPercentage, setScrollPercentage] = useState(0); // State for scroll %

  // Effect for dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Effect for scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const element = document.documentElement;
      const scrollTop = element.scrollTop || document.body.scrollTop;
      const scrollHeight = element.scrollHeight || document.body.scrollHeight;
      const clientHeight = element.clientHeight || window.innerHeight;

      if (scrollHeight <= clientHeight) {
        setScrollPercentage(0);
        return;
      }

      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  // Effect for fade-in animation observer (Your existing code)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use 'show' class from your index.css for fade-in
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target elements with 'fade-in' class from your index.css
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup
  }, []);

  // --- Data Arrays (projects, certifications, tools) ---
  const projects = [
    {
      title: "Generate Backend Code Instantly With AI",
      date: "Mar 2025",
      description: "I am a DevOps engineer currently in the ongoing project.",
      url: "http://backend.im",
      linkText: "Live Site"
    },
    {
        title: "TODO Application Infrastructure and Deployment",
        date: "Mar 2025",
        description: "This infrastructure was set up to deploy a TODO app.",
        url: "https://github.com/onlydurodola/hng12-stage4-todo-infra",
        linkText: "GitHub Repository"
      },
      {
        title: "Orchestration App",
        date: "Feb 2025",
        description: "An app that automates code testing and deploys on K8s.",
        url: "https://github.com/onlydurodola/hng-stage3-orchestration-app",
        linkText: "GitHub Repository"
      },
      {
        title: "Terraform - 1st GitOps",
        date: "Jan 2025",
        description: "Maintain vpc & eks with terraform for vprofile project.",
        url: "https://github.com/onlydurodola/iac-vprofile",
        linkText: "GitHub Repository"
      },
      {
        title: "Vprofile - action",
        date: "Jan 2025",
        description: "This is the second part of a GitOps project to deploy.",
        url: "https://github.com/onlydurodola/vprofile-action",
        linkText: "GitHub Repository"
      }
  ];

  const certifications = [
    {
      title: "HNG Finalist",
      issuer: "HNG Tech",
      url: "https://certgo.app/c-6d466418",
      linkText: "Validate Certificate"
    },
    {
      title: "ALX Cloud Computing Program Completion",
      issuer: "ALX (AWS Academy Partner)",
      date: "Completed Mar 2024",
      url: "https://intranet.alxswe.com/certificates/eYB3xFGZrT",
      linkText: "Validate Certificate"
    },
    {
      title: "AWS Certified Solutions Architect Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Feb 2024 (Expires Feb 2027)",
      url: "https://aws.amazon.com/verification",
      linkText: "Validate Certificate",
      id: "Credential ID: fa9cccbfd5bc429aba0f35a7fee06f1c"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Oct 2023 (Expires Oct 2026)",
      url: "https://aws.amazon.com/verification",
      linkText: "Validate Certificate",
      id: "Credential ID: 4DF7XSJ20EQ4Q5SG"
    },
    {
      title: "Accelerated DevOps Engineer Industrial Training",
      issuer: "IBT Learning",
      date: "Issued Feb 2025",
      url: "https://learn.ibtlearning.co/certificates/wlsbn6gair",
      linkText: "Validate Certificate",
      id: "Credential ID: wlsbn6gair"
    }
  ];

  const tools = [
    // Using Simple Icons SVGs directly via CDN
    { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kubernetes.svg" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jenkins.svg" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubactions.svg" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/terraform.svg" },
    { name: "Ansible", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ansible.svg" },
    { name: "Prometheus", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/prometheus.svg" },
    { name: "Grafana", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/grafana.svg" },
    { name: "Loki", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/grafana.svg" }, // Assuming same as Grafana or find specific if exists
    { name: "AlertManager", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/prometheus.svg" }, // Assuming same as Prometheus or find specific
    { name: "SonarQube", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sonarqube.svg" },
    { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rabbitmq.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redis.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gnubash.svg" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nginx.svg" }
  ];

  // --- Framer Motion Variants ---
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // --- Component Return ---
  return (
    // Main wrapper div with dark mode class
    <div className={`min-h-screen bg-gray-50 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>

      {/* ============================================ */}
      {/* === INSERT SCROLL INDICATOR JSX HERE === */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 z-50 h-1 bg-blue-500 dark:bg-blue-400 transition-width duration-100 ease-linear" // Added transition
        style={{ width: `${scrollPercentage}%` }} // Use state for width
      ></div>
      {/* ============================================ */}


      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Oluwatobiloba Durodola
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                DevOps Engineer | Cloud Enthusiast | AWS Certified
              </motion.p>
              <motion.div
                className="flex justify-center md:justify-start space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a href="mailto:nowdurodola@gmail.com" className="hover:text-blue-200 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Mail size={24} />
                </a>
                <a href="https://github.com/onlydurodola" className="hover:text-blue-200 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/oluwatobilobadurodola" className="hover:text-blue-200 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
              </motion.div>
            </div>
            <motion.div
              className="profile-image" // Uses CSS from index.css
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                animation: 'float 6s ease-in-out infinite' // Uses CSS keyframe
              }}
            >
              <img
                src="/profilepic.jpg" // Correct path for image in public folder
                alt="Oluwatobiloba Durodola"
                className="w-64 h-64 rounded-full object-cover shadow-lg" // Tailwind classes for size/shape
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      {/* Use fade-in class from index.css for observer */}
      <motion.section
        id="about" // Added ID for potential navigation
        className="py-20 fade-in dark:bg-gray-900 dark:text-white" // Added fade-in
        variants={container}
        initial="hidden"
        animate="show" // This might override observer; consider removing or coordinating
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            variants={item}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
            variants={item}
          >
            DevOps Engineer with hands-on experience in CI/CD pipelines, infrastructure as code, cloud architecture, and system monitoring. Proven ability to set up DevOps practices from scratch using tools like Jenkins, Terraform, Ansible, and Docker. AWS Certified Solutions Architect with a passion for building scalable, resilient, and observable systems.
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects" // Added ID
        className="py-20 bg-white dark:bg-gray-800 fade-in" // Added fade-in
         variants={container} // Use Framer Motion container variant
         initial="hidden"
         whileInView="show" // Trigger animation when in view
         viewport={{ once: true, amount: 0.1 }} // Adjust viewport settings
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center dark:text-white"
             variants={item} // Animate heading separately
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                 variants={item} // Apply item animation to each project card
              >
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 italic mb-3">{project.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {project.linkText}
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills & Tools Section */}
      <motion.section
        id="skills-tools" // Added ID
        className="py-20 bg-gray-50 dark:bg-gray-900 fade-in" // Added fade-in
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills Column */}
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">Technical Skills</h2>
              <div className="flex flex-wrap gap-3"> {/* Use flex-wrap for tag-like appearance */}
                {[
                  "Cloud Computing", "Containerization", "Container Orchestration",
                  "Infrastructure as Code (IaC)", "Configuration Management",
                  "Monitoring & Observability", "CI/CD", "Linux Systems",
                  "Version Control (Git)", "Automation & Scripting", "Log Management"
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                    variants={item} // Animate each skill tag
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            {/* Tools & Technologies Column */}
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">Tools & Technologies</h2>
              {/* Using grid for tool logos */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center"
                    variants={item} // Animate each tool
                    title={tool.name} // Add tooltip for name
                  >
                    <img
                      src={tool.icon} // Using direct SVG links from Simple Icons CDN
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 mb-2 object-contain" // Use object-contain
                      // Add lazy loading
                      loading="lazy"
                      // Optional: Add basic error handling
                      onError={(e) => { e.currentTarget.style.display = 'none'; /* Hide broken image */ const span = document.createElement('span'); span.textContent = tool.name; span.className = 'text-xs text-red-500'; e.currentTarget.parentNode?.appendChild(span);}}
                    />
                     {/* Removed the text label below icon to rely on title tooltip */}
                     {/* <p className="text-gray-700 dark:text-gray-300 text-sm text-center">{tool.name}</p> */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Certifications Section */}
      <motion.section
        id="certifications" // Added ID
        className="py-20 bg-white dark:bg-gray-800 fade-in" // Added fade-in
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center dark:text-white"
            variants={item}
          >
            Certifications
          </motion.h2>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md"
                variants={item}
              >
                <h3 className="text-xl font-bold mb-2 dark:text-white">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.issuer} {cert.date && `- ${cert.date}`}</p>
                {cert.id && <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.id}</p>}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2"
                  >
                    {cert.linkText}
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Soft Skills Section */}
      <motion.section
        id="soft-skills" // Added ID
        className="py-20 bg-gray-50 dark:bg-gray-900 fade-in" // Added fade-in
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center dark:text-white"
            variants={item}
          >
            Soft Skills
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
             // Use container variant for staggering children (the tags)
             variants={container}
             // These initial/animate props might conflict with parent; rely on parent's trigger
             // initial="hidden"
             // animate="show"
          >
            {[
              "Leadership", "Critical Thinking", "Communication",
              "Managing Complex Tasks", "Team Collaboration",
              "Entrepreneurship", "Quantitative Reasoning"
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-full px-6 py-2 shadow-sm"
                variants={item} // Use item variant for each tag's animation
              >
                <p className="text-gray-700 dark:text-gray-300">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
               <a href="mailto:nowdurodola@gmail.com" className="hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
                 <Mail size={20} />
               </a>
               <a href="https://github.com/onlydurodola" className="hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
                 <Github size={20} />
               </a>
               <a href="https://linkedin.com/in/oluwatobilobadurodola" className="hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
                 <Linkedin size={20} />
               </a>
             </div>
            <p className="text-sm">© 2025 Oluwatobiloba Durodola</p>
          </div>
        </div>
      </footer>

    </div> // End main wrapper div
  );
}

export default App;