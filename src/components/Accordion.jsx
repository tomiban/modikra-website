import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const Accordion = ({ item }) => {
	const [show, setShow] = useState(false);
	return (
		<>
			<button
				onClick={() => setShow(!show)}
				className='pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-slate-800 transition hover:text-gray-500'>
				{item.title}

				<BiChevronDown
					className={`text-2xl transition-all duration-500 ${
						show ? "rotate-180" : ""
					}`}
				/>
			</button>
			<AnimatePresence>
				{show && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "auto" }}
						exit={{ height: 0 }}
						transition={{ duration: 0.3 }}
						className=' w-full overflow-clip'>
						<p className='text-slate-600'>
							{item.description}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
export default Accordion;
