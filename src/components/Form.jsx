import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik } from "formik";
import * as Yup from "yup";
import Modal from "./Modal";

const Form = () => {
	const [error, setError] = useState();

	const sendEmail = async (values) => {
		await emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				values,
				import.meta.env.VITE_EMAILJS_USER_ID
			)
			.then(
				(result) => {
					console.log(result);
				},
				(error) => {
					console.log(error);
				}
			);
	};

	const onSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			sendEmail(values);
			openModal();
			resetForm();
		} catch (error) {
			setError(
				error.message || "Hubo un error al enviar el mensaje. Intente de nuevo"
			);
		} finally {
			setSubmitting(false);
		}
	};

	const validationSchema = Yup.object().shape({
		user_name: Yup.string().trim().required("Nombre requerido"),
		user_email: Yup.string()
			.email("Email no válido")
			.required("Email requerido"),
		message: Yup.string()
			.trim()
			.min(15, "Mínimo 15 carácteres")
			.required("Mensaje requerido"),
	});

	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<Formik
			initialValues={{ user_name: "", user_email: "", message: "" }}
			onSubmit={onSubmit}
			validationSchema={validationSchema}>
			{({
				values,
				handleSubmit,
				handleChange,
				errors,
				touched,
				handleBlur,
				isSubmitting,
			}) => (
				<form
					onSubmit={handleSubmit}
					className='lg:w-2/5 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:p-8 mt-8 md:mt-0 rounded-md p-6'>
					<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
						Envíanos un mensaje
					</h2>
					<p className='leading-relaxed mb-5 text-gray-600'>
						No dejes pasar tus dudas, estamos aquí para ayudarte y crear el
						hogar perfecto junto a vos.
					</p>
					<div className='relative mb-4'>
						<label
							htmlFor='user_name'
							className='leading-7 text-sm text-gray-600'>
							Nombre
						</label>
						<input
							type='text'
							id='user_name'
							name='user_name'
							value={values.user_name}
							onChange={handleChange}
							onBlur={handleBlur}
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
						{errors.user_name && touched.user_name && errors.user_name}
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='user_email'
							className='leading-7 text-sm text-gray-600'>
							Email
						</label>
						<input
							type='email'
							id='user_email'
							name='user_email'
							value={values.user_email}
							onChange={handleChange}
							onBlur={handleBlur}
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
						{errors.user_email && touched.user_email && errors.user_email}
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='message'
							className='leading-7 text-sm text-gray-600'>
							Mensaje
						</label>
						<textarea
							id='message'
							name='message'
							value={values.message}
							onChange={handleChange}
							onBlur={handleBlur}
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
							defaultValue={""}
						/>
						{errors.message && touched.message && errors.message}
					</div>
					<button
						type='submit'
						disabled={isSubmitting}
						className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
						Envíar
					</button>

					{modalOpen ? (
						<Modal
							modalOpen={modalOpen}
							closeModal={closeModal}
						/>
					) : (
						<p className='text-xs  mt-3 text-center text-green-500 font-bold'>
							{error}
						</p>
					)}
				</form>
			)}
		</Formik>
	);
};
export default Form;
