import React, { useContext, useState,useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import categoryData from "../categoryData.json";
import { SearchContext } from "../contexts/SearchContext";


const Category = () => {
    const [slide, setSlide] = useState(0);

    const[filteredCategory,setFilteredCategory]=useState(categoryData);
    const{search,setSearch}=useContext(SearchContext);

    useEffect(() => {
        const data=categoryData.filter((category)=>{return category.path.toLowerCase().includes(search.toLowerCase())})
        setFilteredCategory(data);
    }, [search])
    

    

    const nextSlide = () => {
        if (categoryData.length - 8 == slide) return false;

        setSlide(slide + 3);
    };
    const prevSlide = () => {
        if (slide == 0) return false;
        setSlide(slide - 3);
    };

    return (
        <>
            <div className="flex justify-between m-10 ">
                <div className="font-bold text-lg">What's on your mind</div>
                <div className="flex gap-2">
                    <div
                        onClick={prevSlide}
                        className="cursor-pointer bg-slate-300 rounded-full p-2"
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        onClick={nextSlide}
                        className="cursor-pointer bg-slate-300 rounded-full p-2"
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div
                className="flex overflow-hidden space-x-4 px-10 m-10
      "
            >
                {filteredCategory.map((category, index) => (
                    <div
                        style={{
                            transform: ` translateX(-${slide * 100}%)`,
                        }}
                        key={index}
                        className=" group scale-100 duration-500 flex-shrink-0 w-40 flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:scale-1 cursor-pointer hover:bg-slate-100"
                    >
                        <img
                            src={`Categories/${category.image}`}
                            alt={category.path}
                            className="w-32 group-hover:scale-105 h-32 object-cover rounded-full"
                        />
                        <p className="mt-2 text-center font-medium capitalize">
                            {category.path.replace("-", " ")}
                        </p>
                    </div>
                ))}
            </div>
            <hr className="border-2 mx-10 my-4 shadow-lg" />
        </>
    );
};

export default Category;
