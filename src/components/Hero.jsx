import NavBar from "./NavBar";
import { VscFoldDown } from "react-icons/vsc";
import SocialIconsHero from "./SocialIconsHero";

const Hero = () => {
	return (
		<>
			<section className='bg-hero-img bg-cover bg-center bg-no-repeat'>
				<NavBar />
				<div className='relative mx-auto max-w-screen-xl px-4 py-10 justify-center lg:h-screen lg:items-center lg:px-8'>
					<div className='flex items-center justify-center h-full'>
						{" "}
						{/* Añadido */}
						<div className='lg:max-w-2xl flex flex-col justify-between mx-auto text-center mt-[8rem] '>
							<h1 className='text-5xl md:text-8xl text-center font-extrabold sm:text-5xl text-white'>
								MODIKRA{" "}
								<strong className='block font-extrabold  text-[#716af7] text-xl md:text-3xl '>
									Muebles para tu hogar.
								</strong>
							</h1>

							{/* Contenedor de iconos y enlaces */}
							<SocialIconsHero />

							{/* Contenedor del ícono de flecha */}
							<div className='flex justify-center mt-20'>
								<a href=''>
									<VscFoldDown
										className='animate-bounce'
										size={30}
										strokeWidth={1.2}
										color='white'
									/>
								</a>
							</div>
						</div>
					</div>{" "}
					{/* Fin de la modificación */}
				</div>
			</section>
		</>
	);
};

export default Hero;