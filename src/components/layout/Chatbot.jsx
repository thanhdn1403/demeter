import React from "react";
import { FaComment } from "react-icons/fa";
const Chatbot = () => {
  return (
    <div className="fixed bottom-2 right-5 z-[999]">
      <div>
        <button className="text-white bg-gray-700 rounded-full px-5 py-2 md:px-10 md:py-5">
          <div className="flex items-center md:gap-3">
            <FaComment className="text-xl" />{" "}
            <h1 className="text-xl hidden md:block">Let's Chat!</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
