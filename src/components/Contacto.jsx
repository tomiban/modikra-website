import Form from "./Form";

const Contacto = () => {
  return (
    <section className="py-6 sm:py-8" id="contacto">
      <div className="mx-auto px-4 sm:px-8  ">
        <div className="text-center mb-10 lg:mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#001A49] text-center py-4 sm:py-8 md:text-5xl">
            Contacto
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-base sm:text-xl text-gray-500">
            Pasa a conocer nuestro local comercial o déjanos un mensaje, tu satisfacción es nuestro compromiso.
          </p>
        </div>
        <div className="md:container px-4 mx-auto flex flex-col-reverse md:flex-row sm:flex-nowrap flex-wrap gap-4 sm:gap-8">
          <Form />
          <div className="bg-gray-300 rounded-lg overflow-hidden p-4 sm:p-8 flex items-center justify-center relative w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.2655435863135!2d-60.93195956298216!3d-31.43801154139174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5136a1e102cdd%3A0xf3a644f8e210b28d!2sGabarret%201824%2C%20S3080AQL%20Esperanza%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1692899783164!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ filter: "grayscale(0) contrast(1) opacity(0.9)" }}
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
       <div className="bg-white relative flex flex-wrap p-4 mt-14  md:top-40 sm:mr-4  rounded shadow-md sm:max-w-md md:max-w-lg">
  <div className="w-full sm:w-1/2 px-2 sm:px-4">
    <h2 className="text-sm sm:text-base font-semibold text-gray-900 tracking-wider">
      DIRECCIÓN
    </h2>
    <p className="mt-1 text-xs sm:text-sm">
      Nos encontramos en la ciudad de Esperanza, Provincia de Santa Fe, en la calle Gabarret 1824.
    </p>
  </div>
  <div className="w-full sm:w-1/2 px-2 sm:px-4 mt-4 sm:mt-0">
    <h2 className="text-sm sm:text-base font-semibold text-gray-900 tracking-wider">
      EMAIL
    </h2>
    <a
      className="text-indigo-500 text-xs sm:text-sm leading-relaxed"
      href="mailto:modikramuebleria@gmail.com"
    >
      modikramuebleria@gmail.com
    </a>
    <h2 className="text-sm sm:text-base font-semibold text-gray-900 tracking-wider mt-4">
      TELÉFONO
    </h2>
    <p className="text-xs sm:text-sm leading-relaxed">3496-547076</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
