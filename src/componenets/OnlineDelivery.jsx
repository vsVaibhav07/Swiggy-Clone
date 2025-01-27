import React,{useContext,useEffect,useState}  from "react";

import topRes from "../ResChain.json";
import { SearchContext } from "../contexts/SearchContext";

const OnlineDelivery = () => {

    const{search,setSearch}=useContext(SearchContext);
    const[filteredData,setFilteredData]=useState(topRes);

    useEffect(() => {
        const data=topRes.filter((category)=>{return category.name.toLowerCase().includes(search.toLowerCase())});
        
        if(search===""){
            setFilteredData(topRes);
        }else{
            setFilteredData(data);
        }

    }, [search])
    

   

  return (
    
    <>
    <div className="grid grid-cols-3 m-10">
        <div className="font-bold text-lg">Restaurants with online Delivery in Lucknow</div>
       
    
    </div>

    <div className="overflow-hidden m-10 px-10 flex flex-col gap-10 justify-center">
        
        <div
            className="grid  md:grid-cols-2 lg:grid-cols-3 justify-center "
          
        >
            {filteredData.map((item, index) => (
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
