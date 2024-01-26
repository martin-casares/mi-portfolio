import React from 'react';
import { GiSkills } from 'react-icons/gi';

export const Skills = ({ data }) => {
	return (
		<div id="skills" className="w-full mx-auto lg:w-[740px] py-10">
			<h2 className="flex gap-x-2 items-center text-2xl font-semibold mb-10">
				<GiSkills className="size-5 " />
				Habilidades
			</h2>

			<div className="flex flex-wrap justify-center mr-4">
				{data.map((skill, index) => (
					<div
						key={index}
						className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg m-1 bg-gray-800/20 mr-2"
					>
						<img
							src={skill.img}
							alt="title"
							className="w-[90px] md:w-[200px] lg:w-[150px]  object-cover h-50 w-50"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
