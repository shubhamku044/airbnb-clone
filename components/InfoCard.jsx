import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';

const InfoCard = ({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}) => {
	return (
		<div className="flex cursor-pointer space-x-8 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.008] transition-all duration-300 ease-out">
			<div className="h-28 w-44 md:h-52 md:w-80 relative flex-shrink-0">
				<Image
					src={img}
					layout="fill"
					objectFit="cover"
					className="rounded-xl md:rounded-2xl"
				/>
			</div>
			<div className="flex-1 flex flex-col flex-grow">
				<div className="flex flex-row justify-between">
					<p>{location}</p>
					<HeartIcon className="h-8 cursor-pointer" />
				</div>
				<h4 className="text-xl">{title}</h4>
				<div className="border-b w-10 pt-2"></div>
				<p className="pt-2 text-sm text-gray-500 flex-grow">
					{description}
				</p>
				<div className="flex justify-between items-end">
					<p className="flex items-center">
						<StarIcon className="h-5 text-red-500" />
						{star}
					</p>

					<div>
						<p className="text-lg lg:text-2xl font-semibold pb-2">
							{price}
						</p>
						<p className="text-right font-extralight">{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
