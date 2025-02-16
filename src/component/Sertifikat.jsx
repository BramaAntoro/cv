// dicoding
import sertifikatDicodingJavascript from '../assets/img/sertifikat/dicoding/sertifikat-kompetensi-DiCoding-JAVASCRIPT_page-0001.jpg';
import sertifikatDicodingFrontEndWeb from '../assets/img/sertifikat/dicoding/Belajar-Membuat-Front-End-Web-untuk-Pemula_page-0001.jpg';

// udemy
import sertifikatUdemyBootstrap from '../assets/img/sertifikat/udemy/Sertifikat-Bootstrap-Udemy.jpg';

// myskill
import sertifikatMySkillJavaScript from '../assets/img/sertifikat/myskill/Certificate-JavaScript-MySkill.jpg';
import sertifikatMySkillReactJS from '../assets/img/sertifikat/myskill/Certificate-React.JS-MySkill.jpg';

// academy sekolahan
import sertifikatAcademySekolahanMysql from '../assets/img/sertifikat/academysekolahan/Certificate-Mysql-Sid.jpg'
import sertifikatAcademySekolahanPHP from '../assets/img/sertifikat/academysekolahan/Certificate-Javascript-Pemula-Sampai-Mahir-Sid.jpg'

// coding studio
import sertifikatCodingStudio1 from '../assets/img/sertifikat/codingstudio/Certificate-Fundamental-Front-End-Web-Development-I-Coding-Studio.jpg';
import sertifikatCodingStudio2 from '../assets/img/sertifikat/codingstudio/Certificate-Fundamental-Front-End-Web-Development-II-Coding-Studio.jpg';

// kominfo
import sertifikatKominfo from '../assets/img/sertifikat/kominfo/Sertifikat-partisipasi-Kominfo-Muhammad-Brama-Antoro.jpg';

export const Sertifikat = () => {
    // data sertifikat
    var data = [
        // Dicoding
        {
            img: sertifikatDicodingJavascript,
            sertifikat: "Dicoding JavaScript Certificate",
            penjelasan: "Competency certificate for completing Dicoding's Basic JavaScript Programming class. Valid until December 18, 2027",
            kredesial: "https://www.dicoding.com/certificates/KEXLYRE4RZG2"
        },
        {
            img: sertifikatDicodingFrontEndWeb,
            sertifikat: "Dicoding Front-End Web Development Certificate",
            penjelasan: "This certificate proves my proficiency in front-end web development. Valid until January 11, 2028",
            kredesial: "https://www.dicoding.com/certificates/GRX53LNVKZ0M"
        },
        // Udemy
        {
            img: sertifikatUdemyBootstrap,
            sertifikat: "Udemy Bootstrap CSS Certificate: Beginner to Advanced",
            penjelasan: "Certificate of completion for Bootstrap CSS: Beginner to Advanced, December 29, 2024. Instructor: Programmer Zaman Now",
            kredesial: "https://www.udemy.com/certificate/UC-fd2886c7-0796-4fed-8e69-cb0f4d53ae1f/"
        },
        // MySkill
        {
            img: sertifikatMySkillJavaScript,
            sertifikat: "MySkill JavaScript Certificate",
            penjelasan: "Certificate of JavaScript skill specialization in MySkill, August 18, 2024",
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-sTLaN1dknfdCpAbUm5O2/UWddfZoysfU2JRAf2qjYmVhRtUy2-cYr7yu1y48WG4z5wksvJ.pdf"
        },
        {
            img: sertifikatMySkillReactJS,
            sertifikat: "MySkill React.JS Certificate",
            penjelasan: "Certificate of React.JS skill specialization in MySkill, January 28, 2025",
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-sTLaN1dknfdCpAbUm5O2/UWddfZoysfU2JRAf2qjYmVhRtUy2-cYr7yu1y48WG4z5wksvJ.pdf"
        },  
        // Academy Sekolahan
        {
            img: sertifikatAcademySekolahanMysql,
            sertifikat: "Academy Sekolahan MySQL Certificate",
            penjelasan: "Certificate of completion for MySQL at Academy Sekolahan, December 26, 2024",
            kredesial: "https://academy.sekolahan.id/verify-certificate/362775"
        },
        {
            img: sertifikatAcademySekolahanPHP,
            sertifikat: "Academy Sekolahan MySQL Certificate",
            penjelasan: "Certificate of completion for PHP at Academy Sekolahan, February 16, 2025",
            kredesial: "https://academy.sekolahan.id/verify-certificate/464017"
        },
        // CodingStudio
        {
            img: sertifikatCodingStudio1,
            sertifikat: "Coding Studio Fundamental Front-End Web Development 1 Certificate",
            penjelasan: "Certificate of completion for Flexy Fundamental Front-End Web Development I, June 19, 2024",
            kredesial: "https://member.codingstudio.id/certificate/77EBA40B94-77DFB8E69C-77DFB89A6F"
        },
        {
            img: sertifikatCodingStudio2,
            sertifikat: "Coding Studio Fundamental Front-End Web Development 2 Certificate",
            penjelasan: "Certificate of completion for Flexy Fundamental Front-End Web Development II, June 19, 2024",
            kredesial: "https://member.codingstudio.id/certificate/77EBA40B94-77FDB43C25-77DFB89A6F"
        },
        // Kominfo
        {
            img: sertifikatKominfo,
            sertifikat: "Kominfo Participation Certificate: Makin Cakap Digital 2022",
            penjelasan: "Participation certificate in the Makin Cakap Digital 2022 event - West Java Education - Utilizing the Internet to Spread Positive Content. Organized by Kominfo, Siberkreasi, and Yayasan Pendidikan Dasar dan Menengah Pasundan.",
            kredesial: "https://drive.google.com/file/d/12d45gfs93iAdY6Z0ISgnuc7GtkuSfRac/view?usp=sharing"
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
