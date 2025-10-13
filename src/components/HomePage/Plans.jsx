import React from "react";
import { FaChevronRight, FaBookOpen, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import plansContent from "../../data/plansContent.js";

const Plans = () => {
  return (
    <section className=" bg-white px-6 md:px-20 my-8">
      <div className="max-w-screen mx-auto">
        {/* Centered title and subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-gray-900 font-cgEB">
            Choose Weekly Plans Designed Around Your{" "}
            <span className="text-green">Health Goals</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg mt-2 font-sR max-w-md mx-auto">
            Every morning, 2,000+ subscribers choose fresh living and better
            health.
          </p>
        </div>

        {/* Scrollable slider */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2 scroll-smooth snap-x snap-mandatory">
          {plansContent.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-60 md:w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col snap-start"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-4 flex flex-col h-full">
                <h3 className="font-sB text-lg text-gray-900 mb-8">
                  {item.title}
                </h3>
                <Link
                  to="/weekly-plans"
                  state={{ tab: item.link }} // pass tab key via state
                  className="w-40 bg-green text-white px-4 py-2 rounded-full 
                             flex items-center gap-2 hover:bg-green-600 transition 
                             text-sm font-sB mt-auto text-center justify-center"
                >
                  EXPLORE NOW <FaChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu + Contact */}
        <div className="text-center mt-10">
          <a
            href="https://pdflink.to/3dbf1bb9/" // 🔗 replace with actual Google Drive PDF link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green text-white px-6 md:px-12 py-3 rounded-full font-sB 
                       hover:bg-green-900 transition shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            <FaBookOpen className="h-5 w-5" />
            Explore Our Full Menu
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <h2 className="text-2xl md:text-3xl text-gray-900 font-cgEB">
              Still confused?
            </h2>

            <a
              href="https://wa.link/24skdz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green text-white px-4 py-2 rounded-full font-sB 
               hover:bg-orange-600 transition shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              <FaWhatsapp className="h-4 w-4" />
              Contact Us
            </a>

            <h2 className="text-2xl sm:text-3xl text-gray-900 font-cgEB">
              anytime!!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
