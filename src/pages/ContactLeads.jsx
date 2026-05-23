import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function ContactLeads() {
  const leads = [
    {
      id: 1,
      name: "Hire8 Global Staffing Services",
      email: "hire8global@gmail.com",
      phone: "+91 93635 27858",
      location: "Chennai, Tamil Nadu, India",
      instagram: "https://www.instagram.com/hire8global/",
      linkedin: "https://www.linkedin.com/company/117764571",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Contact Leads
      </h1>

      <div className="grid gap-6">

        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white rounded-3xl shadow-lg p-8"
          >

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-slate-800">
                Contact Information
              </h2>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                {lead.status}
              </span>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex items-center gap-4">
                <FaUser className="text-orange-500 text-xl" />
                <span>{lead.name}</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <span>{lead.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-green-500 text-xl" />
                <span>{lead.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <span>{lead.location}</span>
              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href={lead.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaInstagram />
                Instagram
              </a>

              <a
                href={lead.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ContactLeads;