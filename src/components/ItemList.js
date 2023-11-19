import { CDN_URL } from "../../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div className="mb-14">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between my-3 hover:shadow-[0_0_2px_black] rounded-lg shadow-[8px_8px_8px_-10px_rgba(0,0,0,0.3)]"
        >
          <div className="m-2 p-3 w-9/12 hover:scale-95">
            <h1 className="mt-1 text-md text-blue-600 font-bold">
              {item.card.info.name}
            </h1>
            <h1 className="mt-1 text-lg">Rs-{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</h1>
            <p className="mt-1 text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute ml-[4%]">
              <button className=" p-0.5 text-white bg-black text-md hover:scale-95 hover:shadow-[0_0_3px_black] hover:bg-green-600 rounded-lg shadow-[0_0_1px_#adadad]">
                ADD+
              </button>
            </div>
            <img
              className="flex p-3 ml-2 pb-0 rounded-2xl"
              alt="food Img"
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
