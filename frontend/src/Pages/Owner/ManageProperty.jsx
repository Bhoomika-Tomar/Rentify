import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import TitleOwner from '../../Components/Owner/TitleOwner';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ManageProperty = () => {
  const { isOwner, axios } = useAppContext();
  const [properties, setProperties] = useState([]);

  // Fetch owner properties
  const fetchOwnerProperties = async () => {
    try {
      const { data } = await axios.get('/api/owner/properties');
      if (data.success) {
        console.log('Fetched properties:', data.properties);
        setProperties(data.properties);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Toggle availability
  const toggleAvailability = async (propertyId) => {
    try {
      const { data } = await axios.post('/api/owner/toggle-property', {
        propertyId,
      });
      if (data.success) {
        toast.success(data.message);
        fetchOwnerProperties();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Delete property
  const deleteProperty = async (propertyId) => {
    try {
      const confirm = window.confirm(
        'Are you sure you want to delete this property?'
      );
      if (!confirm) return;

      const { data } = await axios.post('/api/owner/delete-property', {
        propertyId,
      });
      if (data.success) {
        toast.success(data.message);
        fetchOwnerProperties();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isOwner) fetchOwnerProperties();
  }, [isOwner]);

  return (
    <div className="px-4 pt-10 md:px-10 w-full bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <TitleOwner title="Manage Properties" />

      <div className="max-w-6xl w-full overflow-x-auto mt-6 border border-gray-200 rounded-xl shadow-lg bg-white">
        <table className="w-full border-collapse text-left text-sm min-w-[700px]">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-indigo-50 to-indigo-100">
            <tr>
              <th className="p-4 font-semibold text-indigo-700">Property</th>
              <th className="p-4 font-semibold text-indigo-700 max-md:hidden">
                Type
              </th>
              <th className="p-4 font-semibold text-indigo-700">Price/Day</th>
              <th className="p-4 font-semibold text-indigo-700 max-lg:hidden">
                Location
              </th>
              <th className="p-4 font-semibold text-indigo-700 max-md:hidden">
                Status
              </th>
              <th className="p-4 font-semibold text-indigo-700">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {properties.map((property, index) => (
              <tr
                key={index}
                className="border-t hover:bg-indigo-50 transition-all duration-300"
              >
                {/* Image + Info */}
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={property.image}
                    alt="property"
                    className="w-20 h-16 object-cover rounded-lg border shadow-sm"
                  />
                  <div>
                    <p className="font-semibold text-gray-800 capitalize">
                      {property.type}
                    </p>
                    <p className="text-xs text-gray-500">
                      {property.noOfBedroom
                        ? `${property.noOfBedroom} Bedrooms`
                        : 'N/A'}{' '}
                      | Built {property.year}
                    </p>
                  </div>
                </td>

                {/* Type */}
                <td className="p-4 max-md:hidden text-gray-700">
                  {property.type}
                </td>

                {/* Price */}
                <td className="p-4 font-semibold text-emerald-600">
                  ${property.pricePerDay}/day
                </td>

                {/* Location */}
                <td className="p-4 max-lg:hidden text-gray-600">
                  {property.location || 'Unknown'}
                </td>

                {/* Availability */}
                <td className="p-4 max-md:hidden">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full shadow-sm ${
                      property.isAvailable
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {property.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4 flex items-center gap-4">
                  <button
                    onClick={() => toggleAvailability(property._id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-50 hover:bg-indigo-100 transition"
                  >
                    <img
                      src={
                        property.isAvailable
                          ? assets.eye_close_icon
                          : assets.eye_icon
                      }
                      alt="toggle"
                      className="w-5 h-5"
                    />
                  </button>

                  <button
                    onClick={() => deleteProperty(property._id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 transition"
                  >
                    <img
                      src={assets.delete_icon}
                      alt="delete"
                      className="w-5 h-5"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperty;
