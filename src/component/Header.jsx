import { Navbar } from "flowbite-react";
import logo from "../assets/img/logo_brama.png";


export function Header() {
  return (
    <Navbar
      fluid
      className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 right-0 z-50 py-4"
    >
      <Navbar.Brand href="#" className="lg:ml-20">
        <span className="self-center whitespace-nowrap text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          <img
            src={logo}
            alt="logo brama"
            className="h-20 w-20"
          />  
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="lg:mr-20">
        <Navbar.Link
          href="#home"
          className="text-lg font-medium hover:text-blue-600 transition-colors"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#project"
          className="text-lg font-medium hover:text-blue-600 transition-colors"
        >
          Projects
        </Navbar.Link>
        <Navbar.Link
          href="#skills"
          className="text-lg font-medium hover:text-blue-600 transition-colors"
        >
          Skills
        </Navbar.Link>
        <Navbar.Link
          href="#work"
          className="text-lg font-medium hover:text-blue-600 transition-colors"
        >
          Experience
        </Navbar.Link>
        <Navbar.Link
          href="#academic"
          className="text-lg font-medium hover:text-blue-600 transition-colors"
        >
          Education
        </Navbar.Link>
        <Navbar.Link
          href="#sertifikat"
          className="text-lg font-medium hover:text-blue-600 transition-colors"
        >
          Certificates
        </Navbar.Link>
        <Navbar.Link
          href="#contact"
          className="text-lg font-medium hover:text-blue-600 transition-colors"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
