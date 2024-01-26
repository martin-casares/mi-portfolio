import { Navbar } from 'flowbite-react';
import { Link } from 'react-scroll';
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
				<Link
					to="hero"
					className=" text-white hover:scale-110 hover:text-cyan-500 font-semibold cursor-pointer"
					smooth={true}
					duration={500}
				>
					Inicio
				</Link>
				<Link
					to="projects"
					className="text-white hover:text-cyan-500 hover:scale-110 font-semibold cursor-pointer"
					smooth={true}
					duration={500}
				>
					Proyectos
				</Link>
				<Link
					to="experience"
					className="text-white hover:text-cyan-500 hover:scale-110 font-semibold cursor-pointer"
					smooth={true}
					duration={500}
				>
					Experiencia
				</Link>
				<Link
					to="skills"
					className="text-white hover:text-cyan-500 hover:scale-110 font-semibold cursor-pointer"
					smooth={true}
					duration={500}
				>
					Habilidades
				</Link>
				<Link
					to="contact"
					className="text-white hover:text-cyan-500 hover:scale-110 font-semibold cursor-pointer"
					smooth={true}
					duration={500}
				>
					Contacto
				</Link>
			</Navbar.Collapse>
		</Navbar>
	);
};
