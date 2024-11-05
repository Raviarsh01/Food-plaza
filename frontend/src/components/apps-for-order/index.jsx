import React from 'react'

const AppsForOrder = () => {
    const imagesData = [
        "/Images/deliveroo.png",
        "/Images/justEat.png",
        "/Images/foodpanda.png",
        "/Images/didiFood.png",
        "/Images/instacart.png",
        "/Images/doordash.png",
        "/Images/uberEats.png",
        "/Images/grubhub.png",
      ];
  return (
    <div className="bg-[#e9e9e947]">
    <div className="main-container py-[90px] flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-[40%] flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-secondary leading-tight">
          You can order through apps
        </h2>
        <p className="text-base text-third leading-7 mt-[30px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit enim
          bibendum sed et aliquet aliquet risus tempor semper.
        </p>
      </div>
      <div className="w-full md:w-[60%] flex flex-wrap gap-10 justify-center">
        {imagesData?.map((value, i) => (
          <div
            key={i}
            className={`bg-white h-[90px] flex justify-center items-center rounded-xl ${
              i + 1 === (4 || 5 || 6) ? "w-[280px]" : "w-[230px]"
            }`}
          >
            <img src={value} alt="menu" />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default AppsForOrder