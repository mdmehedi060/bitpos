import { useEffect } from "react";
import { useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";








const MiddleDashboard = () => {
  const [item,setItem]=useState();
  const [isShow,setIsShow]= useState(false)
  const items = useLoaderData();
  console.log(items);
  const { id } = useParams();
  console.log(id);
  useEffect(()=>{
    const findItems = items?.find(item=> item.id === id);
    setItem(findItems);
  },[id,items])


    return (
    <div> 
     
<div className="flex my-10 text-3xl">
<button className="btn btn-outline text-2xl text-red-600 flex items-center  mx-auto">
<span className="px-5 py-1 bg-yellow-500 rounded-2xl text-white text-sm mr-4">
            All items
          </span> </button>
<button className="btn btn-outline text-2xl text-red-600 flex items-center  mx-auto">
<span className="px-5 py-1 bg-yellow-500 rounded-2xl text-white text-sm mr-4">
Electronics
          </span> </button>
<button className="btn btn-outline text-2xl text-red-600 flex items-center  mx-auto">
<span className="px-5 py-1 bg-yellow-500 rounded-2xl text-white text-sm mr-4">
Clothing
          </span> </button>
<button className="btn btn-outline flex items-center text-2xl text-red-600 mx-auto">
<span className="px-5 py-1 bg-yellow-500 rounded-2xl text-white text-sm mr-4">
Home & Kitchen
          </span> </button>
<button className="btn btn-outline  flex items-center text-2xl text-red-600 mx-auto">
<span className="px-5 py-1 bg-yellow-500 rounded-2xl text-white text-sm mr-4">
Beauty
          </span> </button>
<button className="btn btn-outline  flex items-center text-2xl text-red-600 mx-auto">
<span className="px-5 py-1 bg-yellow-500 rounded-2xl text-white text-sm mr-4">
Automotive
          </span> </button>
</div>
<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
{
                    isShow ? items?.map(item=><Card key={item._id} item={item}></Card>)
                    :items?.slice(0, 16).map(item=><Card key={item._id} item={item}></Card>)
                }
{/* {
  items?.map(item=><Card key={item.id} item={item}></Card>)
} */}
</div>
{
                items?.length > 16 &&  <button onClick={()=> setIsShow(!isShow)}
                className="px-5 mt-5 bg-yellow-500  rounded-2xl block mx-auto mb-5">
                 See More Items
               </button>
            }
</div>   
    );
};

export default MiddleDashboard;