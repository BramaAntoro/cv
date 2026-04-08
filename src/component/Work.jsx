import { useState, useEffect } from "react";
import { HiBriefcase, HiVideoCamera, HiExternalLink } from "react-icons/hi";
import wgs from "../assets/img/wgs.jpeg";

export const Work = () => {
  const [channelData, setChannelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

  useEffect(() => {
    const fetchChannelData = () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.items && data.items.length > 0) {
            setChannelData(data.items[0]);
          }
        })
        .catch((error) => console.error("Error fetching YouTube data:", error))
        .finally(() => setLoading(false));
    };
    fetchChannelData();
  }, [API_KEY, CHANNEL_ID]);

  const workExperiences = [
    {
      role: "Backend Developer Intern",
      company: "WGS",
      period: "Juli 2025 - November 2026",
      logo: wgs,
      desc: "Developed 'WGS Cuti', a corporate leave management application. Focused on building robust backend logic, database schema design, and creating RESTful APIs for frontend integration.",
      tech: ["Node.js", "Express.js", "PostgreeSQL"],
      type: "job",
    },
  ];

  return (
    <section className="py-24 bg-white" id="work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <HiBriefcase className="text-blue-600" /> Work Experience
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* YouTube Card - Now using same design */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group">
            {loading ? (
              <div className="animate-pulse flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-2xl"></div>
                  <div className="space-y-2">
                    <div className="h-6 w-32 bg-gray-200 rounded"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              </div>
            ) : channelData ? (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={channelData.snippet.thumbnails.medium.url}
                    className="w-16 h-16 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform"
                    alt="YouTube Logo"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 line-clamp-1">
                      Content Creator
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {channelData.snippet.title}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-6">
                  <span className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-xs font-bold">
                    {parseInt(
                      channelData.statistics.subscriberCount,
                    ).toLocaleString()}{" "}
                    Subs
                  </span>
                  <span className="bg-gray-50 text-gray-600 px-4 py-1 rounded-full text-xs font-bold">
                    {parseInt(
                      channelData.statistics.videoCount,
                    ).toLocaleString()}{" "}
                    Videos
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow line-clamp-4 italic text-sm">
                  "{channelData.snippet.description}"
                </p>
                <div className="mt-auto">
                  <a
                    href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-200"
                  >
                    Visit Channel <HiExternalLink />
                  </a>
                </div>
              </>
            ) : (
              <div className="text-gray-400 italic">
                Failed to load YouTube data.
              </div>
            )}
          </div>

          {/* Professional Experience Cards */}
          {workExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={exp.logo}
                  className="w-16 h-16 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform"
                  alt={exp.company}
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                </div>
              </div>
              <div className="mb-6">
                <span className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-bold">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold bg-gray-50 text-gray-500 px-3 py-1 rounded-lg border border-gray-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
