import React from "react";
import Img1 from "../../assets/products-img/supply1.jpg";
import Img2 from "../../assets/products-img/supply2.jpg";
import Img3 from "../../assets/products-img/supply3.jpg";
import Img4 from "../../assets/products-img/supply4.jpg";
import Img5 from "../../assets/products-img/supply5.jpg";
import Img6 from "../../assets/products-img/supply6.jpg";
import Img7 from "../../assets/products-img/supply7.jpg";
import Img8 from "../../assets/products-img/supply8.jpg";
import Img9 from "../../assets/products-img/supply9.jpg";
import Img10 from "../../assets/products-img/supply10.jpg";
import Img11 from "../../assets/products-img/supply11.jpg";
import SupplyCard from "./SupplyCard";
const SupplyData = [
  {
    id: 1,
    imgUrl: Img1,
    name: "Cashew Kernel",
  },
  {
    id: 2,
    imgUrl: Img2,
    name: "Raw Cahew Kernel",
  },
  {
    id: 3,
    imgUrl: Img3,
    name: "Shiny Mung Bean",
  },
  {
    id: 4,
    imgUrl: Img4,
    name: "Dull Mung Bean",
  },
  {
    id: 5,
    imgUrl: Img5,
    name: "Cashew Kernel With Testa",
  },
  {
    id: 6,
    imgUrl: Img6,
    name: "Soy Bean",
  },
  {
    id: 7,
    imgUrl: Img7,
    name: "White Sesame",
  },
  {
    id: 8,
    imgUrl: Img8,
    name: "Black Sesame",
  },
  {
    id: 9,
    imgUrl: Img9,
    name: "Hulled Sesame Seeds",
  },
  {
    id: 10,
    imgUrl: Img10,
    name: "Macadamia",
  },
  {
    id: 11,
    imgUrl: Img11,
    name: "Adzuki",
  },
];

const Supply = () => {
  return (
    <div className="container mt-10 mb-10 py-4">
      <div className="grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-span-2 text-center mb-10">
          <h1 className="text-4xl md:text-5xl text-yellow-500 font-bold capitalize">
            What we can supply
          </h1>
        </div>
        <SupplyCard data={SupplyData} />
      </div>
    </div>
  );
};

export default Supply;
