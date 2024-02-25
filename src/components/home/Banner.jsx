import React from "react";
import BannerImg from "../../assets/headers-img/home-header.jpg";
import { useTranslation } from "react-i18next";
const bgImage = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  marginTop: "2rem",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  const { t } = useTranslation();
  return (
    <div style={bgImage}>
      <div className="min-h-[550px] py-12 sm:py-0 text-white sm:pt-6">
        {/* text content section */}
        <div className="grid-cols-1 my-24">
          <div className="container">
            <div className="flex flex-col justify-center items-center text-center gap-6 ">
              <h1 data-aos="fade-up" className="text-6xl font-bold my-auto">
                Welcome To Demeter
              </h1>
              <p className="text-[2.5rem] font-bold font-barlow">
                Cream Of The Crop
              </p>
              <p className="text-[2.5rem] font-bold font-barlow">
                The Preferred Brand Of Quality Raw Material
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
