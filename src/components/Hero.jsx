import { VscFoldDown } from "react-icons/vsc";

const Hero = () => {
	return (
		<div class='bg-hero-img bg-cover bg-no-repeat  md:bg-top  md:bg-fixed py-30 h-screen relative'>
			<div class='mx-auto max-w-screen-lg px-12 md:px-8'>
				<section class='flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 py-40'>
					<div class='flex flex-col justify-center sm:text-center  lg:text-left xl:w-9/12'>
						<p class='mb-4 font-semibold text-gray-400 md:mb-1 md:text-lg xl:text-2xl'>
							Le damos la bienvenida a
						</p>

						<h1 class='md:mb-12'>
							<span className='text-4xl lg:text-7xl font-montserrat font-extrabold  tracking-widest text-slate-800 sm:text-5xl md:text-6xl block py-2'>
								MODIKRA
							</span>{" "}
							<span className=' text-xl font-montserrat text-orange-500 sm:text-xl md:text-4xl'>
								Muebles para tu hogar.
							</span>
						</h1>
					</div>
				</section>
			</div>
			<div className=' bottom-3 left-[50%] -translate-x-2 absolute'>
				<a href=''>
					<VscFoldDown
						className='animate-bounce  opacity-70'
						size={40}
						strokeWidth={1}
						color='#FF5A1F'
					/>
				</a>
			</div>
		</div>
	);
};
export default Hero;

{
	/* <div class='flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start '>
							<a
								href='#'
								class='inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base'>
								Start now
							</a>

							<a
								href='#'
								class='inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'>
								Take tour
							</a>
						</div> */
}
