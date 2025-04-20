import React from "react";
import ProfilePic from "../assets/profile-pic.jpg";

const Profile = () => {
  return (
    <section
    id="about">
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 text-center font-poppins">
        <div className="flex-shrink-0">
            <img
            src= {ProfilePic}
            alt="Avreet Singh"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-gray-700 dark:border-gray-500 items-center justify-center"/>
        </div>
        <div className="flex flex-col text-center justify-center">
            <div>
                <h6 className="text-lg font-bold mt-2 dark:text-white">Hi, I am</h6>
                <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">Avreet Singh</h2>
                <h4 className="text-3xl font-bold text-gray-600 dark:text-gray-400 mt-4">Web Developer</h4>
            </div>
            {/* <p className="text-sm text-gray-700 mt-2 max-w-md">
            Passionate about building beautiful and fast web apps.<br></br> Learning React.
            </p> */}
            <div className="mt-3 space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    <a>📧 </a><a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=avreetsingh0009@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                        >
                        avreetsingh0009@gmail.com
                    </a>
                </p>
                <div className="flex justify-center gap-4 mt-2">
                    <a  href="https://github.com/Avreet0009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-wheat hover:underline mt-2">
                    GitHub
                    </a>
                    <a  href="https://linkedin.com/in/avreet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-wheat hover:underline mt-2">                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
};

export default Profile;
