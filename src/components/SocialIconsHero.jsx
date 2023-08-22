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
		<div className='flex justify-center text-center items-center mt-10 gap-10 md:mt-20 md:gap-40'>
			<a
				href=''
				className='flex flex-col items-center text-white text-sm md:text-lg font-semibold'>
				<FaFacebookSquare
					size={windowWidth < 720 ? 30 : 40}
					fill='#1674EA'
				/>
				<span className='ml-1'>Facebook</span>
			</a>

			<a
				href=''
				className='flex flex-col items-center text-white text-sm md:text-lg font-semibold ml-5 md:ml-7'>
				<IgIcon width={windowWidth < 720 ? 30 : 40} />{" "}
				<span className='ml-1'>Instagram</span>
			</a>

			<a
				href=''
				className='flex flex-col items-center text-white text-sm md:text-lg font-semibold'>
				<MlIcon width={windowWidth < 720 ? 50 : 70} />
				<span className='ml-1 mt-[-39px]  md:mt-[-30px]'>Mercadolibre</span>
			</a>
		</div>
	);
};
export default SocialIconsHero;
