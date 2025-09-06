import React, { useState } from "react";
import TitleOwner from "../../Components/Owner/TitleOwner";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";

const AddProperty = () => {
  const { axios } = useAppContext();

  const [image, setImage] = useState(null);
  const [property, setProperty] = useState({
    type: "",
    year: "",
    pricePerDay: "",
    floorSize: "",
    population_capacity: "",
    petsAllowed: "",
    location: "",
    description: "",
    noOfBedroom: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("propertyData", JSON.stringify(property));

      const { data } = await axios.post("/api/owner/add-property", formData);

      if (data.success) {
        toast.success(data.message);
        setImage(null);
        setProperty({
          type: "",
          year: "",
          pricePerDay: "",
          floorSize: "",
          population_capacity: "",
          petsAllowed: "",
          location: "",
          description: "",
          noOfBedroom: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 py-12 md:px-10 flex-1 min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white animate-fadeIn">
      <TitleOwner
        title="Add New Property"
        subTitle="Follow the steps to list your property easily"
      />

      {/* Stepper */}
      <div className="flex justify-center mt-8 mb-10">
        <div className="flex items-center gap-6">
          {["Upload", "Details", "Review", "Submit"].map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold shadow-md">
                {i + 1}
              </div>
              <p className="text-sm font-medium text-gray-700">{step}</p>
              {i < 3 && (
                <div className="w-10 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="mt-4 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-12 max-w-3xl mx-auto space-y-8 border border-gray-100 hover:shadow-blue-200 transition duration-300"
      >
        {/* Property Image */}
        <div className="flex items-center gap-6">
          <label htmlFor="property-image" className="cursor-pointer group">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt="property"
              className="h-28 w-40 object-cover border-2 border-dashed border-gray-300 rounded-xl shadow-sm group-hover:scale-105 group-hover:border-blue-400 transition duration-300"
            />
            <input
              type="file"
              accept="image/*"
              hidden
              id="property-image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500">
            Click to upload a property photo
          </p>
        </div>

        {/* Property Type */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Property Type
          </label>
          <input
            type="text"
            required
            value={property.type}
            onChange={(e) =>
              setProperty({ ...property, type: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Year, Price, Floor Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              type="number"
              required
              placeholder="2023"
              value={property.year}
              onChange={(e) =>
                setProperty({ ...property, year: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Daily Price ($)
            </label>
            <input
              type="number"
              required
              placeholder="100"
              value={property.pricePerDay}
              onChange={(e) =>
                setProperty({ ...property, pricePerDay: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Floor Size
            </label>
            <select
              value={property.floorSize}
              onChange={(e) =>
                setProperty({ ...property, floorSize: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Select</option>
              {["One", "Two", "Three", "Four", "Five", "Six +"].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Population Capacity, Bedrooms, Pets Allowed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Population Capacity
            </label>
            <input
              type="number"
              required
              placeholder="4"
              value={property.population_capacity}
              onChange={(e) =>
                setProperty({ ...property, population_capacity: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              No. of Bedrooms
            </label>
            <input
              type="number"
              required
              placeholder="2"
              value={property.noOfBedroom}
              onChange={(e) =>
                setProperty({ ...property, noOfBedroom: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Pets Allowed
            </label>
            <select
              required
              value={property.petsAllowed}
              onChange={(e) =>
                setProperty({ ...property, petsAllowed: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            required
            placeholder="City, Country"
            value={property.location}
            onChange={(e) =>
              setProperty({ ...property, location: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows={4}
            required
            value={property.description}
            onChange={(e) =>
              setProperty({ ...property, description: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300"
          >
            <img src={assets.tick_icon} alt="tick" className="h-5 w-5" />
            {isLoading ? "Listing... Please wait" : "List Your Property"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
