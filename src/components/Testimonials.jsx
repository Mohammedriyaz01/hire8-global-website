import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";

function Testimonials() {
  const reviews = [
    {
      text: "Hire8 team understood our hiring requirements quickly and provided quality candidate profiles in a short time.",
      name: "Hiring Manager",
      company: "Partner Organization",
      initial: "H",
    },
    {
      text: "The communication was professional and the recruitment process was smooth from start to finish.",
      name: "Talent Acquisition",
      company: "Client Feedback",
      initial: "T",
    },
    {
      text: "We appreciate Hire8’s proactive approach in sourcing candidates for our open positions.",
      name: "Operations Lead",
      company: "Partner Company",
      initial: "O",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#07133a]">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <h2 className="text-center text-5xl md:text-6xl font-bold text-white mb-4">
          What Our Clients Say
        </h2>

        <p className="text-center text-slate-300 mb-16">
          Trusted recruitment solutions for growing businesses
        </p>

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>

              <div className="max-w-5xl mx-auto">

                <div className="relative overflow-hidden rounded-[40px] backdrop-blur-3xl bg-white/5 border border-white/10 p-10 md:p-16 shadow-2xl">

                  {/* Glass Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10"></div>

                  <div className="relative z-10">

                    {/* Stars */}
                    <div className="flex justify-center gap-2 mb-8 text-orange-400 text-xl">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    {/* Quote */}
                    <p className="text-center text-2xl md:text-3xl italic text-white leading-relaxed">
                      "{review.text}"
                    </p>

                    {/* Avatar */}
                    <div className="flex flex-col items-center mt-12">

                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        {review.initial}
                      </div>

                      <h3 className="mt-6 text-3xl font-bold text-white">
                        {review.name}
                      </h3>

                      <p className="text-slate-300 text-lg">
                        {review.company}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default Testimonials;