import React from "react";
import { CDN_URL } from "../../Utils/constants";
import "./card.css";

const Card = (props) => {
  const { resData } = props;
  // console.log(resData);
  //   if (!resData || !resData.info) {
  //     return <div>Loading...</div>;
  // }
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    resData && resData?.info;
  // console.log(resData.info);

  
  return (
    <div className="res-card">
      <img
        className="image"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="image"
      />
      <h4>{name}</h4>
      <h5>Items At {costForTwo}</h5>
      <p>{cuisines.join(",").slice(0, 30)}</p>
      <h6>{avgRating} stars</h6>

      {/* <img className="res-logo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/decbkhbbxeidsxbbuess' alt='meghana'/> */}
    </div>
  );
};

export default Card;
