import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri"; // Importing the dropdown icon

export default function SearchAndFilter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const locations = ["New York", "London", "Dubai"];

  return (
    <div className="flex items-center space-x-4 mb-6 mx-5">
   
      <div className="flex items-center border border-gray-400 bg-gray-100 text-gray-300 rounded-md">
        {["All", "Live", "Upcoming"].map((filter, index) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 font-medium ${
              activeFilter === filter
                ? "text-black bg-gray-300"
                : "text-gray-600 bg-white"
            } ${index > 0 ? "border-l border-gray-300" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>

       {/* Location */}
      <div className="relative">
        <button
          onClick={() => setIsLocationOpen(!isLocationOpen)}
          className="px-4 py-2 bg-white font-medium rounded-md border border-gray-400 text-black  flex items-center"
        >
          Location
          <RiArrowDropDownLine className="ml-2" size={20} />
        </button>

    
        {isLocationOpen && (
          <div className="absolute left-0 top-full mt-2  bg-white shadow-lg rounded-md border ">
            {locations.map((location, index) => (
              <button
                key={index}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
              >
                {location}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Event Date Button */}
      <div className="relative">
        <button className="flex items-center px-4 py-2 font-medium  bg-white text-black rounded-md border border-gray-400">
          <CiCalendar className="mr-2" size={20} />
          Event Date
        </button>
      </div>

  
      <div className="flex-1 relative">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search by event name..."
          className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>
    </div>
  );
}
