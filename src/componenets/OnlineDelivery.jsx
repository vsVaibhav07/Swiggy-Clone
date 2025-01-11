import React  from "react";

import topRes from "../ResChain.json";

const OnlineDelivery = () => {
  return (
    
    <>
    <div className="grid grid-cols-3 m-10">
        <div className="font-bold text-lg">Restaurants with online Delivery in Lucknow</div>
       
    
    </div>

    <div className="overflow-hidden m-10 px-10 flex flex-col gap-10 justify-center">
        <div className="flex gap-4">
            <div className=" cursor-pointer hover:font-medium border-[1px] py-1 px-2">Filter</div>
            <div className=" cursor-pointer hover:font-medium border-[1px] py-1 px-2">Sort By</div>
        </div>
        <div
            className="grid  md:grid-cols-2 lg:grid-cols-3 justify-center "
          
        >
            {topRes.map((item, index) => (
                <div
                    key={index}
                    className=" hover:bg-slate-100 flex flex-col w-80 p-2 justify-evenly items-center  bg-white shadow-lg rounded-lg m-3 cursor-pointer"
                >
                    <img
                        src={`Categories/${item.image}`}
                        alt={item.title}
                        className="w-40 h-40 object-cover rounded-lg"
                    />
                    <div className="mt-2 text-center font-bold text-lg">
                    {item.title}
                    </div>
                    
                    
                    
                    
                </div>
            ))}
        </div>
    </div>
    <hr className="border-2 mx-10 my-4 shadow-lg" />
</>
  );
};

export default OnlineDelivery;
