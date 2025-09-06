import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const MyBookings = () => {
  const { axios, user } = useAppContext();
  const [bookings, setBookings] = useState([]);

  const fetchMyBookings = async () => {
    try {
      const { data } = await axios.get('/api/bookings/user');
      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    user && fetchMyBookings();
  }, [user]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 max-w-7xl mx-auto text-gray-800">
      <Title
        title="My Bookings"
        subTitle="View and manage all your property bookings"
        align="left"
      />

      <div className="mt-10 space-y-8">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => {
            const property = booking.property || booking.car || {};
            const start = booking.pickupDate || booking.startDate;
            const end = booking.returnDate;
            const status = booking.status || 'pending';

            return (
              <div
                key={booking._id || index}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-white/80 via-blue-50/50 to-white/60 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 animate-fadeIn"
              >
                {/* Property Image */}
                <div className="md:col-span-1">
                  <img
                    src={property.image}
                    alt={property.type || 'Property'}
                    className="w-full aspect-video object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Property Info */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {property.type || 'Property'}
                    </h2>
                    <p className="text-gray-500 mt-2 leading-relaxed">
                      {property.year && <span>{property.year} • </span>}
                      {property.description} • {property.location}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start gap-4 mt-6 text-xs sm:text-sm">
                    {/* Booking Number */}
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full shadow-sm">
                      Booking #{index + 1}
                    </span>

                    {/* Booking Status */}
                    <span
                      className={`px-3 py-1 rounded-full font-medium shadow-sm ${
                        status === 'confirmed'
                          ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                          : status === 'pending'
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
                          : 'bg-gradient-to-r from-red-400 to-red-600 text-white'
                      }`}
                    >
                      {status}
                    </span>

                    {/* Rental Dates */}
                    <div className="flex items-start gap-2 bg-white/70 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                      <img
                        src={assets.calendar_icon_colored}
                        alt="calendar"
                        className="w-4 h-4 mt-0.5"
                      />
                      <div>
                        <p className="text-gray-500 text-xs">Rental Period</p>
                        <p className="font-medium">
                          {start?.split('T')[0]} → {end?.split('T')[0]}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-2 bg-white/70 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                      <img
                        src={assets.location_icon_colored}
                        alt="location"
                        className="w-4 h-4 mt-0.5"
                      />
                      <div>
                        <p className="text-gray-500 text-xs">Location</p>
                        <p className="font-medium">{property.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Info */}
                <div className="md:col-span-1 flex flex-col justify-between gap-6 text-right md:text-left">
                  <div>
                    <p className="text-gray-500">Total Price</p>
                    <h1 className="text-3xl font-bold text-blue-600">
                      ${booking.price}
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                      Booked on {booking.createdAt.split('T')[0]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No bookings found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
