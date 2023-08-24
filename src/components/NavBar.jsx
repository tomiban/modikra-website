import { useEffect, useState } from "react";
import { navLinks } from "../data/data.js";
import WhiteLogo from "../assets/svg/WhiteLogo.jsx";
import Button from "./Button.jsx";
import MenuButton from "./MenuButton.jsx";
import { Link } from "react-router-dom";
import BlackLogo from "../assets/svg/BlackLogo.jsx";

const NavBar = () => {
	const [bg, setBg] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	useEffect(() => {
		// add event listener
		window.addEventListener("scroll", () => {
			// when scrollY is bigger than 50px setBg to true, else false
			return window.scrollY > 50 ? setBg(true) : setBg(false);
		});
	}, []);
	return (
		<header className={`fixed left-0 top-0 md:shadow-none z-10 w-full`}>
			<div
				className={`md:px-10 py-6  transition-all duration-500 ease-in bg-gray-200 ${
					bg ? "md:bg-gray-200" : "md:bg-transparent"
				} `}>
				<div className='flex items-center justify-between cursor-pointer w-full'>
					<a
						className='block text-white ml-4'
						href='/'>
						<span className='sr-only'>Inicio</span>
						<BlackLogo className='hidden sm:block' />
						<WhiteLogo className='sm:hidden' />
					</a>

					<nav
						className={`md:flex md:items-center gap-6 md:pb-0 md:w-auto md:pl-0 pl-8 pb-2 opacity-0 md:opacity-100 bg-gray-200 md:bg-transparent transition-all duration-200 ease-in ${
							menuOpen ? "opacity-100" : "opacity-0 w-0"
						} `}>
						<ul className='md:flex md:gap-6 md:pb-0 absolute md:static md:z-auto z-[1] w-full  md:pl-0 px-8   md:opacity-100 bg-gray-200 md:bg-transparent top-[80%] left-0 '>
							{navLinks.map((link, index) => (
								<li
									key={index}
									className='text-md'>
									<Link
										to={`/${link.url}`}
										className='md:group text-lg font-semibold text-gray-500 transition duration-100 hover:text-indigo-500 px-4  active:text-indigo-700 py-1 border-b border-gray-300 block  md:inline md:w-full md:border-none'>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className='flex items-center gap-2'>
						<Button
							text={"Catálogo"}
							className='hidden md:block'
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
