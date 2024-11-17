import { Dropdown, Navbar } from "flowbite-react";

export function Header() {
  return (
    <Navbar fluid className="dark:bg-white shadow-[0_0_0_4px_rgba(0,0,0,0.25)] fixed top-0 left-0 right-0 z-10 ">
      <Navbar.Brand href="#" className="ml-12">
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-black">Brama</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-12">
        <Navbar.Link href="#home">
          <h1 className="text-gray hover:text-black">Home</h1>
        </Navbar.Link>
        <Navbar.Link>
          <h1 className="text-gray-400 hover:text-black">
            <Dropdown inline label="About">
              <Dropdown.Item href="#skills">Skill</Dropdown.Item>
              <Dropdown.Item href="#Language">Language</Dropdown.Item>
              <Dropdown.Item href="#academic">Academic</Dropdown.Item>
            </Dropdown>
          </h1>
        </Navbar.Link>
        <Navbar.Link href="#work">
          <h1 className="text-gray hover:text-black">Work</h1>
        </Navbar.Link>
        <Navbar.Link href="#">
          <h1 className="text-gray hover:text-black" >Project</h1>
        </Navbar.Link>
        <Navbar.Link href="#sertifikat">
          <h1 className="text-gray hover:text-black">Sertifikat</h1>
        </Navbar.Link>
        <Navbar.Link href="#contact">
          <h1 className="text-gray hover:text-black">Contact</h1>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
