import { useEffect, useState } from "react";
import { API_URL } from "./constants";

export const useRestaurantList = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const handleSearch = () => {
    const searchList = listOfRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredRestaurant(searchList);
  };

const topRatedRestaurant = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4.3
    );

    setFilteredRestaurant(filteredList);
  }


  return { listOfRestaurant,filteredRestaurant, searchText,  setSearchText, handleSearch, topRatedRestaurant }

}
