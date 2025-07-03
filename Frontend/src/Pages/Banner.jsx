import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-10 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-32">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold leading-tight">
            Start Your Journey of Knowledge{" "}
            <span className="text-pink-500">Today!!!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Explore thousands of books across all genres. Discover stories,
            sharpen your skills, and learn something new every day — only at
            BookStore.
          </p>
          {/* Email Input */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <input
              type="email"
              placeholder="📧 Enter your email to login"
              required
              className="input input-bordered w-full max-w-md text-black"
            />

            <Link
              to="/signup"
              className="btn btn-secondary w-full sm:w-auto"
              onClick={() =>
                document.getElementById("signup_modal").showModal()
              }
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 order-1 md:order-2 mt-12 md:mt-32 flex justify-center">
        <img
          src="/Img/Banner.png"
          alt="Banner"
          className="w-full max-w-md h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
