import sertifikatDicoding from '../assets/img/sertifikat/sertifikat-kompetensi-DiCoding-JAVASCRIPT_page-0001.jpg';
import sertifikatKominfo from '../assets/img/sertifikat/Sertifikat-partisipasi-Kominfo-Muhammad-Brama-Antoro.jpg';
import sertifikatMySkillCSS from '../assets/img/sertifikat/Certificate-of-Skill-Specialization-MySkill-FRONTEND-CSS-Muhammad-Brama-Antoro.jpg';
import sertifikatMySkillJavaScript from '../assets/img/sertifikat/Certificate-of-Skill-Specialization-MySkill-FRONTEND-JavaScript-Muhammad-Brama-Antoro.jpg';
import sertifikatCodingStudio1 from '../assets/img/sertifikat/Certificate-of-completion_Fundamental-Front-End-Web-Development-I_Muhammad-Brama-Antoro.jpg';
import sertifikatCodingStudio2 from '../assets/img/sertifikat/Certificate-of-completion_Fundamental-Front-End-Web-Development-II_Muhammad-Brama-Antoro.jpg';
import sertifikatAcademySekolahanBootstrap from '../assets/img/sertifikat/Certificate-of-completion-Muhammad-Brama-Antoro-Menggunakan-Bootstrap-Framework-289829.jpg';
import sertifikatUdemyBootstrap from '../assets/img/sertifikat/Sertifikat-penyelesaian-Bootstrap-Udemy.jpg';


export const Sertifikat = () => {
    // data sertifikat
    var data = [
        // dicoding
        {
            img: sertifikatDicoding,
            sertifikat: "Sertifikat DiCoding",
            penjelasan: "Sertifikat kompetensi kelulusan dicoding pada kelas Belajar Dasar Pemograman JavaScript, Berlaku hingga tanggal 18 Desember 2027",
            kredesial: "https://www.dicoding.com/certificates/KEXLYRE4RZG2"
        },
        // kominfo
        {
            img: sertifikatKominfo,
            sertifikat: "Sertifikat Kominfo",
            penjelasan: "Sertifikat partisipasi dalam acara Makin Cakap Digital 2022 - Pendidikan Jawa Barat - Pemanfaatan Internet Untuk Menyebarkan Konten Positif. Bertema Pemanfaatan Internet Untuk Menyebarkan Konten Positif. Yang diselenggarakan oleh Kominfo, Siberkreasi, Yayasan Pendidikan Dasar dan Menengah Pasundan.",
            kredesial: "https://drive.google.com/file/d/1464RpXwsbZhNnCTGu-jIPPGzRPrqbH3r/view?usp=drive_link"
        },
        // Udemy
        {
            img: sertifikatUdemyBootstrap,
            sertifikat: "Sertifikat Udemy Bootstrap",
            penjelasan: "Sertifikat penyelesaian Bootstrap CSS : Pemula sampai Mahir 29 Des 2024, instruktur Programmer Zaman Now",
            kredesial: "https://www.udemy.com/certificate/UC-fd2886c7-0796-4fed-8e69-cb0f4d53ae1f/"
        },
        // MySkill
        {
            img: sertifikatMySkillCSS,
            sertifikat: "Sertifikat MySkill CSS",
            penjelasan: "Certificate of Skill Specialization E-Learning - MySkill Learning Path: Website Development Completed a Full Topic with Specialization in: FRONTEND - CSS March 23, 2024 yang diselenggarakan oleh MySkill E-Learning.",
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-DQ4WDIr2jXa70FUI477S/UWddfZoysfU2JRAf2qjYmVhRtUy2-dv4HLu2Zd5JDxU1YyKba.pdf"
        },
        {
            img: sertifikatMySkillJavaScript,
            sertifikat: "Sertifikat MySkill JavaScript",
            penjelasan: "Certificate of Skill Specialization E-Learning - MySkill Learning Path: Website Development Completed a Full Topic with Specialization in: FRONTEND - JavaScript August 18, 2024 yang diselenggarakan oleh MySkill E-Learning.",
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-pTLX6J38RGSQ4dfEO6yQ/UWddfZoysfU2JRAf2qjYmVhRtUy2-PsfN0OuiRFgPWoayOxy8.pdf"
        },
        // CodingStudio
        {
            img: sertifikatCodingStudio1,
            sertifikat: "Sertifikat Coding Studio FUNDAMENTAL FRONT-END WEB DEVELOPMENT 1",
            penjelasan: "CERTIFICATE OF COMPLETION For completing the course flexy FUNDAMENTAL FRONT-END WEB DEVELOPMENT 1 Completed on February 19, 2024 Diselenggarakan oleh Coding Studio Digital Skill Course.",
            kredesial: "https://member.codingstudio.id/certificate/77EBA40B94-77DFB8E69C-77DFB89A6F"
        },
        {
            img: sertifikatCodingStudio2,
            sertifikat: "Sertifikat Coding Studio FUNDAMENTAL FRONT-END WEB DEVELOPMENT 2",
            penjelasan: "CERTIFICATE OF COMPLETION For completing the course flexy FUNDAMENTAL FRONT-END WEB DEVELOPMENT 2 Completed on March 02, 2024 Diselenggarakan oleh Coding Studio Digital Skill Course.",
            kredesial: "https://member.codingstudio.id/certificate/77EBA40B94-77FDB43C25-77DFB89A6F"
        },
        // Academy Sekolahan
        {
            img: sertifikatAcademySekolahanBootstrap,
            sertifikat: "Sertifikat Academy Sekolahan BOOTSTRAP",
            penjelasan: "Certificate of COMPLETION atas kelulusannya pada kelas Belajar Menggunakan Bootstrap Framework di Academy Sekolahan, Tanggal: 2024-03-09.",
            kredesial: "https://academy.sekolahan.id/verify-certificate/289829"
        },
    ];


    const tampilSertifikat = () => {
        return data.map((item, index) => (
            <div key={index} className="col-md-4">
                <article className="cta">
                    <img className="img-sertifikat" src={item.img} alt="Sertifikat" />
                    <div className="cta__text-column">
                        <h2 className="sertifikat-Judul">{item.sertifikat}</h2>
                        <p>{item.penjelasan}</p>
                        <a href={item.kredesial} target="_blank" rel="noopener noreferrer">
                            <button className="button-54" role="button">Kredensial</button>
                        </a>
                    </div>
                </article>
            </div>
        ));
    }

    return (
        <section className="container-sertifikat" id="sertifikat">
            <h1 className="text-4xl font-bold mb-6 judul-sertifikat">Sertifikat</h1>
            <div className="row">
                {tampilSertifikat()}
            </div>
            <div className="text-center mt-6">
                <span className="text-xl font-semibold ">
                    See full
                </span>
                <a
                    href="https://drive.google.com/drive/folders/1t8jimFZROLVnlWbXQAq7crUQ4AvU7FeE?usp=drive_link"
                    target="_blank"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300"
                >
                    certificate
                </a>
            </div>
        </section>
    );
};
