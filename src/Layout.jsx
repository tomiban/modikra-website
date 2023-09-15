import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useNavigation } from "react-router-dom";
import Spinner from "./components/Spinner";



const Layout = () => {
	const navigation = useNavigation();
	return (
		<>
			<NavBar  />
			
			<main>
				{navigation.state === "loading" && <Spinner />}
				{<Outlet />}
			</main>
			<Footer />
		</>
	);
};
export default Layout;
