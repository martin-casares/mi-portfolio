import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFileLines } from 'react-icons/fa6';
import { IconButton } from './IconButton';
import logo from '../assets/img/logo.png';

export const Hero = () => {
	return (
		<div className="py-24 mx-auto md:flex md:justify-between  md:items-center lg:w-[740px]">
			<div className="gap-3">
				<p className="text-white/80 text-[18px] md:text-4xl lg:text-3xl font-bold ">
					Hello, I john
				</p>
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-500/80 pb-8 ">
					Web developer <br />
					Full stack
				</h1>
				<nav className="flex gap-4 mt-8 flex-wrap">
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
				<div className="w-[200px]  mt-8 md:mt-14 text-white font-bold py-4">
					<IconButton
						link={''}
						icon={<FaFileLines size={16} />}
						text={'Descargar CV'}
						color={'#0c7c8f'}
					/>{' '}
				</div>
			</div>
			<div>
				<img src={logo} alt="" className="w-[350px] lg:w-[400px]" />
			</div>
		</div>
	);
};
