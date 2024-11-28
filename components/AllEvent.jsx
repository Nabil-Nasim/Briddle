import { FaBookmark } from "react-icons/fa";

export default function AllEvents() {
  const allEvents = [
    { date: "FEB 27", details: "BHA - Kickoff to New Ownership, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", id: 1 },
    { date: "FEB 28", details: "Barrel Race (race 6), Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", id: 2 },
    { date: "FEB 28", details: "2024 Wednesday Night Barrel Racing, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", id: 3 },
    { date: "MAR 1", details: "Olsen's Events Jackpot, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", id: 4 },
    { date: "FEB 27", details: "BHA - Kickoff to New Ownership, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", id: 5 }
  ];


  const renderEvents = (columnIndex) => {
    return allEvents.map((event, index) => {
      const [month, day] = event.date.split(" ");
        
    
      const isEvenRow = index === 1;
      
  
      const isThirdRowInFirstColumn = columnIndex === 1 && index === 2;

      return (
        <div key={event.id} className="flex items-center py-4">
     
          <div
            className={`flex flex-col items-center justify-center w-14 h-14 font-bold rounded-lg ${isEvenRow ? "bg-green-100 text-green-500" : "bg-purple-100 text-purple-500"}`}
          >
            <span className="text-sm">{month}</span>
            <span className="text-lg text-black">{day}</span>
          </div>

          {/* Event Details */}
          <div className="flex-1 ml-4">
            <h3 className="text-gray-800 font-medium">{event.details.split(",")[0]}</h3>
            <p className="text-gray-500 text-sm">{event.details.split(",").slice(1).join(", ")}</p>
          </div>

        
          <div className={`p-2 ml-5 bg-white border-2 border-gray-300 rounded-md shadow-md ${isThirdRowInFirstColumn ? "text-purple-500" : "text-gray-400"}`}>
            <FaBookmark size={20} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* First column */}
      <div>
        {renderEvents(1)} 
      </div>

      {/* Second column */}
      <div>
        {renderEvents(2)}
      </div>
    </div>
  );
}
