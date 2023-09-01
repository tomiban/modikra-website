import { faq } from "../data/data.js";
import Accordion from "./Accordion.jsx";
const Faqs = () => {
	return (
		<div className='px-4 py-8 sm:px-6 lg:px-8 ' id="preguntas">
			<div className='max-w-2xl mx-auto text-center mb-10 lg:mb-8 flex flex-col justify-center'>
				<h2 className='text-2xl font-bold text-[#001A49] lg:text-5xl text-center py-8 md:text-5xl '>
					Preguntas Frecuentes
				</h2>
				<p className=' text-xl  text-gray-500 '>
					Si tenes alguna otra consulta que no este aca no dudes en comunicarte
					con nosotros
				</p>
			</div>

			<div className='max-w-2xl mx-auto'>
				<div className='hs-accordion-group'>
					{faq.map((item) => (
						<div
							key={item.id}
							className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active'>
							<Accordion item={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Faqs;
