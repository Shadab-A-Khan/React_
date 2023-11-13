import { useParams } from "react-router-dom";
import Menu from "./Menu";
import Shimmer_menu from "./Shimmer_menu";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer_menu />;
  }

  return (
    <div key={resInfo.id} className="menu-card">
      {resInfo.map((restaur) => {
        if (restaur?.info?.id == resId) {
          return <Menu key={restaur?.info?.id} {...restaur.info} />;
        }
      })}
    </div>
  );
};

export default RestaurantMenu;
