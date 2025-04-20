import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project1 from "../assets/Project1.png";
import Project1d from "../assets/Project-Notes.png";
import Project2 from "../assets/Project-Bookstore.png";

const projects = [
  {
    title: "Fundoo Notes Clone",
    description: "A clone of Google Keep built using MERN stack. Supports CRUD operations with authentication and responsive design.",
    image: Project1, // or use external URL
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/yourusername/fundoo-notes",
    demo: "https://fundoo-notes-demo.vercel.app",
  },
  {
    title: "Book Store App",
    description: "An online bookstore built using React for frontend. Features include browsing, cart, and wishlist functionalities.",
    image: Project2,
    tags: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/yourusername/bookstore-app",
    demo: "https://bookstore-demo.vercel.app",
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 scroll-mt-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 dark:text-wheat">My Projects 💻</h2>
        <p className="text-gray-500 mt-2">Here are some of the cool things I've built</p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto mb-20 px-4 justify-items-center">
      {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#c1c0bd] dark:bg-[#333] rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 h-50 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-wheat mb-2 text-center">{project.title}</h3>
            <p className="text-gray-600 text-sm dark:text-white flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4 justify-self-center">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 dark:bg-[#222] px-2 py-1 rounded-full text-gray-600 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-black hover:text-black">
                <FaGithub size={20} />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-black hover:text-black">
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
