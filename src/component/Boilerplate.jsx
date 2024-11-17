import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";

export function Boilerplate() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">         
          <div>
            <Footer.Title title="Contact" />
            <Footer.LinkGroup col>
              <Footer.Link href="https://www.facebook.com/brama.antoro" target="_blank" >Facebook</Footer.Link>
              <Footer.Link href="https://www.instagram.com/bramaantoro" target="_blank">Instagram</Footer.Link>
              <Footer.Link href="https://www.youtube.com/@Brama2689" target="_blank">Youtube</Footer.Link>
              <Footer.Link href="https://github.com/BramaAntoro/" target="_blank">Github</Footer.Link>
              <Footer.Link href="www.linkedin.com/in/brama-antoro-11b11a29a" target="_blank">LinkedIn</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Brama™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/brama.antoro" target="_blank" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/bramaantoro" target="_blank" icon={BsInstagram} />
            <Footer.Icon href="https://www.youtube.com/@Brama2689" target="_blank" icon={BsYoutube} />
            <Footer.Icon href="https://github.com/BramaAntoro/" target="_blanxk" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com/in/brama-antoro-11b11a29a" target="_blank" rel="noopener noreferrer" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
