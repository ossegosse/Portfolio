export const Projects = () => {
    const projectData = [
      {
        title: "Project One",
        description: "A brief description of what this project does and how it helps users.",
        image: "https://via.placeholder.com/400",
        tech: ["React", "Tailwind", "Node.js"],
        link: "#",
        repo: "#"
      },
      {
        title: "Project Two",
        description: "An innovative project that solves a specific problem efficiently.",
        image: "https://via.placeholder.com/400",
        tech: ["Next.js", "TypeScript", "Firebase"],
        link: "#",
        repo: "#"
      },
      {
        title: "Project Three",
        description: "A web application built with a modern tech stack to enhance productivity.",
        image: "https://via.placeholder.com/400",
        tech: ["Vue", "CSS Modules", "Express"],
        link: "#",
        repo: "#"
      },
    ];
  
    return (
      <section id="projects" className="min-h-screen py-16 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2  className="text-4xl font-bold text-center mb-12 uppercase text-red-400 border-r-1 border-l-1 px-2">My Projects</h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
  
                  <div className="flex justify-between">
                    <a
                      href={project.link}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={project.repo}
                      className="text-gray-400 hover:text-gray-300 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  