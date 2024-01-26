import { Footer } from 'flowbite-react';
import { Link } from 'react-scroll';
import logo from '../assets/img/logo.png';
export const MiFooter = () => {
	return (
		<Footer container className="bg-dark my-5 w-full mx-auto lg:w-[980px] py-1">
			<div className="w-full text-center">
				<div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
					<Footer.Brand href="https://flowbite.com" src={logo} alt="Logo" />
					<Footer.LinkGroup>
						<Link
							to="hero"
							className=" text-white/45 hover:underline mx-1 cursor-pointer"
							smooth={true}
							duration={500}
						>
							Inicio
						</Link>
						<Link
							to="projects"
							className="text-white/45 hover:underline mx-1 cursor-pointer"
							smooth={true}
							duration={500}
						>
							Proyectos
						</Link>
						<Link
							to="experience"
							className="text-white/45 hover:underline mx-1 cursor-pointer"
							smooth={true}
							duration={500}
						>
							Experiencia
						</Link>
						<Link
							to="skills"
							className="text-white/45 hover:underline mx-1 cursor-pointer"
							smooth={true}
							duration={500}
						>
							Habilidades
						</Link>
					</Footer.LinkGroup>
				</div>
				<Footer.Divider />
				<div className="text-gray-200/60 pb-5">Martin 2024</div>
			</div>
		</Footer>
	);
};
