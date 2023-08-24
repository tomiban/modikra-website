import { Link } from "react-router-dom";

const Button = ({ text, url, color="slate", borderColor, direction, span }) => {
	return (
		<Link
			to={`/${url}`}
			class={`group relative inline-block overflow-hidden border border-${color}-500 px-8 py-3 focus:outline-none focus:ring`}>
			<span
    class={span}
  ></span>

  <span
    class={`relative font-montserrat text-sm font-semibold text-${color}-500 transition-colors group-hover:text-white`}
  >
    {text}
  </span>
		</Link>
	);
};
export default Button;
