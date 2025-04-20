import React from "react";

const ContactForm = () => {
    return (
        <section
        id="contact"
        className="scroll-mt-16 min-h-max py-20"
        >
        <div className="min-w-80 max-w-lg flex-row mx-auto mt-5 bg-[#7a766f] dark:bg-[#7a766f] p-8 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Contact Me</h2>
        <form
            action="https://formspree.io/f/mwplavab"
            method="POST">
                {/* Name box */}
            <div className="mb-4 justify-center">
                <input
                name="name"
                type="text" required
                id="name"
                className="w-5/6 px-4 py-1 text-center border border-gray-300 rounded-md focus:outline-black mx-auto block"
                placeholder="Your Name 🧑"
                />
            </div>
            {/* Email box */}
            <div className="mb-4 justify-center">
                <input
                name="email"
                type="email" required
                id="email"
                className="w-5/6 px-4 py-1 text-center border border-gray-300 rounded-md focus:outline-black mx-auto block"
                placeholder="Your Email 📧"
                />
            </div>
            {/* Message box  */}
            <div className="mb-5 justify-center">
                <textarea
                name="message"
                id="message"
                rows="2" required
                className="w-5/6 px-4 py-1 text-center border border-gray-300 rounded-md focus:outline-black mx-auto block"
                placeholder="Write your message 💬 here..."
                />
            </div>
            <button
            type="submit"
            className="w-1/2 bg-gray-700 justify-items-center items-center hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-md transition duration-200 mx-auto block"
            >
            Submit
            </button>
        </form>
        </div>
        </section>
    );
};

export default ContactForm;

