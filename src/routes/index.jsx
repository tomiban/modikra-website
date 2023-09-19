import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import NotFound from "../pages/NotFound";
import Layout from "../Layout";
import DetailProduct from "../pages/DetailProduct";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/catalogo",
				element: <Catalogo />,
			},
			{
				path: "/catalogo/:categoria",
				element: <Catalogo />,
			},
			{
				path: "/catalogo/:categoria/:producto",
				element: <DetailProduct />,
			},
		],
	},
]);
