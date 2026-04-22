import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import managementLibrary from '../assets/img/projects/management_library/ui_management_library.png';
import publicComplaint from '../assets/img/projects/public_complaint/ui_public_complaint.png';
import WGSCuti from '../assets/img/projects/wgs_cuti/ui_wgs_cuti.png';
import sibening from '../assets/img/projects/sibening/ui_sibening.png';
import bbmdStore from '../assets/img/projects/bbmd_store/ui_bbmd_store.png';

const services = [
  {
    name: "BBMD Store",
    slug: "bbmd-store",
    imageUrl: bbmdStore,
    role: "Full-stack Developer",
    deskripsi: "Point of Sale platform that optimizes store management through efficient stock and sales synchronization to support retail business productivity.",
    teknologi: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/BramaAntoro/bbmd-store",
    liveLink: "https://bbmd-store.vercel.app/"
  },
  {
    name: "WGS Cuti",
    slug: "wgs-cuti",
    imageUrl: WGSCuti,
    role: "Back-end Developer",
    deskripsi: "A centralized leave submission and approval system for employees and HR, simplifying administrative processes efficiently.",
    teknologi: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: ""
  },
  {
    name: "Management Library",
    slug: "management-library",
    imageUrl: managementLibrary,
    role: "Full-stack Developer",
    deskripsi: "Integrated library data management system for tracking books, members, and borrowing transactions seamlessly.",
    teknologi: ["PHP", "Laravel", "Livewire", "MySQL"],
    github: "https://github.com/BramaAntoro/management-library"
  },
  {
    name: "Public Complaint",
    slug: "public-complaint",
    imageUrl: publicComplaint,
    role: "Full-stack Developer",
    deskripsi: "Online platform for public complaints, facilitating authorities in verifying and processing reports efficiently.",
    teknologi: ["React.js", "Laravel", "MySQL"],
    github: "https://github.com/BramaAntoro/public-complaint"
  },
  {
    name: "SiBening",
    slug: "sibening",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredServices.map((service, index) => (
            <div 
              key={service.name} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-video bg-slate-50 overflow-hidden border-b border-gray-100 flex items-center justify-center">
                <img
                  className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                  src={service.imageUrl}
                  alt={service.name}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500"></div>
                
                {/* Role Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-200">
                    {service.role}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex gap-3 pt-1">
                    {service.liveLink && (
                      <a
                        href={service.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors bg-gray-50 p-2 rounded-lg hover:bg-blue-50"
                        title="Live Preview"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                    {service.github ? (
                      <a
                        href={service.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 p-2 rounded-lg hover:bg-gray-100"
                        title="Source Code"
                      >
                        <FaGithub size={18} />
                      </a>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-300 uppercase bg-gray-50 px-2 py-1 rounded">
                        Private
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 line-clamp-2 text-lg leading-relaxed">
                  {service.deskripsi}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {service.teknologi.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-semibold bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <Link
                    to={`/project/${service.slug}`}
                    className="group/btn flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-all"
                  >
                    <span>View Case Study</span>
                    <FaArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
