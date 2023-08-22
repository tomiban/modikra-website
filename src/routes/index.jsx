import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import NotFound from "../pages/NotFound";
import Layout from "../layout";

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
		],
	},
]);
