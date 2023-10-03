import { useDataContext } from "../context/UserContext.jsx";
import Accordion from "./Accordion.jsx";
import Spinner from "./Spinner.jsx";
const Faqs = () => {
  const { dataFaqs } = useDataContext();
  const { title, heading, cards } = dataFaqs?.faqs || {};

  if (!dataFaqs) return <Spinner />;

  return (
    <section className="pt-4 sm:py-8" id="preguntas">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 ">
        <div className="text-center mb-10 lg:mb-8">
          <h2 className="text-2xl font-bold text-[#001A49] lg:text-4xl text-center py-4 sm:py-6 md:text-5xl">
            {title}
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-base sm:text-lg text-gray-500">
            {heading}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="hs-accordion-group">
            {cards.map((item) => (
              <div
                key={item.id}
                className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-4 sm:p-6 dark:hs-accordion-active:bg-white/[.05] active"
              >
                <Accordion item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
