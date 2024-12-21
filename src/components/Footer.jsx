import { FaGithub, FaLinkedin, FaGlobe, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Footer text */}
        <p className="text-lg font-bold mb-4">Made by Vipin Chauhan</p>

        {/* Icons */}
        <div className="flex justify-center space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/Vipin0316"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300"
          >
            <FaGithub size={20} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vipin-chauhan-017569237/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          {/* Portfolio */}
          <a
            href="https://vipin0316.github.io/portfolio.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300"
          >
            <FaGlobe size={20} />
          </a>
          {/* Resume */}
          <a
            href="https://rose-mada-42.tiiny.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300"
          >
            <FaFilePdf size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
