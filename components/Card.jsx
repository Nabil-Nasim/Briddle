import { FaBookmark, FaCalendarAlt, FaMapPin } from "react-icons/fa";
import { LuCalendarSearch } from "react-icons/lu";
import { MdMyLocation } from "react-icons/md";
import Image from 'next/image';

export default function EventCard({ title, date, location, imageUrl, index }) {

  const renderTitle = (title) => {
    if (title === "Underground Bull Riders Membership") {
      return (
        <>
          Underground Bull <br />
          Riders Membership
        </>
      );
    } else if (title === "Horses in Two Lines") {
      return (
        <>
          Horses <br />
          in Two Lines
        </>
      );
    }
    return title; 
  };

 
  const isOddIndex = index % 2 !== 0;

  return (
    <div className="relative flex bg-white shadow-md rounded-lg w-full">
      {/* Image Section (Left) */}
      <div className="relative flex-shrink-0 w-1/5 h-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill" 
          className="object-cover rounded-l-md" 
        />
      </div>

      {/* Content Section  */}
      <div className="ml-4 my-2 w-2/3 flex flex-col justify-between"> 
       
        <p className="font-semibold text-l text-gray-800 mb-2 overflow-hidden">
          {renderTitle(title)}
        </p>
        
        {/* Location and Date*/}
        <div className="space-y-2">
       
          <div className="flex items-center text-sm text-gray-600">
            <MdMyLocation className="mr-2 text-gray-600" />
            <span>{location}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <LuCalendarSearch className="mr-2 text-gray-600" />
            <span>{date}</span>
          </div>
        </div>

    
        <div className="absolute top-2 right-1 p-2 ml-5 bg-white border-2 border-gray-300 rounded-md shadow-md">
          {isOddIndex ? (
            <FaBookmark className="text-purple-500" />
          ) : (
            <FaBookmark className="text-gray-400" />
          )}
        </div>
      </div>
    </div>
  );
}