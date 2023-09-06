import { createContext, useContext, useEffect, useState } from "react";
import useFirestore from "../config/useFirestore";
import { stringify } from "postcss";
import Spinner from "../components/Spinner";

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {
	const { data, error, loading } = useFirestore();
	const [dataFaqs, dataGallery, dataNosotros] = data;

	
	if (loading) return <Spinner />;

	if (error) return <p>{error}</p>;

	return (
		<DataContext.Provider
			value={{ dataNosotros, dataGallery, dataFaqs, loading }}>
			{children}
		</DataContext.Provider>
	);
};
export default DataProvider;
