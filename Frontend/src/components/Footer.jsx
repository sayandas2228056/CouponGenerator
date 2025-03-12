import React from "react";

function Footer() {
  return (
    <footer className="w-full text-white text-center p-4 mt-8">
      <p className="text-lg font-semibold">Made by Sayan Das</p>
      <p className="text-sm text-gray-400">Gmail: offcsayantubecode@gmail.com</p>
      <div className="mt-2">
        <a
          href="mailto:offcsayantubecode@gmail.com"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-md transition-all"
        >
          📧 Email Me
        </a>
      </div>
      <p className="mt-2 text-sm text-gray-400">GitHub: sayandas2228056</p>
      <div className="mt-2">
        <a
          href="https://github.com/sayandas2228056"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg shadow-md transition-all"
        >
          🔗 GitHub Profile
        </a>
      </div>
      <p className="mt-2 text-sm text-gray-400">LinkedIn: Sayan Das</p>
      <div className="mt-2">
        <a
          href="https://www.linkedin.com/in/sayan-das-b99810213/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition-all"
        >
          🔗 LinkedIn Profile
        </a>
      </div>
    </footer>
  );
}

export default Footer;
