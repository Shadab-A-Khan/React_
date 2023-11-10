import { CDN_URL } from "../../utils/constants";

const Menu = (resInfo) => {
  return (
    <div key={resInfo.id} className="resta">
      <h1>{resInfo.name}</h1>

      <img
        alt="res-logo"
        src={CDN_URL + resInfo.cloudinaryImageId}
      />
      
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {resInfo.cuisines.map((cuisine) => (
            <li key={cuisine.id}>{cuisine}</li>
          ))}
        </ul>
      </div>
      <h3>Rs{resInfo.costForTwo}</h3>
    </div>
  );
};
export default Menu;
