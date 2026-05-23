import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xliq46v", // Replace with your Service ID
        "template_obz111a", // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "aTkTyzXiQGJLiCMUk" // Replace with your Public Key
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Contact Us
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          We'd love to hear from you. Get in touch with our team.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div>

            <h2 className="text-4xl font-bold text-blue-800 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-orange-500 text-2xl" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a
                      href="tel:+919363527858"
                      className="text-gray-600 hover:text-orange-500"
                    >
                      +91 93635 27858
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-orange-500 text-2xl" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a
                      href="mailto:hire8global@gmail.com"
                      className="text-gray-600 hover:text-orange-500"
                    >
                      hire8global@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p>Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-bold mb-4">
                  Follow Us
                </h3>

                <div className="flex gap-5 text-3xl">

                  <a
                    href="https://www.linkedin.com/company/117764571"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:scale-110 transition"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://www.instagram.com/hire8global/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink-500 hover:scale-110 transition"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://wa.me/919363527858"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500 hover:scale-110 transition"
                  >
                    <FaWhatsapp />
                  </a>

                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-4"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-4"
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-4"
                required
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-4"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl w-full"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-center text-white">

        <h2 className="text-5xl font-bold">
          Let's Build Your Dream Team
        </h2>

        <p className="mt-4 text-lg">
          Partner with Hire8 Global Staffing Services today.
        </p>

        <a
          href="tel:+919363527858"
          className="inline-block mt-8 bg-white text-blue-800 px-8 py-4 rounded-xl font-bold"
        >
          Contact Now
        </a>

      </section>

      <Footer />
    </>
  );
}

export default Contact;