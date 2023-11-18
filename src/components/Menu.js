import { CDN_URL } from "../../utils/constants";
const Menu = (menu) => {
  return (
    <div key={menu.id}>
      <div className="flex m-10 ml-[10%] py-4 mr-[10%] space-between columns-1 shadow-[8px_8px_8px_-10px_rgba(0,0,0,0.3)] z-[-1] left-0 bottom-0">
        <div className=" w-[50rem] h-[10rem] text-xl mr-[8%] p-2 pr-10 hover:scale-95">
          <h1 className="text-xl text-blue-800 text-bold pb-1">{menu.name}</h1>
          <h2 className="pb-1 text-bold">Rs.{menu.price / 100}</h2>
          <h3 className="text-xs text-bold">{menu.description}</h3>
        </div>
        <div className="h-[100px] w-[200px] pr-4">
          <img
            className="rounded-lg hover:scale-95"
            alt="food Img"
            src={CDN_URL + menu.imageId}
            
          ></img>
          <label className="relative">
            <button className="my-4 px-11 mb-9 text-white bg-green-500 text-lg hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
              ADD+
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Menu;
