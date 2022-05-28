import React from "react";
import "./dashboard.css";
import MarketPlaceGallery from './MarketPlaceGallery';
import video from '../../src/Assets/video.mp4'
import MyMarketPlaceGallery from "./MyMarketPlaceGallery";

// Function for dashboard
export default function Dashboard() {
  return (
    <>
      <video   autoPlay loop  width={'100%'}  height={'600'} style={{'marginTop':'-0.5%','object-fit': 'fill' }}>
  <source src={video} type="video/mp4"/>
</video>
        
        <div className='mt-0' style={{"backgroundColor":"black"}}>
  
  
<nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    {/* <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">My NFT Shop</button> */}
    <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Other NFT Collection</button>
    
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  {/* <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Gallery /></div> */}
  <div className="tab-pane  show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><MarketPlaceGallery /></div>
  {/* <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Jane</div> */}
</div>
      </div>


      
    </>
  );
}
