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
        error.message ||
          "Hubo un error al enviar el mensaje. Intente de nuevo"
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
      .min(15, "Mínimo 15 caracteres")
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
      validationSchema={validationSchema}
    >
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
          className="w-full mx-auto bg-white rounded-lg p-6 sm:p-10"
        >
          <h2 className="text-gray-900 text-lg mb-4 font-medium ">
            Envíanos un mensaje
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            No dejes pasar tus dudas, estamos aquí para ayudarte y crear el hogar perfecto junto a vos.
          </p>
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={values.user_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full py-2 px-3 rounded border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.user_name && touched.user_name && (
              <p className="text-xs text-red-500 mt-1">{errors.user_name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={values.user_email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full py-2 px-3 rounded border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.user_email && touched.user_email && (
              <p className="text-xs text-red-500 mt-1">{errors.user_email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-32 py-2 px-3 rounded border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            />
            {errors.message && touched.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Envíar
          </button>
          {modalOpen ? (
            <Modal modalOpen={modalOpen} closeModal={closeModal} />
          ) : (
            <p className="text-xs text-center text-green-500 font-bold mt-3">
              {error}
            </p>
          )}
        </form>
      )}
    </Formik>
  );
};

export default Form;
