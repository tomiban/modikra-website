import { createContext, useContext, useEffect, useState } from "react";
import useFirestore from "../config/useFirestore";
import { stringify } from "postcss";
import Spinner from "../components/Spinner";
import { useLocation } from "react-router-dom";

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {
	const {
		getDataHome,
		dataHome,
		dataCatalogo,
		getDataCatalogo,
		getCollection,
		getAllCollections,
		error,
		loading,
	} = useFirestore();
	const [dataFaqs, dataGallery, dataNosotros] = dataHome;
	const [categoria, setCategoria] = useState();
	const [dataMuebles, setDataMuebles] = useState();

	const fetchData = async () => {
		/* if (categoria) {
			const data = await getCollection(categoria);
			setDataCategoria(data);
		} else {
		} */
		const data = await getAllCollections();
		setDataMuebles(data);
	};

	useEffect(() => {
		if (dataHome.length === 0) {
			getDataHome();
		}

		if (dataCatalogo.length === 0) {
			getDataCatalogo();
			fetchData();
		}
		
	}, []);

	//console.log(dataCatalago);
	if (loading) return <Spinner />;

	if (error) return <p>{error}</p>;

	return (
		<DataContext.Provider
			value={{
				dataNosotros,
				dataGallery,
				dataFaqs,
				dataCatalogo,
				dataMuebles,
				loading,
				setCategoria,
			}}>
			{children}
		</DataContext.Provider>
	);
};
export default DataProvider;
