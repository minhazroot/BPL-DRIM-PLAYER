import React from "react";
import bgShadow from "../../assets/bg-shadow.png";
import img from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      className="w-full h-screen  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgShadow})` }}
    >
      <div className=" min-h-screen flex flex-col justify-center items-center gap-5 text-center px-4  ">
        <img src={img} alt="" />
        <h1 className="text-black text-5xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="text-4xl text-gray-600">
          Beyond Boundaries Beyond Limits
        </h3>
        <button className="btn btn-active btn-warning">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
