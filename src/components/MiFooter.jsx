import { Footer } from "flowbite-react";
import logo from "../assets/img/logo.png";
export const MiFooter = () => {
  return (
    <Footer container className="bg-dark my-5 w-full mx-auto lg:w-[980px] py-1">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand href="https://flowbite.com" src={logo} alt="Logo" />
          <Footer.LinkGroup>
            <Footer.Link href="#">Sobre mi</Footer.Link>
            <Footer.Link href="#">Proyectos</Footer.Link>
            <Footer.Link href="#">Experiencia</Footer.Link>
            <Footer.Link href="#">Contacto</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="text-gray-200/60">Martin 2024</div>
      </div>
    </Footer>
  );
};
