import { useState } from "react";
import { VscFoldDown } from "react-icons/vsc";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
	const [showCursor, setShowCursor] = useState(true);

	const handleDone = () => {
		setShowCursor(false);
	};

	return (
		<div
			className='bg-hero-img bg-cover bg-no-repeat md:bg-top md:bg-fixed h-screen relative pt-[200px] sm:pt-[180px]'
			id='inicio'>
			<div className='mx-auto md:max-w-screen-lg px-12 md:px-8'>
				<div className='flex flex-col justify-center lg:text-left xl:w-9/12 text-center sm:text-left'>
					<p className=' mb-4 font-semibold text-gray-400 md:mb-3 text-lg xl:text-2xl'>
						Le damos la bienvenida a
					</p>
					<h1 className='mb-3 font-montserrat font-extrabold tracking-widest text-slate-800 text-5xl md:text-7xl'>
						MODIKRA
					</h1>
					<div className='flex justify-center sm:justify-start text-center text-2xl space-x-1'>
						<span className='font-montserrat font-bold text-orange-500 md:text-4xl'>
							Muebles
							<Typewriter
								words={[" en serie", " a medida", " para tu hogar!"]}
								cursor={showCursor}
								cursorBlinking
								cursorStyle={showCursor && "_"}
								loop={3}
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
								onLoopDone={handleDone}
							/>
						</span>
					</div>
				</div>
			</div>
			<div className='bottom-3 left-1/2 transform -translate-x-2 absolute'>
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
