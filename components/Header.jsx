import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full overflow-hidden gap-2.5 bg-[#f6f6f4]">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[31px] md:gap-[70px] pt-[50px] md:pt-[60px]">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-9 px-10 md:px-20">
          <p className="flex-grow-0 flex-shrink-0 w-full md:w-[999px] text-[49px] md:text-[66px] font-semibold text-left text-[#354439]">
            Bring Loved Ones Together with Every Delicious, Clean Creation.
          </p>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-7 py-3.5 rounded-[999px] bg-[#c06654]">
            <p className="flex-grow-0 flex-shrink-0 text-lg md:text-xl font-bold text-left text-white">
              Discover Burner Market
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[43px] pb-[70px] md:pb-20 bg-[#354439]">
          <img
            className="self-stretch flex-grow-0 flex-shrink-0 h-[534px] object-cover"
            src="pexels-august-de-richelieu-4262418-2.png"
            alt="Food preparation"
          />
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[13px] px-10 md:px-20">
            <p className="flex-grow-0 flex-shrink-0 text-[19px] font-semibold text-left text-white/60">
              OUR CORE MISSION
            </p>
            <p className="flex-grow-0 flex-shrink-0 w-full md:w-[1214px] text-3xl md:text-[40px] text-left text-white">
              We curate the finest, clean, and delicious food items to make it easy for you to create
              mouth-watering snacks and meals for yourself and your loved ones, effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 