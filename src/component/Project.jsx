import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import managementLibrary from '../assets/img/projects/management-library.png';
import publicComplaint from '../assets/img/projects/public complaint.png';
import WGSCuti from '../assets/img/projects/wgs cuti.png';
import sibening from '../assets/img/projects/sibening.png';

const services = [
  {
    name: "WGS Cuti",
    imageUrl: WGSCuti,
    role: "Back-end Developer",
    deskripsi: "A centralized leave submission and approval system for employees and HR, simplifying administrative processes efficiently.",
    teknologi: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: ""
  },
  {
    name: "Management Library",
    imageUrl: managementLibrary,
    role: "Full-stack Developer",
    deskripsi: "Integrated library data management system for tracking books, members, and borrowing transactions seamlessly.",
    teknologi: ["PHP", "Laravel", "Livewire", "MySQL"],
    github: "https://github.com/BramaAntoro/management-library"
  },
  {
    name: "Public Complaint",
    imageUrl: publicComplaint,
    role: "Full-stack Developer",
    deskripsi: "Online platform for public complaints, facilitating authorities in verifying and processing reports efficiently.",
    teknologi: ["React.js", "Laravel", "MySQL"],
    github: "https://github.com/BramaAntoro/public-complaint"
  },
  {
    name: "SiBening",
    imageUrl: sibening,
    role: "Back-end Developer",
    deskripsi: "Electronic counseling system connecting students and counselor teachers for organized monitoring and communication.",
    teknologi: ["PHP", "Laravel", "MySQL"],
    github: ""
  }
];

export const Project = () => {
  const [filter, setFilter] = useState('All');

  const filteredServices = services.filter(service => {
    if (filter === 'All') return true;
    return service.role.includes(filter);
  });

  const filterOptions = ['All', 'Full-stack', 'Back-end'];

  return (
    <section className="py-24 bg-gray-50" id="project">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A selection of my recent works, showcasing my expertise in building scalable and efficient web applications.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-8 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                filter === option
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredServices.map((service) => (
            <div 
              key={service.name} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="lg:w-1/2 overflow-hidden relative min-h-[250px]">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={service.imageUrl}
                    alt={service.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-sm bg-blue-600 px-3 py-1 rounded-full">
                      {service.role}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.deskripsi}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.teknologi.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {service.github ? (
                      <a
                        href={service.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-bold transition-colors"
                      >
                        <FaGithub size={20} />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="text-gray-400 flex items-center gap-2 cursor-not-allowed italic text-sm">
                        Private Repo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
