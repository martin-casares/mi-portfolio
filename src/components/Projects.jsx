import React from 'react';
import { LuCode2 } from 'react-icons/lu';

import { IconButton } from './IconButton';

export const Projects = ({ data }) => {
	return (
		<div className="w-full mx-auto lg:w-[740px] py-10">
			<h2 className="flex gap-x-2 items-center text-2xl font-semibold mb-10">
				<LuCode2 className="size-7 " />
				Projectos
			</h2>

			{data.map(({ imageUrl, title, body, tags }, index) => (
				<div key={index} className="mb-10 md:w-[650px] ">
					<div className="bg-cyan-900/15 border border-white/20 rounded-xl shadow-md  flex-col ">
						<h3 className="text-2xl font-semibold text-white m-3">{title}</h3>
						<p className="text-lg m-4 text-pretty">{body}</p>
						<span className="ml-4 text-stone-500 font-semibold">Tecnologias</span>

						<ul className="flex gap-2 py-4 ml-4 ">
							{tags.map((tag, index) => (
								<li key={index}>
									<IconButton text={tag.name} icon={tag.icon} color={'#3c8a9d'} />
								</li>
							))}
						</ul>
						<img
							className="rounded shadow-2xl shadow-white/20 md:w-[700px]  object-cover"
							src={imageUrl}
							alt={`Captura de pantalla del proyecto ${title}`}
						/>
					</div>
				</div>
			))}
		</div>
	);
};
