import { useParams, useNavigate, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import {
  FaArrowLeft,
  FaDatabase,
  FaLayerGroup,
  FaRocket,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import logo from "../assets/img/logo_brama.png";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData[slug];
  const phoneNumber = "6282120164306";

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 mx-auto"
          >
            <FaArrowLeft /> Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-md border border-slate-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-blue-600" />
            <span className="text-sm font-bold tracking-tight text-slate-700">
              Go Back
            </span>
          </button>
          <Link to="/">
            <img src={logo} alt="logo brama" className="h-20 w-20" />{" "}
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div data-aos="fade-down" className="mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] rounded-full">
                {project.role}
              </span>
            </div>
            <h1
              data-aos="fade-up"
              className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8"
            >
              {project.name}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-bold border border-transparent hover:border-blue-200 hover:bg-white transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.liveLink && (
              <div data-aos="fade-up" data-aos-delay="150" className="mb-16">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95 group"
                >
                  <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
                  Visit Live Site
                </a>
                {project.note && (
                  <p className="mt-3 text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                    * {project.note}
                  </p>
                )}
              </div>
            )}
          </div>

          <div data-aos="zoom-in" className="relative max-w-6xl mx-auto">
            <div className="bg-white border border-slate-200 shadow-xl overflow-hidden">
              <img
                src={project.uiImage}
                alt={project.name}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Narrative Section: The Problem vs Solution */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          {/* Problem Side */}
          <div data-aos="fade-right" className="sticky top-32">
            <div className="flex items-center gap-3 mb-6 text-red-500">
              <div className="w-12 h-px bg-red-200"></div>
              <span className="text-xs font-black uppercase tracking-widest">
                The Context
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              Before the{" "}
              <span className="text-red-500 italic">Transformation.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              {project.problem}
            </p>
          </div>

          {/* Solution Side */}
          <div className="space-y-12">
            <div
              data-aos="fade-left"
              className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  <FaRocket size={24} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">
                  Innovative Solution
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="bg-slate-900 p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-900/20">
                  <FaRocket size={24} className="rotate-90" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                  The Result & Impact
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engine Room: Database Design */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 text-blue-400 mb-6 bg-blue-400/10 px-6 py-2 rounded-full border border-blue-400/20">
              <FaDatabase />
              <span className="text-xs font-black uppercase tracking-widest">
                The Engine Room
              </span>
            </div>
            <h3 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              System Architecture
            </h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
              A robust backend requires a meticulously designed database
              structure to handle scalability and data integrity.
            </p>
          </div>

          <div data-aos="zoom-in" className="relative max-w-5xl mx-auto group">
            <div className="bg-slate-800/50 backdrop-blur-xl p-4 rounded-[2.5rem] border border-slate-700 shadow-2xl">
              <div className="absolute top-8 left-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <img
                src={project.erdImage}
                alt="ERD Design"
                className="w-full h-auto rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {["Relational", "Scalable", "Optimized", "Secure"].map((prop) => (
                <div
                  key={prop}
                  className="px-4 py-3 bg-slate-800/30 border border-slate-700 rounded-xl text-slate-400 text-xs font-bold uppercase tracking-widest"
                >
                  {prop}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion & Call to Action */}
      <section className="py-40 px-6 bg-white overflow-hidden relative text-center">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-12 tracking-tighter">
            Let's build the <br />
            next{" "}
            <span className="text-blue-600 italic underline decoration-blue-100">
              Big Thing.
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative px-10 py-5 bg-slate-900 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FaWhatsapp size={20} className="text-[#25D366]" />
                Hire Me for Projects
                <HiOutlineArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <button
              onClick={() => navigate("/")}
              className="px-10 py-5 bg-white text-slate-900 font-black rounded-full border-2 border-slate-200 hover:border-slate-900 transition-all active:scale-95"
            >
              Back to Showcase
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        {/* Footer info removed as per request */}
      </footer>
    </div>
  );
};
