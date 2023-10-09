import Button from "./Button";

import { Link } from "react-router-dom";
import MueblesMedida from "./MueblesMedida";
import { useDataContext } from "../context/UserContext";
import Spinner from "./Spinner";

const Gallery = () => {
	const { dataGallery } = useDataContext();
	const { title, heading, cards } = dataGallery?.gallery || {};

	if (!dataGallery) return <Spinner />;

	return (
		<section
			className='py-4 sm:py-8'
			id='muebles'>|
			<div className='max-w-2xl md:container mx-auto px-4 md:px-8 flex flex-col justify-center items-center'>
				<h2 className='text-2xl font-bold text-[#001A49] lg:text-5xl text-center mb-4 sm:mb-8'>
					{title}
				</h2>
				<p className='max-w-2xl text-center mt-2 text-base sm:text-xl text-gray-500 mb-10'>
					{heading}
				</p>

				<Button
					text={"Ver Más"}
					url={"catalogo"}
					color={"orange"}
					span={
						"hidden md:block md:absolute md:inset-x-0 md:top-0 md:h-[2px] md:bg-orange-500 transition-all md:group-hover:h-full md:group-active:bg-orange-500"
					}
				/>

				<div className='grid grid-cols-6 gap-2 md:grid-cols-8 md:gap-6 xl:gap-8 mt-8 items-center ml-2 sm:ml-0'>
					{cards.map((card, index) =>
						
							<Link
								key={index}
								to={`/catalogo/${card.url}`}
								className={`group relative flex h-48 items-end overflow-hidden rounded-lg col-span-3 bg-gray-100 shadow-lg sm:col-span-4 md:h-80  transition-all duration-500 hover:underline underline-offset-8 text-white`}>
								<img
									src={card.img}
									loading='lazy'
									alt='Photo by Magicle'
									className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
								/>

								<div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

								<span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
									{card.title}
								</span>
							</Link>
						
					)}
					<MueblesMedida />
				</div>
			</div>
		</section>
	);
};

export default Gallery;
