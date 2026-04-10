import { Button, FloatingLabel } from "flowbite-react";
import { HiMail, HiPhone, HiLocationMarker, HiChatAlt2 } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Form() {
    const githubUrl = import.meta.env.VITE_GITHUB_URL;
    const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
    const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL;
    const emailMailto = import.meta.env.VITE_EMAIL_URL;
    
    const displayEmail = emailMailto?.replace("mailto:", "") || "brama4751antoro@gmail.com";
    
    const phoneNumber = '6282120164306';

    const sendToWhatsApp = (e) => {
        e.preventDefault();
        const fromInput = document.getElementById('fromInput').value;
        const emailInput = document.getElementById('emailInput').value;
        const messageInput = document.getElementById('messageInput').value;

        if (!fromInput || !emailInput || !messageInput) {
            alert("Please fill in all fields");
            return;
        }

        const message = `*Contact Form - CV Web*\n\n*From:* ${fromInput}\n*Email:* ${emailInput}\n*Message:* ${messageInput}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    }

    const contactInfo = [
        { icon: HiMail, label: "Email", value: displayEmail, link: emailMailto },
        { icon: HiPhone, label: "WhatsApp", value: "+62 821 2016 4306", link: `https://wa.me/${phoneNumber}` },
        { icon: HiLocationMarker, label: "Location", value: "Bandung, West Java", link: "#" }
    ];

    return (
        <section className="py-24 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
                        <HiChatAlt2 className="text-blue-600" /> Get In Touch
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? Feel free to reach out through any of the channels below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Contact Info */}
                    <div className="space-y-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {contactInfo.map((info, idx) => (
                                <a 
                                    key={idx} 
                                    href={info.link}
                                    target={info.label !== "Location" ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <info.icon size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{info.label}</p>
                                        <p className="text-lg font-bold text-gray-900">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Media Links */}
                        <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200">
                            <h3 className="text-xl font-bold mb-6">Social Media</h3>
                            <div className="flex gap-4">
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white hover:text-blue-600 rounded-xl flex items-center justify-center transition-all duration-300">
                                    <FaGithub size={24} />
                                </a>
                                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white hover:text-blue-600 rounded-xl flex items-center justify-center transition-all duration-300">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white hover:text-blue-600 rounded-xl flex items-center justify-center transition-all duration-300">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl">
                        <form className="space-y-6" onSubmit={sendToWhatsApp}>
                            <div>
                                <FloatingLabel variant="outlined" label="Your Name" id="fromInput" type="text" />
                            </div>
                            <div>
                                <FloatingLabel variant="outlined" label="Email Address" id="emailInput" type="email" />
                            </div>
                            <div className="relative">
                                <textarea 
                                    id="messageInput"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none min-h-[150px] transition-all"
                                ></textarea>
                            </div>
                            <Button 
                                type="submit" 
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-1"
                            >
                                Send Message via WhatsApp
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a 
                href={`https://wa.me/${phoneNumber}`} 
                target="_blank" 
                rel="noreferrer noopener" 
                className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group"
            >
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
                <FaWhatsapp size={28} />
                <span className="font-bold text-lg hidden md:block">Chat on WhatsApp</span>
            </a>
        </section>
    );
}