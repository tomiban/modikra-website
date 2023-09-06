import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const useFirestore = () => {
	const [error, setError] = useState();
	const [data, setData] = useState([]);
	const [imagenes, setImagenes] = useState([]);
	const [loading, setLoading] = useState(false);
	// Objeto JSON que representa la colección

	const getData = async () => {
		try {
			setLoading(true);
			const querySnap = await getDocs(collection(db, "dataHome"));
			const homeData = querySnap.docs.map((doc) => doc.data());
			setData(homeData);
		} catch (error) {
			setError(error);
			console.log(error);
		} finally {
			setLoading(false)
		}
	};


	useEffect(() => {
		getData();
	}, []);

	
	return { data, error, loading };
};
export default useFirestore;
