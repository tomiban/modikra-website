import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";




const Layout = () => {

	return (
		<>
			<NavBar  />
			
			<main>
				
				{<Outlet />}
			</main>
			<Footer />
		</>
	);
};
export default Layout;
