import { Link } from "react-router-dom";

const Button = ({ text }) => {
	return (
		<Link
			to={"/catalogo"}
			class='rounded-md bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow'>
			{text}
		</Link>
	);
};
export default Button;
