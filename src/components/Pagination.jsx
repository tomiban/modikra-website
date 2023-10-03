import { Link } from "react-scroll";

const Pagination = ({ totalPages, currentPage, onChangePage }) => {
	return (
		<nav aria-label='Page navigation'>
			<ul className='inline-flex space-x-2'>
				<Link
					to={"store"}
					spy={true}
					smooth={true}
					offset={-140}
					duration={500}>
					<button
						onClick={() => onChangePage(currentPage - 1)}
						className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline ${
							currentPage === 1 && " cursor-not-allowed" // Agrega clases de estilo cuando disabled es true
						}`}
						disabled={currentPage === 1}>
						<svg
							className='w-4 h-4 fill-current'
							viewBox='0 0 20 20'>
							<path
								d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
								clipRule='evenodd'
								fillRule='evenodd'></path>
						</svg>
					</button>
				</Link>
				{Array.from({ length: totalPages }).map((_, index) => (
					<Link
						key={index}
						to={"store"}
						spy={true}
						smooth={true}
						offset={-140}
						duration={500}>
						<button
							onClick={() => onChangePage(index + 1)}
							className={`w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline ${
								currentPage === index + 1 ? "bg-indigo-100" : ""
							}`}>
							{index + 1}
						</button>
					</Link>
				))}
				<Link
					to={"store"}
					spy={true}
					smooth={true}
					offset={-140}
					duration={500}>
					<button
						onClick={() => onChangePage(currentPage + 1)}
						className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline ${
							currentPage === totalPages && "cursor-not-allowed" // Agrega clases de estilo cuando disabled es true
						}`}
						disabled={currentPage === totalPages}>
						<svg
							className='w-4 h-4 fill-current'
							viewBox='0 0 20 20'>
							<path
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
								clipRule='evenodd'
								fillRule='evenodd'></path>
						</svg>
					</button>
				</Link>
			</ul>
		</nav>
	);
};
export default Pagination;
