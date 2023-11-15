import { CDN_URL } from "../../utils/constants";

const Menu = (resInfo) => {
  return (
    <div key={resInfo.id} className="w-[500px] h-[600px] m-[100px] mt-1 p-10 pt-5  rounded-[9px] hover:scale-95 shadow-[0_0_3px_#adadad]">
      <h3 className="font-bold text-xl text-black">{resInfo.name}</h3>

      <img
        className="mt-6 rounded-2xl"
        alt="res-logo"
        src={CDN_URL + resInfo.cloudinaryImageId}
      />
      
      <div className="my-3" >
        <h2 className="font-bold text-lg text-blue-600">Menu</h2>
        <ul>
          {resInfo.cuisines.map((cuisine) => (
            <li key={cuisine.id}>-{cuisine}</li>
          ))}
        </ul>
      </div>
      <h3 className=" font-bold text-green-700 text-lg">Rs{resInfo.costForTwo}</h3>
    </div>
  );
};
export default Menu;
