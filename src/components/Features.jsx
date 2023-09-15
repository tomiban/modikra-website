import Stats from "./Stats.jsx";
import { useDataContext } from "../context/UserContext.jsx";
import QualitySvg from "../assets/svg/QualitySvg.jsx";
import CreativitySvg from "../assets/svg/CreativySvg.jsx";
import ComoditySvg from "../assets/svg/ComoditySvg.jsx";
import DeliverySvg from "../assets/svg/DeliverySvg.jsx";
import Spinner from "./Spinner.jsx";
const Features = () => {
	const { dataNosotros } = useDataContext();
	const { title, heading, cards, stats } = dataNosotros?.nosotros || {};

	if (!dataNosotros) return <Spinner />;

	return (
		<section
			className='py-6 sm:py-8'
			id='nosotros'>
			<Stats stats={stats} />
			<div className='max-w-4xl mx-auto px-4 sm:px-8 mt-8 sm:mt-16'>
				<div className='text-center'>
					<h2 className='text-2xl font-bold text-[#001A49] lg:text-4xl text-center py-4 sm:py-6 md:text-5xl'>
						{title}
					</h2>
					<p className='max-w-2xl mx-auto mt-2 text-base sm:text-lg text-gray-500'>
						{heading.first} {heading.second}
					</p>
				</div>
				<div className='grid md:grid-cols-2 gap-6 mt-8 sm:mt-10'>
					{cards.map((card, index) => (
						<div
							key={index}
							className='flex gap-4 items-start'>
							<span className='text-violet-600 bg-violet-500/10 p-3 rounded-full'>
								{card.icon === "BsClipboardCheck" && (
									<QualitySvg
										fill={"rgb(124 58 237 / var(--tw-text-opacity))"}
										className='w-6 h-6'
									/>
								)}
								{card.icon === "HiOutlineLightBulb" && (
									<CreativitySvg
										width={20}
										height={20}
										fill={"rgb(124 58 237 / var(--tw-text-opacity))"}
										className='w-6 h-6'
									/>
								)}
								{card.icon === "PiChair" && (
									<ComoditySvg
										width={15}
										height={15}
										className='w-6 h-6'
									/>
								)}
								{card.icon === "DeliverySvg" && (
									<DeliverySvg
										width={15}
										height={15}
										fill={"rgb(124 58 237 / var(--tw-text-opacity))"}
										className='w-6 h-6'
									/>
								)}
							</span>
							<div>
								<h3 className='font-semibold text-xl text-slate-800 sm:text-2xl'>
									{card.title}
								</h3>
								<p className='mt-1 text-gray-500'>{card.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
