// Skills.jsx
import {FaReact,FaNodeJs,FaGitAlt,FaGithub,FaHtml5,FaCss3Alt,FaTools,} from "react-icons/fa";
import {SiTailwindcss,SiJavascript,SiMongodb,SiExpress,SiPostman,SiVercel,} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiCustomize } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
          { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={24} /> },
          { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={24} /> },
          { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={24} /> },
          { name: "React.js", icon: <FaReact className="text-sky-500" size={24} /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={24} /> },
      ],
    },
    {
        title: "Backend",
        skills: [
          { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={24} /> },
          { name: "Express.js", icon: <SiExpress className="text-green-700" size={24} /> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={24} /> },
      ],
    },
    {
        title: "Tools",
        skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" size={24} /> },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" size={24} /> },
        { name: "Postman", icon: <SiPostman className="text-orange-600" size={24} /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" size={24} /> },
      ],
    },
    {
      title: "Teamcenter",
      skills: [
      { name: "TC Installation", icon:(
        <img
          src="https://store-images.s-microsoft.com/image/apps.21913.863c1661-4a23-4ffe-b1c7-b4f77b333831.708cc5a7-7813-402c-a822-441051210520.e64bdc28-9190-4f59-ad4b-c36c6009df65.png"
          alt="Teamcenter Icon"
          className="w-5 h-5"
        />
      )},
      { name: "Client Cusomization", icon: <BiCustomize className="text-black dark:text-white" size={24} /> },
      { name: "Administration Data", icon: <FaDatabase className="text-orange-600" size={24} /> },
       ],
  },
  ];
  
const Skills = () => {
    return (
      <section
        className="py-10 md:px-8 scroll-mt-16"
        id="skills"
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-wheat mb-2">My Skills 🚀</h2>
          <p className="text-gray-500 text-lg">Technologies & Tools I familiar with  </p>
        </div>
  
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-[#c1c0bd] dark:bg-[#333] shadow-md rounded-2xl p-6 ${
                skillCategories.length === 4 && index === 3 ? "md:col-span-3 md:mx-auto md:w-1/3" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-black dark:text-gray-200 mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-gray-100 dark:bg-[#222a] px-3 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-black transition cursor-pointer"
                  >
                    {skill.icon}
                    <span className="text-sm items-center font-medium text-black dark:text-white ">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default Skills;
  

// // Skills.jsx
// import { FaReact, FaNodeJs, FaTools } from "react-icons/fa";
// import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";

// const skills = [
//   {
//     title: "Frontend",
//     icon: <FaReact className="text-sky-500" size={28} />,
//     list: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
//   },
//   {
//     title: "Backend",
//     icon: <FaNodeJs className="text-green-600" size={28} />,
//     list: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
//   },
//   {
//     title: "Tools",
//     icon: <FaTools className="text-gray-600" size={28} />,
//     list: ["Git", "GitHub", "Postman", "VS Code", "Netlify"],
//   },
// ];

// const Skills = () => {
//   return (
//     <section
//       className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]"
//       id="skills"
//     >
//       <div className="max-w-5xl mx-auto text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-800 mb-2">My Skills 🚀</h2>
//         <p className="text-gray-500 text-lg">
//           What I bring to the table — tools and technologies I love working with.
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-10">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="w-72 bg-white hover:shadow-xl transition-shadow duration-300 shadow-md rounded-2xl p-6 border border-gray-100"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               {skill.icon}
//               <h3 className="text-xl font-semibold text-gray-700">{skill.title}</h3>
//             </div>
//             <ul className="flex flex-wrap gap-2">
//               {skill.list.map((item, idx) => (
//                 <li
//                   key={idx}
//                   className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;
