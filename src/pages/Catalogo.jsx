import SliderCatalogo from "../components/SliderCatalogo"
import { Link, useParams } from "react-router-dom"
import { useDataContext } from "../context/UserContext"
import { useEffect, useState } from "react"
import WhatsAppButton from "../components/WhatsApp"
import Pagination from "../components/Pagination"
import Spinner from "../components/Spinner"
import placeholderImg from "../assets/img/placeholder-img.jpg"

const Catalogo = () => {
	const {
		dataCatalogo,
		getCollection,
		getCollectionByCategory,
		getTotalElements,
	} = useDataContext()

	const { categoria: paramCategoria } = useParams()
	const [catalogo] = dataCatalogo
	const [dataMuebles, setDataMuebles] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(3) // Inicializamos en 1 página
	const [categoria, setCategoria] = useState(null)
	const [imagesLoaded, setImagesLoaded] = useState(false)
	const [loading, setLoading] = useState(false) // Agregamos un estado de carga

	const elementosPorPagina = 8

	const fetchMuebles = async () => {
		setLoading(true) // Mostrar spinner de carga

		let data
		if (categoria) {
			data = await getCollectionByCategory(categoria, currentPage)
		} else {
			data = await getCollection(currentPage)
		}
		setDataMuebles(data)

		setLoading(false) // Ocultar spinner de carga
	}

	const getPages = async () => {
		const totalElements = await getTotalElements()
		const pages = Math.ceil(totalElements / elementosPorPagina)
		setTotalPages(pages)
	}

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage)
	}

	useEffect(() => {
		getPages()
	}, [])

	useEffect(() => {
		if (paramCategoria) {
			setCategoria(paramCategoria)
		}

		fetchMuebles()
	}, [currentPage, categoria, paramCategoria])

	// Define un objeto de mapeo de parámetros a títulos
	const titulos = {
		dormitorio: "Muebles de dormitorio",
		comedor: "Muebles de comedor",
		personalizados: "Muebles a medida",
	}

	// Obtiene el título correspondiente al parámetro o "VER TODOS" por defecto
	const titulo = titulos[paramCategoria] || "VER TODOS"

	let bannerImg = catalogo?.bannerImg || []

	return (
		<main className='mx-auto mt-4'>
			{/* Carousel */}
			<div className=''>
				<SliderCatalogo bannerImg={bannerImg} />
			</div>

			{/* Product colction */}
			<section className='bg-white py-8'>
				<div className='container mx-auto flex flex-wrap pt-4 pb-12'>
					<nav
						id='store'
						className='w-full z-30 top-0 px-6 py-1'>
						<div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3'>
							<h3
								className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl '
								href='#'>
								{titulo}
							</h3>
							<div
								className='flex items-center'
								id='store-nav-content'>
								<a
									className='pl-3 inline-block no-underline hover:text-black'
									href='#'>
									<svg
										className='fill-current hover:text-black'
										xmlns='http://www.w3.org/2000/svg'
										width={24}
										height={24}
										viewBox='0 0 24 24'>
										<path d='M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z' />
									</svg>
								</a>
								<a
									className='pl-3 inline-block no-underline hover:text-black'
									href='#'>
									<svg
										className='fill-current hover:text-black'
										xmlns='http://www.w3.org/2000/svg'
										width={24}
										height={24}
										viewBox='0 0 24 24'>
										<path d='M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z' />
									</svg>
								</a>
							</div>
						</div>
					</nav>

					<div className='lg:flex lg:flex-wrap sm:grid grid-cols-2 lg:grid-cols-4 gap-2 mx-auto min-h-[50vh]'>
						{loading ? (
							<div className='col-span-4'>
								<Spinner />
							</div>
						) : (
							dataMuebles?.map((card, index) => (
								<div
									className={`p-6 col-span-1 flex flex-col  duration-200`}>
									<Link
										to={`/catalogo/${card.categoria.toLowerCase()}/${card.titulo.replace(
											/\s+/g,
											"_"
										)}_${card.id}`}>
										<div className='relative h-[20rem] sm:h-[18rem] w-[18rem] sm:w-[16rem] bg-gray-200 overflow-hidden duration-200 transition-all hover:shadow-2xl shadow-indigo-900'>
											{/* Imagen */}
											<img
												className='object-fill object-top w-full h-full rounded '
												onLoad={() => setImagesLoaded(true)}
												loading='lazy'
												src={imagesLoaded ? card.img : placeholderImg}
												alt={card.titulo}
											/>

											{/* Superposición de oscurecimiento con efecto hover */}
											<div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-10 rounded transition-opacity duration-300'></div>
										</div>
										<div className='pt-3 flex items-center justify-between'>
											<p className='text-center font-semibold h-5 flex-1'>
												{card.titulo}
											</p>
										</div>
									</Link>
								</div>
							))
						)}
					</div>
				</div>
				<div className={`flex justify-center`}>
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onChangePage={handlePageChange}
					/>
				</div>
			</section>

			{/* Footer Product */}
			<article className='container mx-auto lg:px-4 bg-white py-8 border-t border-gray-400'>
				<div className='container flex px-3 py-8 '>
					<div className='w-full mx-auto flex flex-wrap'>
						<div className='flex w-full lg:w-1/2 '>
							<div className='px-3 md:px-0'>
								<h3 className='font-bold text-gray-900'>Nosotros</h3>
								<p className='py-4'>
									Con más de 50 años en Esperanza, somos la esencia del diseño y
									la artesanía en muebles. Fabricamos piezas únicas en serie y a
									medida, utilizando las maderas más nobles. Descubre la calidad
									y la distinción en cada rincón de tu hogar con Modikra.
								</p>
							</div>
						</div>
						<div className='flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0'>
							<div className='px-3 md:px-0'>
								<h3 className='text-left font-bold text-gray-900'>
									Redes Sociales
								</h3>
								<div className='w-full flex items-center py-4 mt-0'>
									<a
										href='https://www.facebook.com/profile.php?id=100054479050252'
										target='_blank'
										className='mx-2'>
										<svg
											className='w-6 h-6 fill-current'
											viewBox='0 0 24 24'>
											<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
										</svg>
									</a>
									<a
										href='https://www.instagram.com/modikramuebles/'
										target='_blank'
										className='mx-2'>
										<svg
											fill='#000000'
											className='w-6 h-6 fill-current'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path d='m16 12v-.001c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4c1.104 0 2.104-.448 2.828-1.171.723-.701 1.172-1.682 1.172-2.768 0-.021 0-.042-.001-.063v.003zm2.16 0c-.012 3.379-2.754 6.114-6.135 6.114-3.388 0-6.135-2.747-6.135-6.135s2.747-6.135 6.135-6.135c1.694 0 3.228.687 4.338 1.797 1.109 1.08 1.798 2.587 1.798 4.256 0 .036 0 .073-.001.109v-.005zm1.687-6.406v.002c0 .795-.645 1.44-1.44 1.44s-1.44-.645-1.44-1.44.645-1.44 1.44-1.44c.398 0 .758.161 1.018.422.256.251.415.601.415.988v.029-.001zm-7.84-3.44-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014c-1.044.425-1.857 1.237-2.272 2.254l-.01.027c-.119.318-.219.695-.284 1.083l-.005.037c-.082.469-.14 1.024-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649.008 1.195-.008 1.195 0 1.649.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043c.425 1.044 1.237 1.857 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024 1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014c1.044-.425 1.857-1.237 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649-.008-1.195.008-1.195 0-1.649-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073c-.07-.425-.17-.802-.303-1.163l.014.043c-.425-1.044-1.237-1.857-2.254-2.272l-.027-.01c-.318-.119-.695-.219-1.083-.284l-.037-.005c-.469-.082-1.024-.14-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zm11.993 9.846q0 3.578-.08 4.953c.005.101.009.219.009.337 0 3.667-2.973 6.64-6.64 6.64-.119 0-.237-.003-.354-.009l.016.001q-1.375.08-4.953.08t-4.953-.08c-.101.005-.219.009-.337.009-3.667 0-6.64-2.973-6.64-6.64 0-.119.003-.237.009-.354l-.001.016q-.08-1.375-.08-4.953t.08-4.953c-.005-.101-.009-.219-.009-.337 0-3.667 2.973-6.64 6.64-6.64.119 0 .237.003.354.009l-.016-.001q1.375-.08 4.953-.08t4.953.08c.101-.005.219-.009.337-.009 3.667 0 6.64 2.973 6.64 6.64 0 .119-.003.237-.009.354l.001-.016q.08 1.374.08 4.953z' />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>

			{/* WhatsApp Button */}
			<WhatsAppButton />
		</main>
	)
}

export default Catalogo
