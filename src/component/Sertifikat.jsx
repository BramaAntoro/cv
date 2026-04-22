import {
  HiBadgeCheck,
  HiExternalLink,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi";
import { useRef } from "react";

// dicoding
import sertifikatDicodingDasarAI from "../assets/img/sertifikat/dicoding/sertifikat-kompetensi-DiCoding-Dasar-AI_page-0001.jpg";
import sertifikatDicodingJavascript from "../assets/img/sertifikat/dicoding/sertifikat-kompetensi-DiCoding-JAVASCRIPT_page-0001.jpg";
import sertifikatDicodingFrontEndWeb from "../assets/img/sertifikat/dicoding/Belajar-Membuat-Front-End-Web-untuk-Pemula_page-0001.jpg";
import sertifikatDicodingPython from "../assets/img/sertifikat/dicoding/sertifikat_kompetensi_DiCoding_Python_page-0001.jpg";

// innoventure unikom
import sertifikatInnoventureUnikom from "../assets/img/sertifikat/innoventureUnikom/sertifikat-penghargaan-innoventure-unikom-2025-Brama.png";

// udemy
import sertifikatUdemyBootstrap from "../assets/img/sertifikat/udemy/Sertifikat-Bootstrap-Udemy.jpg";
import sertifikatUdemyLaravel from "../assets/img/sertifikat/udemy/Sertifikat-Laravel-Udemy.jpg";

// myskill
import sertifikatMySkillJavaScript from "../assets/img/sertifikat/myskill/Certificate-JavaScript-MySkill.jpg";
import sertifikatMySkillReactJS from "../assets/img/sertifikat/myskill/Certificate-React.JS-MySkill.jpg";

// academy sekolahan
import sertifikatAcademySekolahanMysql from "../assets/img/sertifikat/academysekolahan/Certificate-Mysql-Sid.jpg";
import sertifikatAcademySekolahanPHP from "../assets/img/sertifikat/academysekolahan/Certificate-Javascript-Pemula-Sampai-Mahir-Sid.jpg";

// coding studio
import sertifikatCodingStudio1 from "../assets/img/sertifikat/codingstudio/Certificate-Fundamental-Front-End-Web-Development-I-Coding-Studio.jpg";
import sertifikatCodingStudio2 from "../assets/img/sertifikat/codingstudio/Certificate-Fundamental-Front-End-Web-Development-II-Coding-Studio.jpg";

// kominfo
import sertifikatKominfo from "../assets/img/sertifikat/kominfo/Sertifikat-partisipasi-Kominfo-Muhammad-Brama-Antoro.jpg";

// SmkDev
import sertifikatCompletionSmkDev from "../assets/img/sertifikat/smkDev/Certificate-of-completion-SMKDEV-Scholarships-Expert-Class-2025.jpg";

// PKL / WGS
import sertifikatWGS_PKL from "../assets/img/sertifikat/pkl/Muhammad Brama Antoro - 23104116.jpg";
import sertifikatWGS_UJIKOM from "../assets/img/sertifikat/pkl/UJIKOM - Muhammad Brama Antoro - 23104116_page-0001.jpg";

export const Sertifikat = () => {
  const scrollRef = useRef(null);

  const data = [
    {
      img: sertifikatWGS_UJIKOM,
      sertifikat: "Certificate of Competence (UJIKOM) - Backend Developer",
      issuer: "PT Walden Global Services",
      kredesial:
        "https://drive.google.com/file/d/1Ojv8Fb8uBtgGtU3NEeMV36pfjZRyoX_-/view?usp=drive_link",
    },
    {
      img: sertifikatWGS_PKL,
      sertifikat: "Industrial Internship (PKL) - Backend Developer",
      issuer: "PT Walden Global Services",
      kredesial:
        "https://drive.google.com/file/d/1oYw66_M47nWHH7UsOCFD8rekulygVwup/view?usp=drive_link",
    },
    {
      img: sertifikatInnoventureUnikom,
      sertifikat: "2nd Winner Innoventure UNIKOM 2025",
      issuer: "UNIKOM",
      kredesial:
        "https://drive.google.com/drive/folders/1SCjAo2yQto802AQohMD1YpJ3xxryJgH-",
    },
    {
      img: sertifikatDicodingPython,
      sertifikat: "Python Programming",
      issuer: "Dicoding Indonesia",
      kredesial: "https://www.dicoding.com/certificates/N9ZO2JOO6PG5",
    },
    {
      img: sertifikatDicodingJavascript,
      sertifikat: "JavaScript Programming",
      issuer: "Dicoding Indonesia",
      kredesial: "https://www.dicoding.com/certificates/KEXLYRE4RZG2",
    },
    {
      img: sertifikatDicodingFrontEndWeb,
      sertifikat: "Front-End Web Development",
      issuer: "Dicoding Indonesia",
      kredesial: "https://www.dicoding.com/certificates/GRX53LNVKZ0M",
    },
    {
      img: sertifikatDicodingDasarAI,
      sertifikat: "Basic AI Learning",
      issuer: "Dicoding Indonesia",
      kredesial: "https://www.dicoding.com/certificates/KEXL214E0ZG2",
    },
    {
      img: sertifikatUdemyLaravel,
      sertifikat: "Laravel: Beginner to Advanced",
      issuer: "Udemy",
      kredesial:
        "https://www.udemy.com/certificate/UC-b89576bb-1a20-4f93-9130-80cf30ae7bf0/",
    },
    {
      img: sertifikatUdemyBootstrap,
      sertifikat: "Bootstrap CSS: Beginner to Advanced",
      issuer: "Udemy",
      kredesial:
        "https://www.udemy.com/certificate/UC-fd2886c7-0796-4fed-8e69-cb0f4d53ae1f/",
    },
    {
      img: sertifikatMySkillReactJS,
      sertifikat: "React.JS Specialization",
      issuer: "MySkill",
      kredesial:
        "https://storage.googleapis.com/myskill-v2-certificates/topic-sTLaN1dknfdCpAbUm5O2/UWddfZoysfU2JRAf2qjYmVhRtUy2-cYr7yu1y48WG4z5wksvJ.pdf",
    },
    {
      img: sertifikatMySkillJavaScript,
      sertifikat: "JavaScript Specialization",
      issuer: "MySkill",
      kredesial:
        "https://storage.googleapis.com/myskill-v2-certificates/topic-sTLaN1dknfdCpAbUm5O2/UWddfZoysfU2JRAf2qjYmVhRtUy2-cYr7yu1y48WG4z5wksvJ.pdf",
    },
    {
      img: sertifikatCompletionSmkDev,
      sertifikat: "Expert Class 2025",
      issuer: "SMKDEV",
      kredesial:
        "https://www.udemy.com/certificate/UC-b89576bb-1a20-4f93-9130-80cf30ae7bf0/",
    },
    {
      img: sertifikatAcademySekolahanMysql,
      sertifikat: "MySQL Database Mastery",
      issuer: "Academy Sekolahan",
      kredesial: "https://academy.sekolahan.id/verify-certificate/362775",
    },
    {
      img: sertifikatAcademySekolahanPHP,
      sertifikat: "PHP Web Development",
      issuer: "Academy Sekolahan",
      kredesial: "https://academy.sekolahan.id/verify-certificate/464017",
    },
    {
      img: sertifikatCodingStudio1,
      sertifikat: "Fundamental Front-End I",
      issuer: "Coding Studio",
      kredesial:
        "https://member.codingstudio.id/certificate/77EBA40B94-77DFB8E69C-77DFB8E69C-77DFB89A6F",
    },
    {
      img: sertifikatCodingStudio2,
      sertifikat: "Fundamental Front-End II",
      issuer: "Coding Studio",
      kredesial:
        "https://member.codingstudio.id/certificate/77EBA40B94-77FDB43C25-77DFB89A6F",
    },
    {
      img: sertifikatKominfo,
      sertifikat: "Makin Cakap Digital 2022",
      issuer: "Kominfo",
      kredesial: "",
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="sertifikat">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <HiBadgeCheck className="text-blue-600" /> My Certifications
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Swipe or use the arrows to see all my 15+ certifications.
          </p>
        </div>

        <div className="relative group mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-gray-600 hover:text-blue-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <HiChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-gray-600 hover:text-blue-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <HiChevronRight size={24} />
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-none w-[280px] md:w-[350px] snap-start"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={item.img}
                      alt={item.sertifikat}
                    />

                    {item.kredesial && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={item.kredesial}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-blue-600 p-4 rounded-full hover:scale-110 transition-transform shadow-lg"
                        >
                          <HiExternalLink size={24} />
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.sertifikat}
                    </h3>
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-blue-600 font-bold text-xs">
                        {item.issuer}
                      </span>
                      <HiBadgeCheck className="text-blue-500" size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://drive.google.com/drive/folders/1TTyhxO28NbYyvPdS9DCOzDYcfGFtIHIS?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 px-10 py-4 rounded-full text-blue-600 hover:border-blue-600 hover:shadow-xl font-bold text-lg transition-all hover:-translate-y-1"
          >
            View Full Drive Folder
            <HiExternalLink />
          </a>
        </div>
      </div>
    </section>
  );
};
