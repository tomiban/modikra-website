const Contacto = () => {
	return (
		<section className=' text-gray-600 relative  px-4 py-8 sm:px-6 lg:px-8 md:pb-20' id="contacto">
			<div className='max-w-2xl mx-auto text-center mb-10 lg:mb-8 px-6'>
				<h2 className='text-2xl font-bold text-[#001A49] lg:text-5xl text-center py-8 md:text-5xl '>
					Contacto
				</h2>
				<p className=' text-xl text-gray-500  mb-8'>
					Pasa a conocer nuestro local comercial o dejanos un mensaje, tu
					satisfacción es nuestro compromiso.
				</p>
			</div>
			<div className=' md:container px-5  mx-auto flex flex-col-reverse md:flex-row sm:flex-nowrap flex-wrap gap-5 md:gap-10 '>
				<div className='lg:w-3/5 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden  p-10 flex items-end justify-start relative'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.2655435863135!2d-60.93195956298216!3d-31.43801154139174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5136a1e102cdd%3A0xf3a644f8e210b28d!2sGabarret%201824%2C%20S3080AQL%20Esperanza%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1692899783164!5m2!1ses-419!2sar'
						width='100%'
						height='100%'
						className='absolute inset-0'
						style={{ filter: "grayscale(0) contrast(1) opacity(0.9)" }}
						title='map'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					/>

					<div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
						<div className='lg:w-1/2 px-6'>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
								DIRECCIÓN
							</h2>
							<p className='mt-1'>
								Nos encontramos en la ciudad de Esperanza, Provincia de Santa
								Fe, en la calle Gabarret 1824.
							</p>
						</div>
						<div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
								EMAIL
							</h2>
							<a className='text-indigo-500 leading-relaxed'>
								modikramuebleria@gmail.com
							</a>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
								TELEFONO
							</h2>
							<p className='leading-relaxed'>3496-547076</p>
						</div>
					</div>
				</div>
				<div className='lg:w-2/5 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:p-8 mt-8 md:mt-0 rounded-md p-6'>
					<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
						Envíanos un mensaje
					</h2>
					<p className='leading-relaxed mb-5 text-gray-600'>
						No dejes pasar tus dudas, estamos aquí para ayudarte y crear el
						hogar perfecto junto a vos.
					</p>
					<div className='relative mb-4'>
						<label
							htmlFor='name'
							className='leading-7 text-sm text-gray-600'>
							Nombre
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='email'
							className='leading-7 text-sm text-gray-600'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='message'
							className='leading-7 text-sm text-gray-600'>
							Mensaje
						</label>
						<textarea
							id='message'
							name='message'
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
							defaultValue={""}
						/>
					</div>
					<button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
						Envíar
					</button>
					<p className='text-xs text-gray-500 mt-3 text-center'>
						Un miembro de nuestro equipo responderá por email lo antes
						posible.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Contacto;
