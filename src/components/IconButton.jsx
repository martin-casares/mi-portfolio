export const IconButton = ({ link, icon, text, color }) => {
	return (
		<div
			className="rounded-full border border-white/10  py-1 px-2 md:py-1 md:px-4 text-xs lg:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition "
			style={{ backgroundColor: color }}
		>
			<a href={link} className="flex justify-center items-center gap-x-2 ">
				{icon} {text}
			</a>
		</div>
	);
};
