

const Card = ({item}) => {
  console.log(item);
  const { name, image, price, recipe,_id } = item;
    return (
     <div >
       <div className="h-86 w-48 shadow-lg">
        <img className="w-full h-[80px] items-center mx-auto" src={image} alt="" />
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      {/* <p className="text-center">{recipe}</p> */}
      <div className="w-32 flex justify-between mx-auto">
              <span className="px-3 py-1 rounded-md  ">-</span>
              <span className="font-semibold mx-4">10</span>
              <span className="px-3 py-1 rounded-md  ">+</span>
            </div>
      <div className="card-actions justify-end">
        <button className="btn btn-outline border-0 border-b-4 flex items-center text-orange-400 mx-auto">
          Add to Cart
        </button>
      </div>
    </div>
     </div>
    );
};

export default Card;