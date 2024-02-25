import React from "react";
import Navbar from "../components/layout/Navbar";
import { useTranslation } from "react-i18next";
import Banner from "../components/home/Banner";
import Supply from "../components/home/Supply";
import Chatbot from "../components/layout/Chatbot";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative">
        {/* navbar section  */}
        <Navbar />
        <Banner />
        <Supply />
        <Chatbot />
      </div>
    </div>
  );
};

export default HomePage;
