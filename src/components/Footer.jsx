import BlackLogo from "../assets/svg/BlackLogo";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
const Footer = () => {
	return (
		<footer
			className='bg-gray-900'
			id='footer'>
			<div className='max-w-[85rem] p-5 sm:px-6 lg:px-8 lg:pt-10 mx-auto '>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-3 md:space-y-7'>
					{/* Logo Column */}
					<div className='col-span-2 md:w-1/4 flex flex-col items-center mb-5 md:mb-0'>
						<BlackLogo fill={"#FFFF"} />
						<p className='text-white font-montserrat'>
							Muebles en serie y a medida
						</p>
					</div>

					{/* Links Columns */}
					<div className='col-span-2 flex justify-evenly space-x-10  text-sm sm:text-base'>
						<div className=''>
							<h4 className='font-semibold  text-gray-100 text-center'>
								Home Page
							</h4>

							<div className='mt-3 grid grid-cols-2 gap-x-10 md:gap-x-16'>
								{[
									{ title: "Inicio", link: "inicio" },
									{ title: "Nosotros", link: "nosotros" },
									{ title: "Muebles", link: "muebles" },
									{ title: "Preguntas", link: "preguntas" },
									{ title: "Contacto", link: "contacto" },
									{ title: "Contacto", link: "contacto" },
								].map((item, index) => (
									<Link
										key={index}
										className=' cursor-pointer inline-flex gap-x-2 text-gray-400 hover:text-gray-200'
										to={item.link}
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}>
										{item.title}
									</Link>	
								))}
							</div>
						</div>

						<div className=''>
							<h4 className='font-semibold text-gray-100 text-center'>
								Catálogo
							</h4>
							<div className='mt-3 grid grid-cols-2 gap-x-16'>
								{[
									{ title: "Mesas", link: "mesas" },
									{ title: "Bahiuts", link: "bahiuts" },
									{ title: "Sillas", link: "sillas" },
									{ title: "Escritorios", link: "escritorios" },
									{ title: "Armarios", link: "armarios" },
									{ title: "Camas", link: "camas" },
								].map((item, index) => (
									<LinkRouter
										key={index}
										className='cursor-pointer inline-flex gap-x-2 text-gray-400 hover:text-gray-200'
										to={`/catalogo/${item.link}`}>
										{item.title}
									</LinkRouter>
								))}
							</div>
						</div>
					</div>	
				</div>

				<div className='h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent mt-8'></div>
				{/* End Grid */}
				<div className='mt-5  grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center md:px-4'>
					<div className='flex justify-between items-center'>
						<p className='text-sm text-gray-400'>
							Dev by Tomás Banchio || © 2023 Todos los derechos reservados
						</p>
					</div>
					{/* End Col */}
					{/* Social Brands */}
					<div className='flex justify-center items-center mt-3 md:mt-0'>
						<a
							className='inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition'
							href='https://www.facebook.com/?locale=es_LA'>
							<svg
								className='w-4 h-4'
								xmlns='http://www.w3.org/2000/svg'
								width={16}
								height={16}
								fill='currentColor'
								viewBox='0 0 16 16'>
								<path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
							</svg>
						</a>
						<a
							className='inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition'
							href='https://www.instagram.com/'>
							<svg
								width={16}
								height={16}
								viewBox='0 0 24 24'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
							</svg>
						</a>
						<a
							className='inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition'
							href='https://www.linkedin.com/'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
							</svg>
						</a>

						<a
							className='inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition'
							href='https://www.mercadolibre.com.ar/'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width={28}
								height={32}
								strokeWidth={1.7}
								viewBox='0 0 48 48'>
								<defs>
									<style>
										{
											".a{fill:none;stroke:#FFFF;stroke-linecap:round;stroke-linejoin:round}"
										}
									</style>
								</defs>
								<ellipse
									cx={24}
									cy={24}
									className='a'
									rx={19.5}
									ry={12.978}
								/>
								<path
									d='M9.704 15.53a20.834 20.834 0 0 0 6.386 1.866 22.82 22.82 0 0 0 4.546-.773'
									className='a'
								/>
								<path
									d='M38.882 15.614a8.616 8.616 0 0 1-5.165 1.485c-3.335 0-6.225-2.199-9.215-2.199-2.668 0-7.189 4.373-7.189 5.164s1.31 1.26 2.372.74c.621-.303 3.31-2.914 5.484-2.914s9.219 7.136 9.857 7.806c.989 1.038-.926 3.274-2.149 2.05s-3.41-3.162-3.41-3.162'
									className='a'
								/>
								<path
									d='M43.4 22.683a23.998 23.998 0 0 0-8.547 2.692M32.58 27.456c.989 1.037-.926 3.273-2.149 2.05s-2.581-2.513-2.581-2.513'
									className='a'
								/>
								<path
									d='M30.135 29.215c.988 1.037-.927 3.273-2.15 2.05s-2.025-1.962-2.025-1.962'
									className='a'
								/>
								<path
									d='M24.201 31.316a2.309 2.309 0 0 0 3.649-.186'
									className='a'
								/>
								<path
									d='M24.201 31.316c.531-.697.49-3.182-2.243-2.688.642-1.219.066-3.146-2.388-2.01a1.69 1.69 0 0 0-3.146-.658 1.454 1.454 0 0 0-2.8-.28c-.544 1.103.296 3.096 2.092 1.976-.182 1.944.84 2.537 2.684 1.78.099 1.91 1.367 1.745 2.273 1.3a1.938 1.938 0 0 0 3.529.58Z'
									className='a'
								/>
								<path
									d='M4.67 22.279a18.308 18.308 0 0 1 9.064 3.214'
									className='a'
								/>
							</svg>
						</a>
					</div>
					{/* End Social Brands */}
				</div>
			</div>
		</footer>
	);
};
export default Footer;
