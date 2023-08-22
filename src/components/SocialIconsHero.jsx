import { useEffect, useState } from "react";
import IgIcon from "../assets/svg/IgIcon2";
import MlIcon from "../assets/svg/MlIcon2";
import { FaFacebookSquare } from "react-icons/fa";

const SocialIconsHero = () => {
	const [windowWidth, setWindowWidth] = useState(); //estado de el tamaño de la ventana

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className='flex justify-center text-center items-center  gap-10 mt-9 md:mt-20 md:gap-28 ml-2 md:ml-1'>
			<a
				href=''
				className='flex flex-col items-center text-white text-sm md:text-lg font-semibold  hover:scale-110 transition-all duration-500'>
				<FaFacebookSquare
					size={40}
					fill='#1674EA'
				/>
				<span className='ml-1'>Facebook</span>
			</a>

			<a
				href=''
				className='flex flex-col items-center justify-center text-white text-sm md:text-lg font-semibold ml-5 md:ml-10 hover:scale-110 transition-all duration-500'>
				<IgIcon  width={40} />{" "}
				<span className=''>Instagram</span>
			</a>

			<a
				href=''
				className='flex flex-col items-center text-white text-sm md:text-lg font-semibold hover:scale-110 transition-all duration-500'>
				<MlIcon width={60} />
				<span className='ml-1 mt-[-39px]  md:mt-[-30px]'>Mercadolibre</span>
			</a>
		</div>
	);
};
export default SocialIconsHero;
