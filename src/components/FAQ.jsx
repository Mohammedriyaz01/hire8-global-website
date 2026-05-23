import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can Hire8 fill a position?",
      answer:
        "Depending on the role, we can typically provide qualified candidates within a few days.",
    },
    {
      question: "Do you provide contract staffing?",
      answer:
        "Yes. We offer contract, permanent, and project-based hiring solutions.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We support IT, Healthcare, Finance, Manufacturing, Retail, Logistics and more.",
    },
    {
      question: "How can employers contact Hire8?",
      answer:
        "You can reach us through our contact page, email, WhatsApp, or phone.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-blue-800 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-slate-50 rounded-2xl shadow overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-xl font-bold text-blue-800">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <FaMinus className="text-orange-500" />
                ) : (
                  <FaPlus className="text-orange-500" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 p-6 pt-0"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;