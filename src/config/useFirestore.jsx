import { useEffect, useState } from "react";
import { db, storage } from "./firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
} from "firebase/firestore";

import { coleccionesMuebles } from "../data/data";

const useFirestore = () => {
	const [error, setError] = useState();
	const [dataHome, setDataHome] = useState([]);
	const [dataCatalogo, setDataCatalogo] = useState([]);
	const [dataColeccion, setDataColeccion] = useState([]);
	const [allCollections, setAllCollections] = useState([]);
	const [muebles, setMuebles] = useState([]);

	const [loading, setLoading] = useState(false);

	const getDataHome = async () => {
		try {
			setLoading(true);
			const querySnap = await getDocs(collection(db, "dataHome"));
			const homeData = querySnap.docs.map((doc) => doc.data());
			setDataHome(homeData);
		} catch (error) {
			setError(error);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const getDataCatalogo = async () => {
		try {
			setLoading(true);
			const querySnap = await getDocs(collection(db, "dataCatalogo"));
			const catalogoData = querySnap.docs.map((doc) => doc.data());
			setDataCatalogo(catalogoData);
		} catch (error) {
			setError(error);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const getCollection = async (categoria) => {
		try {
			setLoading(true);
			const coleccionRef = collection(
				db,
				"dataCatalogo",
				"catalogo",
				categoria
			);
			const querySnap = await getDocs(coleccionRef);
			const coleccionData = querySnap.docs.map((doc) => ({
				id: doc.id, // Agrega el ID del documento como propiedad "id"
				...doc.data(), // Agrega los datos del documento
			}));
			return coleccionData; // En lugar de setear el estado, retornamos los datos.
		} catch (error) {
			setError(error);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const getAllCollections = async () => {
		let allMuebles = [];

		try {
			const collections = [
				"Escritorios",
				"Mesas",
				"Sillas",
				"Bahiuts",
				"Camas",
				"Armarios",
			];

			for (const name of collections) {
				setLoading(true);
				const coleccionRef = collection(db, "dataCatalogo", "catalogo", name);
				const querySnap = await getDocs(coleccionRef);
				const data = querySnap.docs.map((doc) => ({
					id: doc.id, // Agrega el ID del documento como propiedad "id"
					...doc.data(), // Agrega los datos del documento
				}));
				allMuebles = [...allMuebles, ...data];
			}

			return allMuebles; // En lugar de setear el estado, retornamos los datos.
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const cargarColecciones = async (coleccionMuebles) => {
		for (const coleccion in coleccionMuebles) {
			if (Object.hasOwnProperty.call(coleccionMuebles, coleccion)) {
				const arregloMuebles = coleccionMuebles[coleccion];
				const coleccionRef = collection(
					db,
					"dataCatalogo",
					"catalogo",
					coleccion
				);

				for (const item of arregloMuebles) {
					try {
						console.log(`Agregando ${item.titulo} a ${coleccion}`);
						const imagenURLs = await Promise.all(
							item.img.map(async (img, index) => {
								const storageRef = ref(
									storage,
									`muebles/product-template-${index + 1}.jpg`
								);
								const imagenURL = await getDownloadURL(storageRef);
								return imagenURL;
							})
						);

						// Crear un nuevo objeto con las URL de descarga de las imágenes
						const muebleConImagen = {
							...item,
							img: imagenURLs, // Aquí almacenamos el arreglo de URL de descarga
						};

						// Agregar el documento con las URL de descarga a la colección específica
						await addDoc(coleccionRef, muebleConImagen);
					} catch (error) {
						console.error(error);
					}
				}
			}
		}
	};

	useEffect(() => {
		//cargarColecciones(coleccionesMuebles);
	}, []);

	return {
		dataHome,
		getDataHome,
		dataCatalogo,
		getDataCatalogo,
		dataColeccion,
		getCollection,
		getAllCollections,
		allCollections,
		error,
		loading,
	};
};
export default useFirestore;
