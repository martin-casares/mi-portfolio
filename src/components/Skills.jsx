import React from 'react';
import { GiSkills } from 'react-icons/gi';
import logo from '../assets/img/logo.png';

export const Skills = () => {
	return (
		<div className="w-full mx-auto lg:w-[740px] py-10">
			<h2 className="flex gap-x-2 items-center text-2xl font-semibold mb-10">
				<GiSkills className="size-5 " />
				Habilidades
			</h2>
			<div className="flex flex-wrap ">
				<div className=" mx-auto ">
					<div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg ">
						<img src={logo} alt="" className="sm:[200px] w-[300px] lg:w-[200px] " />
					</div>
				</div>
				<div className="mx-auto">
					<div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
						<img src={logo} alt="" className="w-[300px] lg:w-[200px]" />
					</div>
				</div>
				<div className="mx-auto">
					<div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg ">
						<img src={logo} alt="" className="w-[300px] lg:w-[200px]" />
					</div>
				</div>
				<div className="mx-auto">
					<div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
						<img src={logo} alt="" className="w-[300px] lg:w-[200px]" />
					</div>
				</div>
				<div className="mx-auto">
					<div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
						<img src={logo} alt="" className="w-[300px] lg:w-[200px]" />
					</div>
				</div>
				<div className="mx-auto">
					<div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
						<img src={logo} alt="" className="w-[300px] lg:w-[200px]" />
					</div>
				</div>
			</div>
		</div>
	);
};
