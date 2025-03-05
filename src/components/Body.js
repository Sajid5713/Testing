import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState('');
    const[filteredRestaurant,setFilteredRestaurant] = useState();

   useEffect( () => {
      fetchData();
   },[])



   const fetchData = async () => {
      const data = await fetch(API_URL);
      const json = await data.json();

      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }


    return (listOfRestaurant.length === 0 )? <Shimmer/> : (
        <div className='body'>
           <div className='container'>
                <div className='filterBtn'>
                    <input type="text" value={searchText} placeholder="Search a Restaurant" onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={() =>{
                      const searchList = listOfRestaurant.filter((res)=>{
                        return (
                          res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                      })

                      setFilteredRestaurant(searchList)

                    }}>Search</button>
                    <button onClick={
                        () => 
                        {
                            const filteredList = listOfRestaurant.filter((res)=> 
                                    res.info.avgRating > 4.3
                            );
                           
                            setFilteredRestaurant(filteredList)
                        }
                    }>Top Rated</button>
                     
                </div>
                
                <div className='resContainer'>
                    {
                      filteredRestaurant.map((restaurant,index) => {
                        return(
                          <RestaurantCard key={index} resData={restaurant}/>
                        )
                      })
                    }
                </div>
           </div>
        </div>
    )
}

export default Body;