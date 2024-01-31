const Stats = ({stats}) => {
	return (
		<div className='flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8 px-20'>
			<div className='-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x divide-slate-500'>
				{stats.map((item, index) => (
					<div
						key={index}
						className='px-6 md:px-8'>
						<div className='flex justify-center items-end'>
							<p className='block text-center text-lg font-bold text-indigo-800 md:text-left'>
								{item.number}
							</p>
						</div>
						<span className='block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base tracking-wider'>
							{item.text}
						</span>
					</div>
				))}
			</div>
			<div className='flex items-center justify-center gap-4 lg:justify-start'>
				<span className='text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base'>
					Nuestras Redes
				</span>
				<span className='h-px w-12 bg-gray-400'></span>

				<div className='flex gap-4'>
					<a
						href='https://www.instagram.com/modikramuebles/https://www.facebook.com/profile.php?id=100054479050252'
						target='_blank'
						className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'>
						<svg
							className='h-5 w-5'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
						</svg>
					</a>

					<a
						href='https://www.facebook.com/profile.php?id=100054479050252'
						target='_blank'
						className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'>
						<svg
							className='h-5 w-5'
							xmlns='http://www.w3.org/2000/svg'
							width={16}
							height={16}
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
						</svg>
					</a>

					<a
						href='https://www.linkedin.com'
						target='_blank'
						className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'>
						<svg
							className='h-5 w-5'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Stats;
