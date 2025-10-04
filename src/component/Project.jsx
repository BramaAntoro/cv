import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
import managementLibrary from '../assets/img/projects/management-library.png';
import publicComplaint from '../assets/img/projects/public complaint.png';
import leaveAppWGS from '../assets/img/projects/leave-app-wgs.png';
import sibening from '../assets/img/projects/sibening.png';

const services = [
  {
    step: "01",
    name: "Leave App WGS",
    imageUrl: leaveAppWGS,
    role: "Back-end Developer",
    deskripsi: "Leave App WGS is a web-based application that provides a system for employee leave submission, approval, and recording, equipped with automated features for mandatory leave and balance, while also introducing a more structured workflow.",
    teknologi: "JavaScript, Node.js, Express, PostgreSQL, Prisma ORM",
    github: ""
  },
  {
    step: "02",
    name: "Management Library",
    imageUrl: managementLibrary,
    role: "Full-stack Developer",
    deskripsi: "Management Library is a web-based application designed to simplify integrated library data management. This application provides features for managing books, members, and borrowing/return transactions, making administrative processes more efficient and structured.",
    teknologi: "PHP, Laravel, Livewire, MySQL",
    github: "https://github.com/BramaAntoro/management-library"
  },
  {
    step: "03",
    name: "Public Complaint",
    imageUrl: publicComplaint,
    role: "Full-stack Developer",
    deskripsi: "Public Complaints is a web-based application designed to make it easier for the public to submit complaints online, while also assisting authorities in verifying, processing, and following up on these reports efficiently.",
    teknologi: "JavaScript, React.js, PHP, Laravel, MySQL",
    github: "https://github.com/BramaAntoro/public-complaint"
  },
  {
    step: "04",
    name: "SiBening (Sistem informasi Bimbingan Elektronik & Konseling)",
    imageUrl: sibening,
    role: "Back-end Developer",
    deskripsi: "SiBening is a web-based information system that provides a platform for students to communicate with counselor teachers more easily, while also making it easier for teachers to monitor and handle student issues in an organized manner.",
    teknologi: "PHP, Laravel, MySQL",
    github: ""
  }
];

export const Project = () => {
  return (
    <section className="py-16 mx-auto sm:py-20" id="project">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center">
            Project
          </h2>
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

                        {/* Description */}
                        <p className="text-xs text-gray-300 mb-4 text-center">
                          {service.deskripsi}
                        </p>

                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-semibold text-blue-400 mb-1">Role:</p>
                            <span className="text-sm bg-blue-600 px-2 py-1 rounded text-white">
                              {service.role}
                            </span>
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
                        {service.github ? (
                          <a
                            href={service.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-3 rounded text-sm font-medium transition-colors"
                          >
                            View on GitHub
                          </a>
                        ) : (
                          <p className="block w-full bg-gray-700 text-white text-center py-2 px-3 rounded text-sm font-medium">
                            this repository is private
                          </p>
                        )}
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
