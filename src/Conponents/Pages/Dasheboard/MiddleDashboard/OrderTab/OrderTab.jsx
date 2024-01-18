import Card from "../Card";


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                items.map(item=><Card 
                key={item.id}
                item={item}
                ></Card>)
            }
            </div>
    );
};

export default OrderTab;