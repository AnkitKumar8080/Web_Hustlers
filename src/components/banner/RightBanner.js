import React from "react";
import { developer } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[600px] h-[150px] lgl:w-[800px] lgl:h-[680px] z-10"
        src={developer}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[450px] h-[400px] lgl:w-[600px] lgl:h-600px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
};

export default RightBanner;
