import React from "react";

const SupplyCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* card section */}
        {data.map((data) => (
          <div className="grid grid-cols-2 items-center justify-center">
            <img
              src={data.imgUrl}
              alt=""
              className="w-[400px] h-[450px] object-fill rounded-md"
            />

            <div className="flex flex-col items-center justify-center px-5 gap-10">
              <h2 className="text-4xl leading-10 md:text-5xl font-barlow font-semibold text-yellow-500 text-center">
                {data.name}
              </h2>
              <button className="text-2xl  text-white bg-yellow-500 px-4 py-4">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplyCard;
