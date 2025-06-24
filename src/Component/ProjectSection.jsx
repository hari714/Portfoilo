import { ArrowRight, ExternalLink, Github, Terminal } from "lucide-react";


const projects = [
  {
    id: 1,
    title: "HTML/CSS Landing Page",
    description: "Simple static landing page using HTML and CSS.",
    tags: ["HTML", "CSS"],
    demoUrl: "https://github.com/hari714/html-css-page", // or hosted URL
    githubUrl: "https://github.com/hari714/html-css-page",
  },
  {
    id: 2,
    title: "Responsive Webpage",
    description: "A responsive UI built using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://github.com/hari714/responsive-webpage",
    githubUrl: "https://github.com/hari714/responsive-webpage",
  },
  {
    id: 3,
    title: "Bank Management System",
    description: "Java-based console app using streams and collections.",
    tags: ["Java", "Streams", "Collections"],
    demoUrl: "https://github.com/hari714/banking",
    githubUrl: "https://github.com/hari714/banking",
  },
  {
    id: 4,
    title: "Train Reservation System",
    description: "Java ticket booking system using Stream API.",
    tags: ["Java", "Streams", "Collections"],
    demoUrl: "https://github.com/hari714/TrainReservation",
    githubUrl: "https://github.com/hari714/TrainReservation",
  },
  {
    id: 5,
    title: "Full-Stack Todo App",
    description:
      "Todo list app using React, Tailwind CSS, Spring Boot, and Java.",
    tags: ["React", "Tailwind", "Spring Boot"],
    demoUrl: "https://github.com/hari714/TodoListjs",
    githubUrl: "https://github.com/hari714/TodoListjs",
  },
  {
    id: 6,
    title: "Employee Management System",
    description:
      "CRUD employee manager using Angular, Tailwind, and Spring Boot.",
    tags: ["Angular", "Tailwind", "Spring Boot"],
    demoUrl: "https://github.com/hari714/Employee-Management",
    githubUrl: "https://github.com/hari714/Employee-Management",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one showcases different tech
          stacks and problem-solving skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border"
            >
              {/* No image — just colored header */}
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <Terminal size={36} className="mx-auto mb-2" />
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hari714"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
