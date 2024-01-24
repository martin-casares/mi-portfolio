import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFileLines } from 'react-icons/fa6';
import { IconButton } from './IconButton';
import logo from '../assets/img/logo.png';
import curriculum from '../assets/cv-martin-casares.pdf';

export const Hero = () => {
	return (
		<div className="py-20 mx-auto md:flex md:justify-between  md:items-center lg:w-[940px] ">
			<div className="gap-5">
				<p className="text-white/80 text-[18px] md:text-4xl lg:text-3xl font-bold ">
					Hello, I john
				</p>
				<h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-cyan-500/80 pb-8 ">
					Web developer <br />
					Full stack
				</h1>
				<p>
					<span className="text-yellow-400/90">
						Culpa enim libero laudantium aperiam nobis.
					</span>
					<br />
					<span className="text-cyan-300">
						sit amet consectetur adipisicing elit. Nam distinctio atque
					</span>{' '}
					<br />
					<span className="text-emerald-50">officia at consequuntur</span>
				</p>

				<div className="w-[200px] mt-8 md:mt-14 text-white font-bold py-4">
					{/* 		<IconButton
						link={''}
						icon={<FaFileLines size={16} />}
						text={'Descargar CV'}
						color={'#0c7c8f'}
					/> */}
					<a
						href={curriculum}
						target="_blank"
						className="bg-cyan-500/80 rounded-full flex items-center gap-2 p-2 hover:scale-x-110 "
					>
						<FaFileLines className="ml-5" />
						Descargar Cv
					</a>
				</div>
				<nav className="flex gap-4 mt-8 flex-wrap my-16">
					<IconButton
						link={'https://linkedin.com/in/martin-casares'}
						icon={<FaLinkedin size={19} />}
						text={'Linkedin'}
					/>
					<IconButton
						link={'https://github.com/martin-casares'}
						icon={<FaGithub size={19} />}
						text={'Github'}
					/>
					<IconButton
						link={''}
						icon={<MdEmail size={19} />}
						text={'casaresrm@gmail.com'}
					/>
				</nav>
			</div>
			<div>
				<img src={logo} alt="" className="w-[370px] lg:w-[600px]" />
			</div>
		</div>
	);
};
