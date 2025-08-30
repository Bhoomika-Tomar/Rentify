import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    review:
      "Rentify made finding my apartment so easy! The listings are genuine and the process was seamless.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Mehta",
    review:
      "I rented my property here and got amazing tenants within a week. Totally recommend Rentify!",
    stars: 4,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Rohit Verma",
    review:
      "The UI is clean, smooth, and very user-friendly. Rentify made renting stress-free.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        What Our Users Say
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="relative bg-white shadow-lg rounded-2xl p-6 w-full md:w-96 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 duration-300"
          >
            {/* Profile Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md -mt-14 mb-4"
            />

            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-3">
              {[...Array(t.stars)].map((_, i) => (
                <FaStar key={i} className="text-amber-500 text-lg" />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 italic mb-4">“{t.review}”</p>

            {/* Name */}
            <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <button className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium z-20 relative">
          ⬅ Prev
        </button>
        <button className="px-5 py-2 rounded-full bg-blue-900 hover:bg-blue-800 text-white font-medium z-20 relative">
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
