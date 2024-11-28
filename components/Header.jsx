import { GiUnicorn } from "react-icons/gi";

const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[300px] md:min-h-[400px] lg:min-h-[170px] mb-4"
      style={{ backgroundImage: 'url(/images/header.png)' }}
    >
    
      <div className="absolute inset-0 bg-black opacity-60"></div> 

    
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-10">
       
        <div className="flex items-center space-x-2">
       
          <GiUnicorn className="text-white w-10 h-10 md:w-8 md:h-8" />

          <h1 className="text-white text-2xl md:text-3xl lg:text-xl font-medium">
            BRIDLE
          </h1>
        </div>

        {/* Text Content */}
        <div className="mt-8">
          <p className="text-4xl md:text-5xl lg:text-3xl font-bold text-gray-50 leading-snug">
            Supercharge your equine business
            <br />
            <span className="block mt-1">all in one place with Bridle</span>
          </p>
          <p className="mt-6 text-lg md:text-xl lg:text-xl text-gray-200">
            Manage horses & clients, streamline finances, automate bookings & events, and more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
