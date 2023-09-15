import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import DataProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	
		<DataProvider>
			<RouterProvider router={router}></RouterProvider>
		</DataProvider>
	
);
