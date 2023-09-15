import { BiLogoWhatsapp } from "react-icons/bi";
const WhatsAppButton = ({ text = "", type }) => {
	const textIcon = `https://api.whatsapp.com/send?phone=${
		import.meta.env.VITE_PHONE
	}&text=Hola,%20quiero%20hablar%20con%20un%20representante..`;

	const textContacto = `https://api.whatsapp.com/send?phone=${
		import.meta.env.VITE_PHONE
		}&text=Hola,%20necesito%20asesoramiento%20para%20un%20mueble%20a%20medida....`;
	
	const redirectToWhatsApp = (url) => {
		window.open(url, "_blank");
	};
	return type === "outline" ? (
		<button className='border-2 border-green-500 rounded-md  text-green-500 hover:bg-green-500 transition-all duration-500 hover:text-white font-bold text-md '>
			<a
				className=' p-3 flex items-center'
				rel='noopener noreferrer'
				onClick={(e) => {
					redirectToWhatsApp(textContacto);
				}}>
				{text}
				<BiLogoWhatsapp
					xmlns='http://www.w3.org/2000/svg'
					size={30}
					className='ml-2'
					fill='currentColor'></BiLogoWhatsapp>
			</a>
		</button>
	) : (
		<button
			onClick={(e) => {
				redirectToWhatsApp(textIcon);
			}}
			className=' group  block fixed bottom-3 right-8 bg-green-500 rounded-full p-2 shadow-xl hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer group '>
			<BiLogoWhatsapp
				size={40}
				className='text-white   group-hover:scale-[1.15] transition duration-300'
				fill='currentColor'
			/>
			{text}
			<div className='absolute left-[-130px] top-1/2 transform -translate-y-1/2 pb-1 px-1 bg-gray-50 text-gray-800 rounded-md shadow-md opacity-0 group-hover:opacity-90 transition-opacity z-40 pointer-events-none '>
				<span className='text-sm'>¿Necesitas ayuda?</span>
			</div>
		</button>
	);
};
export default WhatsAppButton;
