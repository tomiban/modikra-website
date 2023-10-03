import { createContext, useContext, useEffect, useState } from "react";
import useFirestore from "../config/useFirestore";

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const {
    getDataHome,
    getDataCatalogo,
    getCollection,
    getTotalElements,
    getCollectionByCategory,
    getMueble,
	  error,
	loading
  } = useFirestore();

  const [dataHome, setDataHome] = useState([]);
  const [dataCatalogo, setDataCatalogo] = useState([]);


  const fetchHome = async () => {
    const data = await getDataHome();
    setDataHome(data);

    // Almacena los datos en el Local Storage
    localStorage.setItem("dataHome", JSON.stringify(data));
  };

  const fetchCatalogo = async () => {
    const data = await getDataCatalogo();
    setDataCatalogo(data);

    // Almacena los datos en el Local Storage
    localStorage.setItem("dataCatalogo", JSON.stringify(data));
  };

  useEffect(() => {
    // Verifica si los datos ya están en el Local Storage al montar el componente
    const storedDataHome = localStorage.getItem("dataHome");
    const storedDataCatalogo = localStorage.getItem("dataCatalogo");

    if (storedDataHome && storedDataCatalogo) {
      // Si los datos están en el Local Storage, inicializa los estados con esos datos
      setDataHome(JSON.parse(storedDataHome));
      setDataCatalogo(JSON.parse(storedDataCatalogo));
    } else {
      // Si los datos no están en el Local Storage, realiza la llamada a la API
      fetchHome();
      fetchCatalogo();
    }

  }, []);


  if (error) return <p>{error}</p>;

  const [dataFaqs, dataGallery, dataNosotros] = dataHome;

  return (
    <DataContext.Provider
      value={{
        dataNosotros,
        dataGallery,
        dataFaqs,
        dataCatalogo,
        getCollection,
        getTotalElements,
        getCollectionByCategory,
        loading,
        getMueble,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
