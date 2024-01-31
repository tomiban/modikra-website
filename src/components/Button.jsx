import { Link } from "react-router-dom"

const Button = ({ text, url, color, borderColor, direction, span }) => {
	return (
		<Link
			to={`/${url}`}
			className={`group relative inline-block overflow-hidden ${
				color === "white"
					? " border-white border sm:border-0"
					: "border-slate-500 text-white md:text-slate-600 bg-slate-500 "
			}  px-3 py-2 sm:px-8 sm:py-3 md:focus:outline-none md:bg-transparent hover:bg-opacity-80
  `}>
			<span className={span}></span>
			<span
				className={`relative font-montserrat text-sm font-semibold ${
					color === "white"
						? " hover:text-black group-hover:text-black"
						: " md:text-slate-600  group-hover:text-white"
				} transition-colors text-white `}>
				{text}
			</span>
		</Link>
	)
}
export default Button
