import React from 'react';

const MerchantCard = ({ merchantInfo}) => {

  const {officialName, heroPhoto=''} = merchantInfo;

  return (
    <div className="MerchantCard">
      <div>{officialName}</div>
      <img src={heroPhoto? heroPhoto : 'https://via.placeholder.com/150'} alt="MerchantLogo" width="50px" height="50px"/>
    </div>
  );

};

export default MerchantCard;