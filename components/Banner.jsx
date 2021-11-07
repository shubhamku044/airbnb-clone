import Image from 'next/image';

const Banner = () => {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
			<Image
				src="https://links.papareact.com/0fm"
				objectFit="cover"
				layout="fill"
			/>
			<div className="absolute font-medium top-1/2 w-full text-center">
				<p className="text-sm sm:text-lg">
					Not sure where to go? Perfect.
				</p>
				<button className="text-purple-500 font-semibold bg-white px-10 py-4 shadow-md rounded-full my-3 hover:shadow-xl active:scale-90 transition-all duration-300 ease-in-out">
					I'm flexible
				</button>
			</div>
		</div>
	);
};

export default Banner;
