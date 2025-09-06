import React, { useEffect, useState } from "react";
import TitleOwner from "../../Components/Owner/TitleOwner";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ManageBooking = () => {
  const { axios } = useAppContext();
  const [bookings, setBookings] = useState([]);

  const fetchOwnerBookings = async () => {
    try {
      const { data } = await axios.get("/api/bookings/owner");
      console.log("data", data);
      data.success ? setBookings(data.bookings) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeBookingStatus = async (bookingId, status) => {
    try {
      const { data } = await axios.post("/api/bookings/change-status", {
        bookingId,
        status,
      });
      if (data.success) {
        toast.success(data.message || "Status updated");
        fetchOwnerBookings();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOwnerBookings();
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 w-full bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <TitleOwner title="Manage Bookings" />

      {/* Table for md+ screens */}
      <div className="hidden md:block max-w-6xl w-full overflow-x-auto mt-6 border border-gray-200 rounded-xl shadow-lg bg-white">
        <table className="w-full border-collapse text-left text-sm min-w-[700px]">
          <thead className="bg-gradient-to-r from-indigo-50 to-indigo-100">
            <tr>
              <th className="p-4 font-semibold text-indigo-700">Property</th>
              <th className="p-4 font-semibold text-indigo-700">Booking Days</th>
              <th className="p-4 font-semibold text-indigo-700">Total</th>
              <th className="p-4 font-semibold text-indigo-700">Payment</th>
              <th className="p-4 font-semibold text-indigo-700">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => {
              const item = booking.property || booking.car || {};
              return (
                <tr
                  key={index}
                  className="border-t hover:bg-indigo-50 transition-all duration-300"
                >
                  {/* Property */}
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt="property"
                      className="w-16 h-12 object-cover rounded-lg border shadow-sm"
                    />
                    <p className="font-medium text-gray-800">
                      {item.model || item.type}
                    </p>
                  </td>

                  {/* Dates */}
                  <td className="p-4 text-sm text-gray-600">
                    {new Date(booking.startDate).toLocaleDateString()} →{" "}
                    {new Date(booking.returnDate).toLocaleDateString()}
                  </td>

                  {/* Price */}
                  <td className="p-4 font-semibold text-emerald-600">
                  ${booking.price}
                  </td>

                  {/* Payment */}
                  <td className="p-4">
                    <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full hover:bg-red-600 transition">
                      Offline
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    {booking.status === "pending" ? (
                      <select
                        onChange={(e) =>
                          changeBookingStatus(booking._id, e.target.value)
                        }
                        className="border rounded-md p-2 text-sm cursor-pointer hover:border-indigo-400 focus:ring-2 focus:ring-indigo-300 transition"
                        value={booking.status}
                      >
                        <option value="pending">Pending</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="confirmed">Confirmed</option>
                      </select>
                    ) : (
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full shadow-sm ${
                          booking.status === "confirmed"
                            ? "bg-emerald-100 text-emerald-700"
                            : booking.status === "cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Cards for mobile */}
      <div className="md:hidden mt-6 space-y-4">
        {bookings.map((booking, index) => {
          const item = booking.property || booking.car || {};
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 shadow-md bg-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt="property/car"
                  className="w-20 h-14 object-cover rounded-md border shadow-sm"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {item.model || item.type}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(booking.startDate).toLocaleDateString()} →{" "}
                    {new Date(booking.returnDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <p className="mt-2 font-semibold text-emerald-600">
                ₹{booking.price}
              </p>

              <div className="flex justify-between items-center mt-3">
                <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full hover:bg-red-600 transition">
                  Offline
                </button>

                {booking.status === "pending" ? (
                  <select
                    onChange={(e) =>
                      changeBookingStatus(booking._id, e.target.value)
                    }
                    className="border rounded-md p-2 text-sm cursor-pointer hover:border-indigo-400 focus:ring-2 focus:ring-indigo-300 transition"
                    value={booking.status}
                  >
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="confirmed">Confirmed</option>
                  </select>
                ) : (
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full shadow-sm ${
                      booking.status === "confirmed"
                        ? "bg-emerald-100 text-emerald-700"
                        : booking.status === "cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageBooking;

