import { useEffect, useState } from "react";
import { db, storage } from "./firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	startAt,
	where,
} from "firebase/firestore";

import { coleccionesMuebles } from "../data/data";

const useFirestore = () => {
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const [lastDoc, setLastDoc] = useState([null]);
	const [lastPage, setLastPage] = useState(1);

	const getDataHome = async () => {
		try {
			setLoading(true);
			const querySnap = await getDocs(collection(db, "dataHome"));
			const homeData = querySnap.docs.map((doc) => doc.data());
			return homeData;
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
			return catalogoData;
		} catch (error) {
			setError(error);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const updatelastDoc = (lastDocs, lastVisible) => lastDocs.some((lastDoc) => lastDoc?.id == lastVisible.id) ? [...lastDoc] : [...lastDoc, lastVisible];
	
	const getCollection = async (currentPage) => {
		try {
			setLoading(true);
			const collectionRef = collection(db, "catalogo");
			const elementosPorPagina = 12;

			let queryRef;

			if (currentPage == 1) {
				queryRef = query(
					collectionRef,
					orderBy("titulo"),
					limit(elementosPorPagina)
				);
			} else {
				queryRef = query(
					collectionRef,
					orderBy("titulo"),
					limit(elementosPorPagina),
					startAt(lastDoc[currentPage - 1])
				);
			}

			// Crear una consulta con límite y ordenar por "titulo"

			const querySnap = await getDocs(queryRef);

			const coleccionData = querySnap.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			const lastVisible = querySnap.docs[querySnap.docs.length - 1];

			setLastDoc(updatelastDoc(lastDoc, lastVisible));

			return coleccionData;
		} catch (error) {
			setError(error);
			console.error(error);
			return [];
		} finally {
			setLoading(false);
		}
	};

	
	const getCollectionByCategory = async (categoria) => {
		try {
			setLoading(true);
			const collectionRef = collection(db, "catalogo");
			const queryRef = query(
				collectionRef,
				where("categoria", "==", categoria)
			);
			const querySnap = await getDocs(queryRef);

			const categoryData = querySnap.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			return categoryData;
		} catch (error) {
			setError(error);
			console.error(error);
			setLoading(false);
			return [];
		} finally {
			setLoading(false);
		}
	};

	const getTotalElements = async () => {
		try {
			const coleccionRef = collection(db, "catalogo");
			const querySnap = await getDocs(coleccionRef);
			return querySnap.size; // Devuelve la cantidad de documentos en la colección
		} catch (error) {
			console.error("Error al obtener el número total de elementos:", error);
			return 0;
		}
	};

	const getMueble = async (id) => {
		try {
			setLoading(true);
			const muebleDocRef = doc(db, "catalogo", id); // Donde "catalogo" es el nombre de la colección

			const docSnap = await getDoc(muebleDocRef);

			if (docSnap.exists()) {
				const mueble = {
					id: docSnap.id,
					...docSnap.data(),
				};

				return mueble;
			} else {
				// Manejar el caso donde no se encuentra ningún documento
				return null;
			}
		} catch (error) {
			setError(error);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const cargarColecciones = async (coleccionMuebles) => {
		const coleccionRef = collection(db, "catalogo");

		for (const item of coleccionMuebles) {
			try {
				console.log(`Agregando ${item.titulo} a ${coleccionRef}`);
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
	};

	return {
		getDataHome,
		getDataCatalogo,
		getCollection,
		getCollectionByCategory,
		getTotalElements,
		getMueble,
		error,
		loading,
	};
};
export default useFirestore;
