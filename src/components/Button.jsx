import { Link } from "react-router-dom";

const Button = ({ text }) => {
	return (
		<Link
			to={"/catalogo"}
			class='rounded-md bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-xs md:px-5 md:py-2.5  md:text-sm font-semibold text-white shadow'>
			{text}
		</Link>
	);
};
export default Button;
