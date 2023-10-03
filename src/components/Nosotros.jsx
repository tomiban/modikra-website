import { motion } from "framer-motion";
import { BsClipboardCheck } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiChair } from "react-icons/pi";
import Stats from "./Stats.jsx";
import { DataContext, useDataContext } from "../context/UserContext.jsx";

const Nosotros = () => {
	const { dataNosotros } = useDataContext();
	const { title, heading, cards, stats } = dataNosotros?.nosotros || {};

	if (!dataNosotros) {
		return <p>Loading...</p>; 
	}

	return (
		<section
			className='pt-4 sm:py-8'
			id='nosotros'>
			<Stats stats={stats} />

			<div className='mx-auto max-w-screen-xl px-4 md:px-8  sm:py-8 sm:px-6'>
				<h2 className='text-3xl font-bold sm:text-5xl text-[#001A49] text-center py-4'>
					{title}
				</h2>

				<div className='mb-4 flex items-center flex-col sm:mb-8 md:mb-8'>
					<p className='hidden max-w-screen-sm text-xl text-center text-gray-500 md:block py-4'>
						<span className=''>{heading.first}</span>

						<span className=''>{heading.second}</span>
					</p>
				</div>

				<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{cards.map((card, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: "-100vh" }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ type: "spring", bounce: 0.6 }}
							className='block rounded-xl border border-gray-800 p-8 shadow-lg transition hover:border-orange-900/80 hover:shadow-orange-500/30 cursor-pointer'>
							{card.icon === "BsClipboardCheck" && (
								<BsClipboardCheck
									size={35}
									color='#FF5A1F'
								/>
							)}
							{card.icon === "HiOutlineLightBulb" && (
								<HiOutlineLightBulb
									size={42}
									color='#FF5A1F'
								/>
							)}
							{card.icon === "PiChair" && (
								<PiChair
									size={40}
									color='#FF5A1F'
								/>
							)}
							<h2 className='mt-4 text-xl font-bold text-[#001A49]'>
								{card.title}
							</h2>

							<p className='mt-1 text-sm  text-slate-600'>{card.description}</p>
						</motion.li>
					))}
				</div>
			</div>
		</section>
	);
};
export default Nosotros;
