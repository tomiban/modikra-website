import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../data/data.js";
import WhiteLogo from "../assets/svg/WhiteLogo.jsx";
import Button from "./Button.jsx";
import MenuButton from "./MenuButton.jsx";
import BlackLogo from "../assets/svg/BlackLogo.jsx";
import { useLocation, useParams } from "react-router-dom";

const NavBar = () => {
	const [bg, setBg] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [navHeight, setNavHeight] = useState();
	const location = useLocation();
	const { categoria } = useParams();

	useEffect(() => {
		// add event listener
		window.addEventListener("scroll", () => {
			// when scrollY is bigger than 50px setBg to true, else false
			return window.scrollY > 50 ? setBg(true) : setBg(false);
		});

		// Obtener la altura de la barra de navegación
		const navbar = document.querySelector(".navbar"); // Ajusta esta clase según tu implementación
		if (navbar) {
			setNavHeight(navbar.clientHeight);
		}
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	let isCatalogoPage =
		location.pathname === `/catalogo/${categoria}` ||
		location.pathname === "/catalogo";

	return (
		<header className={`fixed left-0 top-0 md:shadow-none z-10 w-full navbar`}>
			<div
				className={`md:px-10 py-6  transition-all duration-500 ease-in bg-gray-200 ${
					bg ? "md:bg-gray-200" : "md:bg-transparent"
				} `}>
				<div className='flex items-center justify-between cursor-pointer w-full  relative'>
					<Link
						to='/catalogo' // Cambia la ruta de redirección de Home a /catalogo
						className='block text-white ml-4'>
						<span className='sr-only'>Inicio</span>
						<BlackLogo
							fill={"#273349"}
							className='hidden sm:block hover:scale-105 transition duration-500'
						/>
						<WhiteLogo className='sm:hidden' />
					</Link>

					<nav
						className={`md:flex md:items-center gap-6 md:pb-0 md:w-auto w-full opacity-0 md:opacity-100 bg-gray-200 md:bg-transparent transition-all duration-500 ease-in absolute md:static ${
							menuOpen
								? "opacity-100 top-[95%]"
								: "opacity-0 top-[95%] right-[500px]"
						} `}>
						{isCatalogoPage ? (
							<div className='order-1 md:order-2'>
								<a
									className='flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl '
									href='#'>
									<svg
										className='fill-current text-gray-800 mr-2'
										xmlns='http://www.w3.org/2000/svg'
										width={24}
										height={24}
										viewBox='0 0 24 24'>
										<path d='M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z' />
									</svg>
									CATÁLOGO
								</a>
							</div>
						) : (
							<ul
								className={`md:flex md:gap-6  md:pb-0  md:static md:z-auto z-[1]  md:pl-0  md:opacity-100 bg-gray-200 md:bg-transparent `}>
								{navLinks.map((link, index) => (
									<li
										key={index}
										className='text-md'>
										<Link
											to={link.url}
											spy={true}
											smooth={true}
											offset={-100}
											duration={500}
											className='md:group  font-semibold text-gray-500 transition duration-100 hover:text-indigo-500 px-4  active:text-indigo-700 py-2 border-b border-gray-300 block  md:inline md:w-full md:border-none'>
											{link.text}
										</Link>
									</li>
								))}
							</ul>
						)}
					</nav>
					<div className='flex items-center  gap-0 sm:gap-2'>
						<Button
							text={isCatalogoPage ? "Home" : "Catálogo"}
							url={isCatalogoPage ? "" : "catalogo"}
							className='hidden md:block'
							color={"slate"}
							span={
								"hidden md:block md:absolute md:inset-y-0 md:left-0 md:w-[2px] md:bg-slate-500 md:transition-all md:group-hover:w-full md:group-active:bg-slate-500"
							}
						/>
						<div className='md:hidden text-white cursor-pointer'>
							<MenuButton
								toggleMenu={toggleMenu}
								open={menuOpen}
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
