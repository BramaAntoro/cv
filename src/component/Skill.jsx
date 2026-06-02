import {
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaLaravel,
  FaGit,
  FaGithub,
  FaGitlab,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiUml,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiSupabase,
  SiGooglegemini,
} from "react-icons/si";
import { TbRelationManyToMany } from "react-icons/tb";

export function Skill() {
  const skillGroups = [
    {
      title: "Bahasa Pemrograman",
      skills: [
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
        { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-500" },
        { icon: FaPhp, name: "PHP", color: "text-indigo-500" },
        { icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
      ],
    },
    {
      title: "Framework & Library",
      skills: [
        { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
        { icon: FaReact, name: "React.js", color: "text-blue-400" },
        { icon: SiExpress, name: "Express.js", color: "text-gray-600" },
        { icon: FaLaravel, name: "Laravel", color: "text-red-500" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
        { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { icon: SiPostgresql, name: "PostgreSQL", color: "text-indigo-400" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
        { icon: SiSupabase, name: "Supabase", color: "text-emerald-500" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { icon: FaGit, name: "Git", color: "text-orange-600" },
        { icon: FaGithub, name: "GitHub", color: "text-gray-900" },
        { icon: FaGitlab, name: "GitLab", color: "text-orange-500" },
      ],
    },
    {
      title: "Sistem & AI",
      skills: [
        { icon: TbRelationManyToMany, name: "ERD", color: "text-blue-600" },
        { icon: SiUml, name: "UML", color: "text-blue-500" },
        { icon: SiGooglegemini, name: "Gemini AI", color: "text-blue-400" },
        { icon: FaRobot, name: "Prompting", color: "text-emerald-600" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I specialize in modern web technologies, with a strong focus on
            building robust backend systems and complete full-stack
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                        <Icon className={`text-2xl ${skill.color}`} />
                      </div>
                      <span className="text-[10px] font-semibold text-gray-600 text-center uppercase tracking-tighter">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
