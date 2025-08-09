import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
import managementLibrary from '../assets/projects/managementLibrary.png';
import publicComplaint from '../assets/projects/publicComplaint.png';

const services = [
  {
    step: "01",
    name: "Management Library",
    imageUrl: managementLibrary,
    role: "Full-stack Developer",
    peran: "Building the back-end features, creating the front-end interface, and integrating the two.",
    teknologi: "PHP, Laravel, Livewire, MySQL",
    github: "https://github.com/BramaAntoro/management-library"
  },
  {
    step: "02",
    name: "Pengaduan Masyarakat",
    imageUrl: publicComplaint,
    role: "Full-stack Developer",
    peran: "Building the back-end features, creating the front-end interface, and integrating the two.",
    teknologi: "JavaScript, React.js, PHP, Laravel, MySQL",
    github: "https://github.com/BramaAntoro/public-complaint"
  }
];

export const Project = () => {
  return (
    <section className="py-16 mx-auto sm:py-20" id="project">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center">Project</h2>
          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="group h-96 w-96 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    {service.imageUrl && (
                      <img
                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                        src={service.imageUrl}
                        alt={service.name}
                        width={320}
                        height={320}
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
                      <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center text-sm">
                        <span>move the mouse or click to see details</span>
                        <WrenchScrewdriverIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col justify-between">
                      <div>
                        <h2 className="text-lg font-bold mb-3 text-center">{service.name}</h2>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-semibold text-blue-400 mb-1">Role:</p>
                            <span className="text-sm bg-blue-600 px-2 py-1 rounded text-white">
                              {service.role}
                            </span>
                          </div>
                          
                          <div>
                            <p className="text-xs font-semibold text-green-400 mb-1">Responsibilities:</p>
                            <p className="text-xs leading-relaxed text-gray-300">
                              {service.peran}
                            </p>
                          </div>
                          
                          <div>
                            <p className="text-xs font-semibold text-yellow-400 mb-1">Technologies:</p>
                            <p className="text-xs text-gray-300">
                              {service.teknologi}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <a 
                          href={service.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-3 rounded text-sm font-medium transition-colors"
                        >
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};