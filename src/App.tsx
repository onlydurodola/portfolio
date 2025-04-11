import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      url: "https://intranet.alxswe.com/certificates/eyB3XFGz-T",
      linkText: "Validate Certificate"
    },
    {
      title: "AWS Certified Solutions Architect Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Feb 2024 (Expires Feb 2027)",
      id: "Credential ID: fa9cccbfd5bc429aba0f35a7fee06f1c"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Oct 2023 (Expires Oct 2026)",
      id: "Credential ID: 4DF7XSJ20EQ4Q5SG"
    },
    {
      title: "Accelerated DevOps Engineer Industrial Training",
      issuer: "IBT Learning",
      date: "Issued Feb 2025",
      id: "Credential ID: wlsbn6gair"
    }
  ];

  const tools = [
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg"
    },
    {
      name: "Docker",
      icon: "https://cdn.simpleicons.org/docker/2496ED"
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.simpleicons.org/kubernetes/326CE5"
    },
    {
      name: "Jenkins",
      icon: "https://cdn.simpleicons.org/jenkins/D24939"
    },
    {
      name: "GitHub Actions",
      icon: "https://cdn.simpleicons.org/githubactions/2088FF"
    },
    {
      name: "Terraform",
      icon: "https://cdn.simpleicons.org/terraform/7B42BC"
    },
    {
      name: "Ansible",
      icon: "https://cdn.simpleicons.org/ansible/EE0000"
    },
    {
      name: "Prometheus",
      icon: "https://cdn.simpleicons.org/prometheus/E6522C"
    },
    {
      name: "Grafana",
      icon: "https://cdn.simpleicons.org/grafana/F46800"
    },
    {
      name: "Loki",
      icon: "https://cdn.simpleicons.org/grafana/F46800"
    },
    {
      name: "AlertManager",
      icon: "https://cdn.simpleicons.org/prometheus/E6522C"
    },
    {
      name: "SonarQube",
      icon: "https://cdn.simpleicons.org/sonarqube/4E9BCD"
    },
    {
      name: "RabbitMQ",
      icon: "https://cdn.simpleicons.org/rabbitmq/FF6600"
    },
    {
      name: "Redis",
      icon: "https://cdn.simpleicons.org/redis/DC382D"
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql/4169E1"
    },
    {
      name: "Python",
      icon: "https://cdn.simpleicons.org/python/3776AB"
    },
    {
      name: "Bash",
      icon: "https://cdn.simpleicons.org/gnubash/4EAA25"
    },
    {
      name: "Nginx",
      icon: "https://cdn.simpleicons.org/nginx/009639"
    }
  ];

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

  return (
    <div className={`min-h-screen bg-gray-50 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Theme Toggle */}
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
              className="profile-image"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                animation: 'float 6s ease-in-out infinite'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                alt="Oluwatobiloba Durodola"
                className="w-64 h-64 rounded-full object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <motion.section 
        className="py-20 fade-in dark:bg-gray-900 dark:text-white"
        variants={container}
        initial="hidden"
        animate="show"
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
        className="py-20 bg-white dark:bg-gray-800 fade-in"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center dark:text-white"
            variants={item}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                variants={item}
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
        className="py-20 bg-gray-50 dark:bg-gray-900 fade-in"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">Technical Skills</h2>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">• Cloud Computing</p>
                <p className="text-gray-700 dark:text-gray-300">• Containerization</p>
                <p className="text-gray-700 dark:text-gray-300">• Container Orchestration</p>
                <p className="text-gray-700 dark:text-gray-300">• Infrastructure as Code (IaC)</p>
                <p className="text-gray-700 dark:text-gray-300">• Configuration Management</p>
                <p className="text-gray-700 dark:text-gray-300">• Monitoring & Observability</p>
                <p className="text-gray-700 dark:text-gray-300">• CI/CD</p>
                <p className="text-gray-700 dark:text-gray-300">• Linux Systems</p>
                <p className="text-gray-700 dark:text-gray-300">• Version Control (Git)</p>
                <p className="text-gray-700 dark:text-gray-300">• Automation & Scripting</p>
                <p className="text-gray-700 dark:text-gray-300">• Log Management</p>
              </div>
            </motion.div>
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">Tools & Technologies</h2>
              <div className="grid grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center"
                    variants={item}
                  >
                    <img 
                      src={tool.icon} 
                      alt={`${tool.name} logo`} 
                      className="w-12 h-12 mb-2"
                    />
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-center">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        className="py-20 bg-white dark:bg-gray-800 fade-in"
        variants={container}
        initial="hidden"
        animate="show"
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
        className="py-20 bg-gray-50 dark:bg-gray-900 fade-in"
        variants={container}
        initial="hidden"
        animate="show"
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
            variants={item}
          >
            {[
              "Leadership",
              "Critical Thinking",
              "Communication",
              "Managing Complex Tasks",
              "Team Collaboration",
              "Entrepreneurship",
              "Quantitative Reasoning"
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-700 rounded-full px-6 py-2 shadow-sm"
                variants={item}
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
    </div>
  );
}

export default App;