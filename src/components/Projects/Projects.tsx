export const Projects = () => {
  const projectData = [
    {
      title: "Recipe Finder",
      description: "A recipe finder application that helps you find recipes based on categories and add recipes to favorites.",
      images: [
        "/recipe-finder.png",
        "/recipe-finder-2.png",
        "/recipe-finder-3.png",
      ],
      tech: ["React Native", "Typescript", "Expo", "API: TheMealDB"],
      link: "#",
      repo: "https://github.com/ossegosse/recipe-finder"
    },
    {
      title: "Project Two",
      description: "A search engine containing books and authors with data from OpenLibrary.org API. Search for books, favorite books and authors and add reviews.",
      image: "https://via.placeholder.com/400",
      tech: ["React", "Vite", "TypeScript", "SCSS", "React Router"],
      link: "#",
      repo: "https://github.com/ossegosse/slutprojekt-js-ramverk"
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
    <section id="projects" className="min-h-screen flex flex-col items-center bg-primary py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 uppercase text-text-primary">My Projects</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projectData.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all hover:scale-105">
            {/* Display images in a row at the top */}
            <div className="flex gap-2">
              {project.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title}-image-${i}`}
                  className="w-full h-70 object-cover"
                />
              ))}
            </div>

            {/* Card Information */}
            <div className="p-6">
              <h3 className="text-xl text-white font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href={project.repo}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
