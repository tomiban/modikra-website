import { Link, useParams } from "react-router-dom";
import { useDataContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../index.css";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import Tag from "../components/Tag";
import WhatsAppButton from "../components/WhatsApp";
import { Breadcrumb } from "../components/Breadcrumb";

const DetailProduct = () => {
	const { mueblesPorCategoria, loading } = useDataContext();
	const { categoria: paramCategoria, producto: paramProducto } = useParams();
	const [product, setProduct] = useState(null);
	const [activeThumb, setActiveThumb] = useState(null);

	const searchProduct = (paramCategoria, paramProducto) => {
		if (paramProducto) {
			const partes = paramProducto.split("_");
			const id = partes[partes.length - 1];
			const category = mueblesPorCategoria[paramCategoria];
			const product = category?.find((item) => item.id === id);
			setProduct(product);
		}
	};

	useEffect(() => {
		searchProduct(paramCategoria, paramProducto);
	}, [paramCategoria, paramProducto]);

	console.log(product);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!product) {
		return <p>Producto no encontrado</p>;
	}

	return (
		<main className='min-h-screen py-20 mx-auto'>
			<div className='grid grid-cols-2 my-20 gap-10 px-10'>
				<div className='col-span-2'>
					<Breadcrumb
						text={{ categoria: product.categoria, titulo: product.titulo }}
					/>
				</div>
				<div className='col-span-2 sm:col-span-1 rounded-lg shadow-lg'>
					<Swiper
						loop={true}
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: activeThumb }}
						grabCursor={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className='h-80'>
						{product.img.map((img, index) => (
							<SwiperSlide
								key={index}
								className=''>
								<div className='relative overflow-hidden w-full h-80'>
									<img
										src={img}
										alt={product.titulo}
										className='w-full h-full object-cover absolute top-0 left-0'
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
							className='h-28 mySwiper'>
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

				<div className='col-span-2 sm:col-span-1 mx-auto flex flex-col justify-between font-montserrat'>
					<div>
						<h1 className='text-3xl font-semibold sm:px-10 '>{product.titulo}</h1>
						<p className='text-lg py-3 sm:px-10'>{product.descripcion}</p>
						<p className='text-lg py-3 sm:px-10'>
							<span className='font-semibold'>Medidas:</span> <span>{product.medidas.alto} x {product.medidas.ancho}</span> 
						</p>
						<p className='text-lg py-3 sm:px-10'>
							<span className='font-semibold'>Lustre:</span> {product.color}
						</p>
						<p className='text-lg py-3 sm:px-10'>
							{" "}
							<span className='font-semibold'>Categoría:</span>{" "}
							<Link
								to={"/catalogo/" + product.categoria.toLowerCase()}
								className='hover:text-indigo-500'>
								{product.categoria}{" "}
							</Link>{" "}
						</p>
						<Link
							to={"#"}
							className='text-lg py-3 sm:px-10 flex items-center space-x-2'>
							{product.tags.map((tag) => (
								<Tag text={tag} />
							))}
						</Link>
					</div>
					<div className='mt-4 sm:mt-0 sm:px-10'>
						<WhatsAppButton
							text={"Consultar"}
							type={"outline"}
						data={`Hola! Estoy interesado en el mueble ${product.titulo}, quiero hablar con un representante. Gracias...`}
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DetailProduct;
