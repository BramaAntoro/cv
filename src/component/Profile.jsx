import picture from "../assets/img/brama.png";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Profile() {
  const githubUrl = import.meta.env.VITE_GITHUB_URL;
  const lnkedInUrl = import.meta.env.VITE_LINKEDIN_URL;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL;
  const emailUrl = import.meta.env.VITE_EMAIL_URL;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h3 className="text-blue-600 font-bold text-xl md:text-2xl mb-4">
              Hello, I am
            </h3>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              <span className="block">Muhammad</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Brama Antoro
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-medium text-gray-600 mb-8 h-12">
              <ReactTyped
                strings={["Back-end Developer", "Full-stack Developer"]}
                typeSpeed={80}
                loop
                backSpeed={40}
                showCursor={true}
              />
            </div>

            <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
              I am a back-end developer with knowledge and experience in
              building and managing database systems. I understand the
              end-to-end development process to create efficient and
              high-quality solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <a
                href="#project"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View My Projects
              </a>

              <div className="flex items-center gap-5">
                <a
                  href={githubUrl}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href={lnkedInUrl}
                  target="_blank"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  className="text-gray-400 hover:text-pink-600 transition-colors"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href={emailUrl}
                  target="_blank"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <FaEnvelope size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              {/* Background Decorative Element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full opacity-10 blur-2xl animate-pulse"></div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={picture}
                  alt="Muhammad Brama Antoro"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <span className="font-bold text-gray-800">
                    Available for Hire
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
