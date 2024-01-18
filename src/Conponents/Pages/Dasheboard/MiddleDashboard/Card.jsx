

const Card = ({item}) => {
  console.log(item);
  const { name, image, price, recipe,_id } = item;
    return (
     <div >
       <div className="h-86 w-60">
        <img src={image} alt="" />
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <p className="text-center">{recipe}</p>
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