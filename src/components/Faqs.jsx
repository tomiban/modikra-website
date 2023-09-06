import { useDataContext } from "../context/UserContext.jsx";
import Accordion from "./Accordion.jsx";
const Faqs = () => {
	const { title, heading, cards } = useDataContext().dataFaqs.faqs;

	return (
		<section
			className='py-6 sm:py-8'
			id='preguntas'>
			<div className='max-w-2xl mx-auto'>
				<div className=' text-center mb-10 lg:mb-8 flex flex-col justify-center'>
					<h2 className='text-2xl font-bold text-[#001A49] lg:text-5xl text-center py-8 md:text-5xl '>
						{title}
					</h2>
					<p className=' text-xl  text-gray-500 '>{heading}</p>
				</div>

				<div className='max-w-2xl mx-auto'>
					<div className='hs-accordion-group'>
						{cards.map((item) => (
							<div
								key={item.id}
								className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active'>
								<Accordion item={item} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Faqs;
