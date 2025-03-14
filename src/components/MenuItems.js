import { useParams } from "react-router";
import {useRestaurantItem} from "../utils/useRestaurantItem";

const MenuItems = () => {
//   const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantItem(resId);


//   useEffect(() => {
//     menuList();
//   }, []);

//   const menuList = async () => {
//     const data = await fetch(MENU_URL + resId);
//     const json = await data.json();

//     setResInfo(json?.data);
//   };

  if (resInfo === null) {
    return <h1>loading....</h1>;
  }

  const { name, avgRating, costForTwo, totalRatings } =
    resInfo?.cards[2]?.card?.card?.info;
  // console.log(resInfo?.cards[2]?.card?.card?.info)
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log('body render')


  return (
    <div className="container">
      <p>Home/{name}</p>
      <h1>{name}</h1>
      <p>
        ⭐{avgRating}({totalRatings}ratings) 〰 {costForTwo / 100} cost for two
      </p>

      {itemCards.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="details">
            <div className="desc">
              <h2>{item?.card?.info?.name}</h2>
              <p>💲{item?.card?.info?.defaultPrice / 100}</p>
              <h3>
                {item?.card?.info?.ratings?.aggregatedRating?.rating
                  ? "⭐" + item?.card?.info?.ratings?.aggregatedRating?.rating
                  : ""}
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2
                  ? item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2
                  : ""}
              </h3>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div className="img">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  item?.card?.info?.imageId
                }
                alt="menu"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
