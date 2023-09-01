import Contacto from "../components/Contacto";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Nosotros from "../components/Nosotros";
import Faqs from "../components/Faqs";
import WhatsAppButton from "../components/WhatsApp";

const Home = () => {
	return (
		<main className='bg-gradient-to-r from-gray-100 to-gray-300'>
			<Hero />
			<Nosotros />
			<Gallery />
			<Faqs />
			<Contacto />
			<WhatsAppButton />
		</main>
	);
};
export default Home;
