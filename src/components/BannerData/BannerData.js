import React, { useState } from 'react';
import travelData from '../TravelData/TravelData';
// import travelPlaceData from '../../FakeData/TravelPlaceData';


const BannerData = () => {
    // console.log(travelData)
    const [travel, setTravel] = useState(travelData);

    const [item, setItem] = useState([]);
    console.log(item)
    // const handle = (travelItem) => {
    //     setItem(travelItem);
    // }

    return (
        <div>
            
        </div>
    );
};

export default BannerData;