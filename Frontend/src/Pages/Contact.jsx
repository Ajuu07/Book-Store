import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 dark:bg-slate-900 px-4 py-16 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white dark:bg-slate-800 rounded-lg shadow-xl p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Get in <span className="text-pink-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="textarea textarea-bordered w-full dark:bg-slate-700 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-pink-500 hover:bg-pink-600 text-white w-full transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8 ml-4  md:ml-10 mt-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                📧 Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                support@bookstore.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                📞 Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                🏢 Address
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                123 Book Lane, Pune, Maharashtra, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                ⏰ Office Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mon - Sat: 10 AM - 6 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
