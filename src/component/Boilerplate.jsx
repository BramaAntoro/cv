import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

export function Boilerplate() {
  const githubUrl = import.meta.env.VITE_GITHUB_URL;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL;
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL;
  const youtubeUrl = import.meta.env.VITE_YOUTUBE_URL;

  const currentYear = new Date().getFullYear();

  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Contact" />
            <Footer.LinkGroup col>
              <Footer.Link
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Footer.Link>
              <Footer.Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Footer.Link>
              <Footer.Link
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </Footer.Link>
              <Footer.Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Footer.Link>
              <Footer.Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Brama™" year={currentYear} />

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={BsFacebook}
            />
            <Footer.Icon
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={BsInstagram}
            />
            <Footer.Icon
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={BsYoutube}
            />
            <Footer.Icon
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={BsGithub}
            />
            <Footer.Icon
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
