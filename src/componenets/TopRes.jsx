import React, { useContext, useState,useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import topRes from "../ResChain.json";
import { SearchContext } from "../contexts/SearchContext";

const TopRes = () => {
    const [slide, setSlide] = useState(0); // Current slide index
    const itemsPerSlide = 4; // Number of items visible in a single view
    const totalItems = topRes.length; // Total number of items
    const maxSlide = Math.ceil(totalItems / itemsPerSlide) - 1;

    const {search,setSearch}=useContext(SearchContext);

    const [filteredRes,setFilteredRes]=useState(topRes);

    useEffect(() => {
        const data=topRes.filter((restorent)=>{return restorent.title.toLowerCase().includes(search.toLowerCase())});
        setFilteredRes(data);
        
     
    }, [search])
    

    const nextSlide = () => {
        if (slide < maxSlide) {
            setSlide(slide + 1);
        }
    };

    const prevSlide = () => {
        if (slide > 0) {
            setSlide(slide - 1);
        }
    };

    return (
        <>
            <div className="flex justify-between m-10">
                <div className="font-bold text-lg">Top Restaurants Near You</div>
                <div className="flex gap-2">
                    <div
                        onClick={prevSlide}
                        className={`cursor-pointer bg-slate-300 rounded-full p-2 ${slide === 0 && "opacity-50 pointer-events-none"
                            }`}
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        onClick={nextSlide}
                        className={`cursor-pointer bg-slate-300 rounded-full p-2 ${slide === maxSlide && "opacity-50 pointer-events-none"
                            }`}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div className="overflow-hidden m-10 px-10">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${slide * 100}%)`,
                    }}
                >
                    {filteredRes.map((item, index) => (
                        <div
                            key={index}
                            className=" cursor-pointer hover:bg-slate-100 min-w-max flex-shrink-0 w-1/4 flex flex-col items-center p-4 bg-white shadow-lg rounded-lg mx-2"
                        >
                            <img
                                src={`Categories/${item.image}`}
                                alt={item.title}
                                className="w-40 h-40 object-cover rounded-lg"
                            />
                            <div className="mt-2 text-center font-bold text-lg">
                                {item.title}
                            </div>
                            <p className="text-gray-500">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.place}</p>
                            <div className="mt-2 text-green-600 font-medium text-sm">
                                {item.offer}
                            </div>
                            <div className="mt-1 flex items-center justify-between w-full text-sm text-gray-700">
                                <span className="font-bold">⭐ {item.rating}</span>
                                <span>
                                    {item.minTime}-{item.maxTime} mins
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="border-2 mx-10 my-4 shadow-lg" />
        </>
    );
};

export default TopRes;
