import BlackLogo from "../assets/svg/BlackLogo";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import FbIcon from "../assets/svg/FbIcon";
import IgIcon from "../assets/svg/IgIcon";
import LinkedinIcon from "../assets/svg/LinkedinIcon";
import MlIcon from "../assets/svg/MlIcon";

const Footer = () => {
	return (
		<footer
			className='bg-gray-900'
			id='footer'>
			<div className='max-w-2xl md:container p-5 sm:px-6 lg:px-8 lg:pt-10 mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-3 md:space-y-7'>
					{/* Logo Column */}
					<div className='col-span-2 md:w-1/4 flex flex-col items-center mb-5 md:mb-0'>
						<BlackLogo fill={"#FFFF"} />
						<p className='text-white font-montserrat'>
							Muebles en serie y a medida
						</p>
					</div>

					{/* Links Columns */}
					<div className='col-span-2 flex justify-evenly space-x-10 text-sm sm:text-base'>
						<div className=''>
							<h4 className='font-semibold text-gray-100 text-center'>
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
										className='cursor-pointer inline-flex gap-x-2 text-gray-400 hover:text-gray-200'
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
							<div className='mt-3 grid grid-cols-2 gap-x-5 md:gap-x-14'>
								{[
									{ title: "Mesas", link: "Mesas" },
									{ title: "Bahiuts", link: "Bahiuts" },
									{ title: "Sillas", link: "Sillas" },
									{ title: "Escritorios", link: "Escritorios" },
									{ title: "Armarios", link: "Armarios" },
									{ title: "Camas", link: "Camas" },
								].map((item, index) => (
									<LinkRouter
										key={index}
										className='cursor-pointer inline-flex text-gray-400 hover:text-gray-200'
										to={`/catalogo/${item.link}`}>
										{item.title}
									</LinkRouter>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className='h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent mt-8'></div>

				<div className='mt-5 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center md:px-4'>
					<div className='flex justify-between items-center'>
						<p className='text-sm text-gray-400 text-center'>
							Dev by Tomás Banchio || © 2023 Todos los derechos reservados
						</p>
					</div>

					<div className='flex justify-center items-center mt-3 md:mt-0'>
						<a
							href='https://www.facebook.com/?locale=es_LA'
							className='inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition'>
							<FbIcon />
						</a>
						<a
							href='https://www.instagram.com/'
							className='inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition'>
							<IgIcon />
						</a>
						<a
							href='https://www.linkedin.com/'
							className='inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition'>
							<LinkedinIcon />
						</a>
						<a
							href='https://www.mercadolibre.com.ar/'
							className='inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition'>
							<MlIcon />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
