import { VscFoldDown } from "react-icons/vsc";
import { Link } from "react-scroll";

const Hero = () => {
	return (
		<div
			className='bg-hero-img bg-cover bg-no-repeat md:bg-top md:bg-fixed h-screen relative pt-[150px] sm:pt-[180px]'
			id='inicio'
			>
			<div className='mx-auto max-w-screen-lg px-12 md:px-8'>
				<section className='flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 '>
					<div className='flex flex-col justify-center sm:text-center lg:text-left xl:w-9/12'>
						<p className=' mr-3 sm:mr-0 sm:text-left text-center mb-4 font-semibold text-gray-400 md:mb-3 md:text-lg xl:text-2xl'>
							Le damos la bienvenida a
						</p>
						<h1 className='mb-3 text-center sm:text-left text-4xl font-montserrat font-extrabold  tracking-widest  text-slate-800 sm:text-5xl md:text-7xl block'>
							MODIKRA
						</h1>
						<span className='text-center sm:text-left text-xl font-montserrat font-bold text-orange-500 sm:text-xl md:text-4xl'>
							Muebles para tu hogar.
						</span>
					</div>
				</section>
			</div>
			<div className='bottom-3 left-[50%] -translate-x-2 absolute'>
				<Link
					to='nosotros'
					spy={true}
					smooth={true}
					offset={20}
					duration={700}>
					<VscFoldDown
						className='animate-bounce opacity-70 cursor-pointer hover:opacity-100 text-4xl hover:text-[2.45rem] transition-all duration-500'
						strokeWidth={1}
						color='#FF5A1F'
					/>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
