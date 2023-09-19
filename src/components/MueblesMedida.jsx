import MueblesSlider from "./MueblesSlider";
import WhatsAppButton from "./WhatsApp";
const MueblesMedida = () => {
	return (
		<>
			<div className='group h-auto rounded-lg grid place-content-center col-span-8 md:col-span-2  px-2 mt-8 '>
				
				<h2 className='text-xl sm:text-4xl font-bold text-slate-800 tracking-widest leading-snug font-montserrat text-center'>
					Muebles a Medida
				</h2>
				<p className='text-base sm:text-xl text-center leading-snug  text-slate-500 my-4'>
					¿Tenés una idea en mente? Consultános y la hacemos realidad
				</p>
				<p className='text-base text-slate-500 text-center tracking-wider font-bold mb-8'>
					Observa nuestros últimos trabajos
				</p>
				<div className='hidden lg:flex items-center justify-center '>
					
					<WhatsAppButton
						text={"Contactanos"}
						type='outline'
						data={"Hola, necesito asesoramiento para un mueble a medida...."}
					/>
				</div>
			</div>
			<div className='group md:px-20 rounded-lg col-span-6 cursor-grab relative md:mt-16'>
				<div className='relative'>
					<MueblesSlider />
				</div>
			</div>
		</>
	);
};
export default MueblesMedida;
