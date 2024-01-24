import { Navbar } from 'flowbite-react';
import logo from '../assets/img/logo.png';

export const NavbarFlow = () => {
	return (
		<Navbar className="bg-dark flex justify-between items-center py-5 xl:w-[1120px] mx-auto">
			<Navbar.Brand>
				<img src={logo} className="mr-1 h-9 sm:h-9" alt="Flowbite React Logo" />
				<span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
					Martín Cásares
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<a
					href="#top"
					className=" text-white hover:scale-110 hover:text-cyan-500 font-semibold "
				>
					Inicio
				</a>
				<a
					href="#projects"
					className="text-white hover:text-cyan-500 hover:scale-110 font-semibold "
				>
					Proyectos
				</a>
				<a
					href="#experience"
					className="text-white hover:text-cyan-500 hover:scale-110 font-semibold "
				>
					Experiencia
				</a>
				<a
					href="#about"
					className="text-white hover:text-cyan-500 hover:scale-110 font-semibold"
				>
					Sobre mi
				</a>
				<a
					href="#contact"
					className="text-white hover:text-cyan-500 hover:scale-110 font-semibold"
				>
					Contacto
				</a>
			</Navbar.Collapse>
		</Navbar>
	);
};
