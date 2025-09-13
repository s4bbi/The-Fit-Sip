import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import plansContent from "../../data/plansContent.js";

const Plans = () => {
  return (
    <section className="max-w-screen mx-auto bg-white px-6 md:px-20 my-8">
      <div>
        {/* Centered title and subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl text-gray-900 font-cgEB">
            Plans Designed Around Your{" "}
            <span className="text-green">Health Goals</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mt-2 font-sR max-w-md mx-auto">
            Loved by health-conscious families and professionals across Gurgaon
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
      </div>
    </section>
  );
};

export default Plans;
