import { dataNosotros } from "../data/data.js";
import { BsClipboardCheck } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiChair } from "react-icons/pi";
import Stats from "./Stats.jsx";
const Nosotros = () => {
	const [{ first, second },  { cards }] = dataNosotros;

	return (
		<section className='bg-gradient-to-r from-gray-100 to-gray-300 text-white'>
				<Stats />
			<div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 p-8'>
				<div className='mx-auto max-w-2xl text-center font-sans px-4'>
					<h2 className='text-3xl font-bold sm:text-5xl text-[#001A49]'>
						Nosotros
					</h2>

					<p className='py-4 text-gray-800 text-xl text-center   whitespace-pre-line'>
						<span>{first}</span> <span className="hidden md:inline" >{second}</span>
					</p>
					<span className="bg-slate-800 w-20 "></span>
				</div>

				<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{cards.map((card, index) => (
						<li key={index}
							className='block rounded-xl border border-gray-800 p-8 shadow-lg transition hover:border-orange-900/80 hover:shadow-orange-500/30 cursor-pointer'
							href='/services/digital-campaigns'>
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

							<p className='mt-1 text-sm text-gray-800 font-medium '>
								{card.description}
							</p>
						</li>
					))}
				</div>

			</div>
		</section>
	);
};
export default Nosotros;
