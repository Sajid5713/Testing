import RestaurantCard from "./RestaurantCard";
// import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { useRestaurantList } from "../utils/useRestaurantList";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
    // const [listOfRestaurant,setListOfRestaurant] = useState([]);
    // const [searchText,setSearchText] = useState('');
    // const[filteredRestaurant,setFilteredRestaurant] = useState([]);

  const onlineStatus = useOnlineStatus();

  const {listOfRestaurant ,searchText, setSearchText, filteredRestaurant, handleSearch, topRatedRestaurant} = useRestaurantList();

  // console.log(filteredRestaurant)
  //  useEffect( () => {
  //     fetchData();
  //  },[])



  //  const fetchData = async () => {
  //     const data = await fetch(API_URL);
  //     const json = await data.json();

  //     // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


  //     setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //  }


  if(onlineStatus === false){
    return <h1>You are offline!!!!!!!</h1>
  }


    return (listOfRestaurant.length === 0 )? <Shimmer/> : (
        <div className='body'>
           <div className='container'>
                <div className='filterBtn'>
                    <input type="text" value={searchText} placeholder="Search a Restaurant" onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={handleSearch}>Search</button>
                    <button onClick={topRatedRestaurant}>Top Rated</button>
                     
                </div>
                
                <div className='resContainer'>
                    {
                      filteredRestaurant.map((restaurant) => {
                        return(
                          <Link key={restaurant?.info?.id} to={('/restaurant/'+restaurant?.info?.id) ? '/restaurant/'+restaurant?.info?.id : <Error/> } ><RestaurantCard  resData={restaurant}/></Link>
                        )
                      })
                    }
                </div>
           </div>
        </div>
    )
}

export default Body;