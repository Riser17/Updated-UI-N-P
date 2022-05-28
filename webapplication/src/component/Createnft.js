import React from 'react';
import UploadNFT from './UploadNFT';
import MusicNFT from './MusicNFT';
import './UploadNFT.css';

// Function for create nft
export default function Createnft() {
  return (
    <>
    
      <div id="createnft" className=" p-4 ">
        <p style={{ color: "yellow", fontSize: "33px" }}>
          You have sucessfully connected to Metamask Wallet.
          <h2>Complete the steps below to create NFT</h2>
        </p>
        
                {/* Tab for redirecting to UploadNFT page */}
                
               
              </div>
              
              <div  style={{"backgroundColor":"black"}}>
              <nav>
  <div className="nav nav-tabs " id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">ART</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">MUSIC</button>

  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><UploadNFT /></div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><MusicNFT /></div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Jane</div>
</div>
</div>     

</>    
  )
}
