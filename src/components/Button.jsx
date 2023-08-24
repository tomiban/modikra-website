import { Link } from "react-router-dom";

const Button = ({ text }) => {
	return (
		<Link
			to={"/catalogo"}
			class='px-5 py-2 group relative inline-block overflow-hidden border border-slate-500 md:px-8  md:py-3 focus:outline-none focus:ring'>
			<span
    class="absolute inset-y-0 left-0 w-[2px] bg-slate-600 transition-all group-hover:w-full group-active:bg-indigo-500"
  ></span>

  <span
    class="relative font-montserrat text-sm font-semibold text-slate-500 transition-colors group-hover:text-white"
  >
    CATÁLOGO
  </span>
		</Link>
	);
};
export default Button;
