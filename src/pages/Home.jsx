import Contacto from "../components/Contacto";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Faqs from "../components/Faqs";
import WhatsAppButton from "../components/WhatsApp";
import Instagram from "../components/Instagram";
import Features from "../components/Features";

const Home = () => {

	return (
		<main className='bg-gradient-to-r from-gray-100 to-gray-300'>
			<Hero />
			<Features />
			<Gallery  />
			<Faqs  />
			<Contacto />
			<Instagram />
			<WhatsAppButton />
		</main>
	);
};
export default Home;
