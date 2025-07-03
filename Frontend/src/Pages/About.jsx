import React from "react";
import Book from "../assets/Book.jpg";

const About = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20 mb-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            About <span className="text-pink-500">Us</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
            Welcome to{" "}
            <span className="font-semibold text-pink-600">bookStore</span>, your
            go-to platform for discovering, learning, and enjoying books across
            every genre. Whether you're into fiction, non-fiction, mystery,
            science, or self-help — we’ve got something for everyone!
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
            Our mission is to make reading accessible and enjoyable for all
            ages. We carefully curate our collection and ensure quality
            recommendations for passionate readers like you.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>Vast genres and curated books</li>
              <li>User-friendly, responsive UI</li>
              <li>Personalized recommendations</li>
              <li>Dark/light theme support</li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Book}
            alt="Books Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
