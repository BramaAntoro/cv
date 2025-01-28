// dicoding
import sertifikatDicodingJavascript from '../assets/img/sertifikat/sertifikat-kompetensi-DiCoding-JAVASCRIPT_page-0001.jpg';
import sertifikatDicodingFrontEndWeb from '../assets/img/sertifikat/Belajar-Membuat-Front-End-Web-untuk-Pemula_page-0001.jpg';

// udemy
import sertifikatUdemyBootstrap from '../assets/img/sertifikat/Sertifikat-Bootstrap-Udemy.jpg';

// myskill
import sertifikatMySkillJavaScript from '../assets/img/sertifikat/Certificate-JavaScript-MySkill.jpg';
import sertifikatMySkillReactJS from '../assets/img/sertifikat/Certificate-React.JS-MySkill.jpg';

// coding studio
import sertifikatCodingStudio1 from '../assets/img/sertifikat/Certificate-Fundamental-Front-End-Web-Development-I-Coding-Studio.jpg';
import sertifikatCodingStudio2 from '../assets/img/sertifikat/Certificate-Fundamental-Front-End-Web-Development-II-Coding-Studio.jpg';

// kominfo
import sertifikatKominfo from '../assets/img/sertifikat/Sertifikat-partisipasi-Kominfo-Muhammad-Brama-Antoro.jpg';

export const Sertifikat = () => {
    // data sertifikat
    var data = [
        // dicoding
        {
            img: sertifikatDicodingJavascript,
            sertifikat: "Sertifikat DiCoding Javascript",
            penjelasan: "Sertifikat kompetensi kelulusan dicoding pada kelas Belajar Dasar Pemograman JavaScript, Berlaku hingga tanggal 18 Desember 2027",
            kredesial: "https://www.dicoding.com/certificates/KEXLYRE4RZG2"
        },
        {
            img: sertifikatDicodingFrontEndWeb,
            sertifikat: "Sertifikat DiCoding Membuat Front End web",
            penjelasan: "certificate ini membuktikan penguasaan saya terhadap pembuatan Fron-end web. Berlaku hingga 11 Januari 2028",
            kredesial: "https://www.dicoding.com/certificates/GRX53LNVKZ0M"
        },
        // Udemy
        {
            img: sertifikatUdemyBootstrap,
            sertifikat: "Sertifikat Udemy Bootstrap CSS : Pemula sampai Mahir",
            penjelasan: "Sertifikat penyelesaian Bootstrap CSS : Pemula sampai Mahir 29 Des 2024, instruktur Programmer Zaman Now",
            kredesial: "https://www.udemy.com/certificate/UC-fd2886c7-0796-4fed-8e69-cb0f4d53ae1f/"
        },
        // MySkill
        {
            img: sertifikatMySkillJavaScript,
            sertifikat: "Sertifikat MySkill JavaScript",
            penjelasan: "Certificate skill specialization javascript in myskill, 18 Agustus 2024",
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-sTLaN1dknfdCpAbUm5O2/UWddfZoysfU2JRAf2qjYmVhRtUy2-cYr7yu1y48WG4z5wksvJ.pdf"
        },
        {
            img: sertifikatMySkillReactJS,
            sertifikat: "Sertifikat MySkill Reac.JS",
            penjelasan: "Certificate skill specialization React.JS in myskill, 28 Januari 2025",
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-pTLX6J38RGSQ4dfEO6yQ/UWddfZoysfU2JRAf2qjYmVhRtUy2-PsfN0OuiRFgPWoayOxy8.pdf"
        },
        // CodingStudio
        {
            img: sertifikatCodingStudio1,
            sertifikat: "Sertifikat Coding Studio FUNDAMENTAL FRONT-END WEB DEVELOPMENT 1",
            penjelasan: "certificate completion course flexy Fundamental Front-End Web Development I, 19 JUNI 2024",
            kredesial: "https://member.codingstudio.id/certificate/77EBA40B94-77DFB8E69C-77DFB89A6F"
        },
        {
            img: sertifikatCodingStudio2,
            sertifikat: "Sertifikat Coding Studio FUNDAMENTAL FRONT-END WEB DEVELOPMENT 2",
            penjelasan: "certificate completion course flexy Fundamental Front-End Web Development II, 19 JUNI 2024",
            kredesial: "https://member.codingstudio.id/certificate/77EBA40B94-77FDB43C25-77DFB89A6F"
        },
        // kominfo
        {
            img: sertifikatKominfo,
            sertifikat: "sertifikat partisipasi Makin Cakap Digital 2022",
            penjelasan: "Sertifikat partisipasi dalam acara Makin Cakap Digital 2022 - Pendidikan Jawa Barat - Pemanfaatan Internet Untuk Menyebarkan Konten Positif. Bertema Pemanfaatan Internet Untuk Menyebarkan Konten Positif. Yang diselenggarakan oleh Kominfo, Siberkreasi, Yayasan Pendidikan Dasar dan Menengah Pasundan.",
            kredesial: "https://drive.google.com/file/d/1464RpXwsbZhNnCTGu-jIPPGzRPrqbH3r/view?usp=drive_link"
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
