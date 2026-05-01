
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Masoom = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      
      {/* Card */}
      <div className="w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Top Cover */}
        <div className="h-28 bg-gradient-to-r from-blue-200 to-gray-200 relative">
          <button className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm shadow">
            Follow +
          </button>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center -mt-10 px-4">
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Noah"
            alt="profile"
            className="w-20 h-20 rounded-full border-4 border-white"
          />

          <h2 className="mt-2 font-semibold text-lg">Masoom Raza</h2>
          <p className="text-sm text-gray-500 text-center mt-1">
            Frontend Developer who loves clean UI & animations.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-around mt-4 py-3 border-t border-b">
          <div className="text-center">
            <h3 className="font-semibold">72.9K</h3>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">828</h3>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">342.9K</h3>
            <p className="text-xs text-gray-500">Views</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 py-3">
          <FaInstagram className="cursor-pointer text-gray-600" />
          <FaTwitter className="cursor-pointer text-gray-600" />
          <FiPlus className="cursor-pointer text-gray-600" />
        </div>

      </div>
    </div>
  );
};

export default Masoom;