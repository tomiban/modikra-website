import { Link, useParams } from "react-router-dom"
import { useDataContext } from "../context/UserContext"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "../index.css"
import { Navigation, Thumbs, FreeMode } from "swiper/modules"
import Tag from "../components/Tag"
import WhatsAppButton from "../components/WhatsApp"
import { Breadcrumb } from "../components/Breadcrumb"
import useFirestore from "../config/useFirestore"
import Spinner from "../components/Spinner"

const DetailProduct = () => {
	const { getMueble } = useFirestore()
	const { categoria: paramCategoria, producto: paramProducto } = useParams()
	const [product, setProduct] = useState()
	const [activeThumb, setActiveThumb] = useState(null)

	const fetchMueble = async (id) => {
		return await getMueble(id)
	}

	useEffect(() => {
		const searchProduct = async (paramProducto) => {
			const productId = paramProducto.split("_").pop()

			if (!product) {
				const fetchProduct = await fetchMueble(productId)
				setProduct(fetchProduct)
				return
			}
		}

		searchProduct(paramProducto)
	}, [paramCategoria, paramProducto])

	
	if (!product) {
		return <Spinner />
	}

	return (
		<main className='min-h-screen py-10 mx-auto'>
			<div className='grid grid-cols-2 my-20 gap-10 px-10'>
				 <div className='col-span-2'>
					<Breadcrumb
						text={{ categoria: product.categoria, titulo: product.titulo }}
					/>
				</div>
				<div className='col-span-2 sm:col-span-1 rounded-lg shadow-lg mb-28 sm:mb-0 z-0'>
					<Swiper
  loop={true}
  spaceBetween={10}
  navigation={true}
  thumbs={{ swiper: activeThumb }}
  grabCursor={true}
  modules={[FreeMode, Navigation, Thumbs]}
  className='h-[26rem]'
>
  {product.img.map((img, index) => (
    <SwiperSlide key={index} className='z-0'>
      <div className='relative overflow-hidden w-full h-full aspect-w-4 aspect-h-3 bg-gray-200'>
        <img
          src={img}
          alt={product.titulo}
          className='w-full h-full object-contain absolute top-0 left-0'
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
					<div className='mt-2'>
						<Swiper
							onSwiper={setActiveThumb}
							loop={true}
							spaceBetween={10}
							slidesPerView={3}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]}
							className='h-28 mySwiper z-0'>
							{product.img.map((img, index) => (
								<SwiperSlide
									key={index}
									className=' border active:border-orange-500'>
									<div
										className={`relative overflow-hidden w-full h-full cursor-pointer`}>
										<img
											src={img}
											alt={product.titulo}
											className='w-full h-full object-cover  absolute top-0 left-0 '
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>

				<div className='col-span-2 sm:col-span-1 mx-auto flex flex-col justify-between font-montserrat '>
					<div>
						<h1 className='text-2xl sm:text-3xl font-semibold sm:px-10 '>
							{product.titulo}
						</h1>
						<p className='text-lg py-3 sm:px-10'>{product.descripcion}</p>
						<p className='text-lg py-3 sm:px-10'>
							<span className='font-semibold'>Medidas:</span>{" "}
							<span>
								{product.medidas.alto} x {product.medidas.ancho}
							</span>
						</p>
						<p className='text-lg py-3 sm:px-10'>
							<span className='font-semibold'>Lustre:</span> {product.color}
						</p>
						<p className='text-lg py-3 sm:px-10'>
							{" "}
							<span className='font-semibold'>Categoría:</span>{" "}
							<Link
								to={"/catalogo/" + product.categoria.toLowerCase()}
								className='hover:text-indigo-500 capitalize'>
								{product.categoria}{" "}
							</Link>{" "}
						</p>
						<Link
							to={"#"}
							className='text-lg py-3 sm:px-10 flex items-center space-x-2'>
							{product.tags.map((tag, index) => (
								<Tag
									key={index}
									text={tag}
								/>
							))}
						</Link>
					</div>
					<div className='mt-4  sm:px-10'>
						<WhatsAppButton
							text={"Consultar"}
							type={"outline"}
							data={`Hola! Estoy interesado en el mueble ${product.titulo}, quiero hablar con un vendedor. Gracias...`}
						/>
					</div>
				</div> 
			</div>
			<WhatsAppButton />
		</main>
	)
}

export default DetailProduct
