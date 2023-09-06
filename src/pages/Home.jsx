import Contacto from "../components/Contacto";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Nosotros from "../components/Nosotros";
import Faqs from "../components/Faqs";
import WhatsAppButton from "../components/WhatsApp";
import Instagram from "../components/Instagram";

const Home = () => {

	return (
		<main className='bg-gradient-to-r from-gray-100 to-gray-300'>
			<Hero />
			<Nosotros />
			<Gallery  />
			<Faqs  />
			<Contacto />
			<Instagram />
			<WhatsAppButton />
		</main>
	);
};
export default Home;
