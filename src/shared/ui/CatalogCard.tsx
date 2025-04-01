import React from 'react';

interface CatalogCardProps {
	name: string;
	duration: string;
	price: string;
	BgPhoto: string;
	onClick?: () => void;
}

export const CatalogCard: React.FC<CatalogCardProps> = ({
	name,
	duration,
	price,
	BgPhoto,
	onClick,
}) => {
	return (
		<div
			className="w-[568px] h-[233px] rounded-img mr-[32px] mb-[32px] relative group cursor-pointer overflow-hidden max-lg:w-[487px] max-lg:h-[200px] max-md:w-[438px] max-md:h-[180px] max-small:w-[calc(100%-40px)] max-small:h-[320px] max-small:mx-5 max-small:mb-[24px]"
			onClick={onClick}
		>
			<img
				src={BgPhoto}
				alt={name}
				className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
			<div className="absolute bottom-0 left-0 p-6 text-white max-small:p-5">
				<h3 className="font-Prosto text-[20px] mb-3 max-lg:text-[18px] max-md:text-[16px] max-small:text-[24px] max-small:text-center">
					{name}
				</h3>
				<div className="font-Inter text-[14px] opacity-80 max-lg:text-[13px] max-md:text-[12px] max-small:text-[16px] max-small:text-center">
					{duration && <p>{duration}</p>}
					{price && <p className="mt-2">От {price}</p>}
				</div>
			</div>
		</div>
	);
};
