import {CDN_URL} from '../utils/constants'

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,sla,areaName,cloudinaryImageId} = resData?.info;
    // console.log(props);
    // console.log(resData?.info);
    return(
        <div className='resCard'>
            <div className='image'>
                <img src={ CDN_URL + cloudinaryImageId } alt='resImage' />
            </div>
           <div className='desc'>
                <h1>{name}</h1>
                <p>{cuisines.join(',')}</p>
                <p>⭐{avgRating} 〰 <b>{sla.slaString} mins</b> </p>
                <p>{areaName}</p>
           </div>
        </div>
    )
}

export default RestaurantCard;