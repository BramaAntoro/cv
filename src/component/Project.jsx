import React from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";

import absensi from '../assets/img/project/absensi.png';
import library from '../assets/img/project/library.png';
import marketplace from '../assets/img/project/marketplace.png';

const images = [
  absensi,
  library,
  marketplace
];

const services = [
  {
    step: "01",
    name: "absensi",
    imageUrl: images[0],
    type: "Team Project (ongoing project)",
    description: "A comprehensive attendance management system that simplifies tracking and monitoring extracurricular absences. Features include student attendance, attendance reports, extracurricular creation/request, and more.",
    technologies: "Laravel, MySQL, React.JS, Tailwind"
  },
  {
    step: "02",
    name: "library",
    imageUrl: images[1],
    type: "School Learning Project",
    description: "A digital library management system that facilitates the process of borrowing and returning books. Includes features such as book search, borrowing history tracking, due date notifications, and inventory management for librarians.",
    technologies: "PHP, MySQL, JavaScript, Bootstrap"
  },
  {
    step: "03",
    name: "marketplace",
    imageUrl: images[2],
    type: "Personal Project",
    description: "A complete e-commerce marketplace platform that allows users to buy and sell products online. Features include product listing, payment integration, user authentication, order management, and a seller dashboard with analytics.",
    technologies: "Laravel, MySQL, React, Tailwind"
  },
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
                    <p className="md:my-6 text-2xl">{service.name}</p>
                    <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                      <span>click or hover to see description</span>
                      <WrenchScrewdriverIcon className="h-6 w-6 ml-2" />
                    </button>
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center gap-3">
                      <h2 className="text-xl font-bold">{service.name}</h2>
                      <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-full">
                        {service.type}
                      </span>
                      <p className="text-sm text-pretty text-center leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-2">
                        <p className="text-xs font-semibold text-yellow-300 mb-1">Technologies:</p>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          {service.technologies}
                        </p>
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