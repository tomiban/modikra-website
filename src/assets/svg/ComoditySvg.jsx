const ComoditySvg = ({ props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={20}
			height={20}
			fill='none'
			viewBox='0 0 24 24'
			{...props}>
			<path
				stroke="rgb(124 58 237 / var(--tw-text-opacity))"
				strokeLinecap='round'
                strokeLinejoin='round'
				strokeWidth={1.3}
				d='M16.5 22.5h2.25a1.5 1.5 0 0 0 1.5-1.5v-7.5M7.5 22.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-7.5M.75 12.129l10.189-10.19a1.5 1.5 0 0 1 2.122 0L23.122 12'
			/>
			<path
				stroke="rgb(124 58 237 / var(--tw-text-opacity))"
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={1.3}
				d='M12 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM12 13.5a3.75 3.75 0 0 0-3.75 3.75V18h1.5l.75 4.5h3l.75-4.5h1.5v-.75A3.75 3.75 0 0 0 12 13.5Z'
			/>
		</svg>
	);
};
export default ComoditySvg;
