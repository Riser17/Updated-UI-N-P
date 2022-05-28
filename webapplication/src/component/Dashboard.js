import React from "react";
import "./dashboard.css";
import Gallery from './Gallery';
import MyMarketPlaceGallery from "./MyMarketPlaceGallery";

import MyNFTBanner from '../../src/Assets/MY NFT GALLERY BANNER.jpg'

export default function Dashboard() {
  return (
    <>
     <img className='banner w-100' src={MyNFTBanner} alt='MY NFT GALLERY'  />

      <div className='mt-2' style={{"backgroundColor":"black"}}>
        
<nav>
  <div className="nav nav-tabs " id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">My NFT Collection</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">My NFT Collection</button>
    
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Gallery /></div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><MyMarketPlaceGallery /></div>

</div>
      </div>
    </>
  );
}
