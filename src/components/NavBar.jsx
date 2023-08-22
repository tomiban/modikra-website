import { useEffect, useState } from "react";
import { navLinks } from "../data/data.js";
import { FiMenu } from "react-icons/fi";
import WhiteLogo from "../assets/svg/WhiteLogo.jsx";
import Button from "./Button.jsx";
import MenuButton from "./MenuButton.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [bg, setBg] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}
	useEffect(() => {
		// add event listener
		window.addEventListener("scroll", () => {
			// when scrollY is bigger than 50px setBg to true, else false
			return window.scrollY > 50 ? setBg(true) : setBg(false);
		});
	});

	return (
		<header className={`fixed left-0 top-0  md:shadow-none z-10 w-full  `}>
			<div
				class={`md:flex md:px-10 py-6 px-7 items-center justify-between  transition-all duration-500 ease-in bg-[#08090Bff] ${
					bg ? "md:bg-black" : "md:bg-transparent"
				} `}>
				<div class='flex items-center justify-between cursor-pointer '>
					<a
						class='block text-white ml-4'
						href='/'>
						<span class='sr-only'>Home</span>
						<WhiteLogo />
					</a>
				</div>
				<div className='text-3xl absolute right-2 top-5 md:hidden text-white cursor-pointer'>
					<MenuButton toggleMenu={toggleMenu} open={menuOpen} />
				</div>
				<ul
					class={`md:flex md:items-center gap-6 md:pb-0 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-8 pb-2  opacity-0 md:opacity-100 bg-[#08090Bff] md:bg-transparent transition-all duration-500 ease-in top-20 ${
						menuOpen ? "opacity-100" : "left-[-490px]"
					} `}>
					{navLinks.map((link, index) => (
						<li
							key={index}
							className='text-md'>
							<Link
								to={`/${link.url}`}
								className=' group block py-2 pl-3 pr-4 text-gray-200 hover:text-white font-semibold  md:transition md:duration-500 '>
								{link.text}
								<span className='md:block md:max-w-0 md:group-hover:max-w-full md:transition-all md:duration-500 md:h-0.5 md:bg-[#5850EC]'></span>
							</Link>
						</li>
					))}
				</ul>
				<div class='absolute top-7 right-20 md:static'>
					<Button text={"Catálogo"} />
				</div>
			</div>
		</header>
	);
};
export default NavBar;
