import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems , setShowItems}) => {
  const handleClick = () => {
    setShowItems()
  };
  return (
    <div>
      <div className=" w-6/12 m-auto p-4 my-4 shadow-[8px_8px_8px_-10px_rgba(0,0,0,0.3)] ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg hover:scale-95 rounded-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span className="hover:scale-95 rounded-lg hover:shadow-[0_0_3px_black] p-1">
            ⬇️
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
