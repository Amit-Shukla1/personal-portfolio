import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Agency.ai",
    description:
      "Designing high-impact digital experiences that transform ideas into scalable, modern products.",
    image: "/projects/agencyaiproject.PNG",
    tags: ["React", "TailwindCSS", "Framer Motion", "JavaScript"],
    demoUrl: "https://agency-ai-nu-nine.vercel.app/",
    githubUrl: "https://github.com/Amit-Shukla1/Agency.AI",
  },
  {
    id: 2,
    title: "Weather app",
    description:
      "Interactive web app to check the current weather for any city.",
    image: "/projects/weather app.PNG",
    tags: ["Node.js", "Express server"],
    demoUrl: "https://weather-app-alpha-seven-45.vercel.app",
    githubUrl: "https://github.com/Amit-Shukla1/Weather-app",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A static e-commerce website layout built using only HTML and CSS featuring product grids, navigation menus, and mobile-optimized layouts.",
    image: "/projects/ecommerce.PNG",
    tags: ["HTML", "CSS"],
    demoUrl: "https://e-commerce-platform-one-blond.vercel.app/",
    githubUrl: "https://github.com/Amit-Shukla1/E-commerce-Platform",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of recent projects showcasing my approach to building
          performant, user-focused web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Amit-Shukla1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
