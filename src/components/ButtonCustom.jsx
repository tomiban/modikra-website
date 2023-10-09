import { Link } from "react-router-dom";

const ButtonCustom = ({ text }) => {
	return (
		<Link
			className=' rounded-full  border-indigo-600 p-3 sm:p-4 border-2 text-sm sm:text-base  text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 flex items-center  space-x-2 shadow-md'
			to='catalogo/personalizados'>
			<span className='font-semibold '> Ver Diseños </span>

			<svg
				className='h-5 w-5 rotate-360'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M14 5l7 7m0 0l-7 7m7-7H3'
				/>
			</svg>
		</Link>
	);
};
export default ButtonCustom;
