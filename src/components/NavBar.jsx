import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../data/data.js";
import WhiteLogo from "../assets/svg/WhiteLogo.jsx";
import Button from "./Button.jsx";
import MenuButton from "./MenuButton.jsx";
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
		<header className={`fixed left-0 top-0 md:shadow-none z-10 w-full p-2 sm:p-0`}>
			<div
				className={`md:px-10 py-6  transition-all duration-500 ease-in bg-gray-200 ${
					bg ? "md:bg-gray-200" : "md:bg-transparent"
				} `}>
				<div className='flex items-center justify-between cursor-pointer w-full  relative'>
					<a
						className='block text-white ml-4'
						href='/'>
						<span className='sr-only'>Inicio</span>
						<BlackLogo
							fill={"#273349"}
							className='hidden sm:block'
						/>
						<WhiteLogo className='sm:hidden' />
					</a>

					<nav
						className={`md:flex md:items-center gap-6 md:pb-0 md:w-auto w-full opacity-0 md:opacity-100 bg-gray-200 md:bg-transparent transition-all duration-500 ease-in absolute md:static ${
							menuOpen
								? "opacity-100 top-[95%]"
								: "opacity-0 top-[95%] right-[500px]"
						} `}>
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
					</nav>
					<div className='flex items-center gap-2'>
						<Button
							text={"Catálogo"}
							url={"catalogo"}
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
