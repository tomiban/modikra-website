import { Link } from "react-router-dom";

const Button = ({
	text,
	url,
	color = "slate",
	borderColor,
	direction,
	span,
}) => {
	return (
<Link
    to={`/${url}`}
    className={`group relative inline-block overflow-hidden ${
        color === "orange"
            ? "bg-orange-500 "
            : "border-slate-500 text-white md:text-slate-600 bg-slate-500"
    }  px-3 py-2 sm:px-8 sm:py-3 md:focus:outline-none md:focus:ring md:bg-transparent hover:bg-opacity-80
  `}>
    <span className={span}></span>
    <span
        className={`relative font-montserrat text-sm font-semibold ${
            color === "orange"
                ? "md:text-orange-500 md:hover:text-white"
                : "text-white md:text-orange md:text-slate-600"
        } transition-colors text-white group-hover:text-white`}>
        {text}
    </span>
</Link>
	);
};
export default Button;
