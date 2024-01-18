import { useEffect } from "react";
import { useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";








const MiddleDashboard = () => {
  const [item,setItem]=useState();
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
<button className="btn btn-outline text-4xl text-red-600 flex items-center  mx-auto">
          Launce </button>
<button className="btn btn-outline text-4xl text-red-600 flex items-center  mx-auto">
Breakfast </button>
<button className="btn btn-outline flex items-center text-4xl text-red-600 mx-auto">
Dinner </button>
<button className="btn btn-outline  flex items-center text-4xl text-red-600 mx-auto">
Dessert </button>
<button className="btn btn-outline  flex items-center text-4xl text-red-600 mx-auto">
Drinks </button>
</div>
<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
  
{
  items?.map(item=><Card key={item.id} item={item}></Card>)
}
</div>
</div>   
    );
};

export default MiddleDashboard;