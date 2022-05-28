// Component for all nft marketplace
import React, { useState, useEffect } from 'react';
import audio from '../../src/Assets/audio.jpg'
// Function for all nft marketplace
export default function AllNFTsMarketPlace(props) {
  return (
    <>
      
      <h1 className='mt-3' style={{'color':'white'}}>ART NFTs</h1>
      <div className='row col-12 d-flex mt-5'  >
        {props.table && props.table.length > 0 ? props.table.map((element, index) =>
          <div className='col-2  ' key={element._id}>
            <div className="row col-12" style={{'height':'40rem'}}>
              {element.files.map((file, index) =>
                  <div style={{ 'width':'20rem','color':'white' }}>
                  <a style={{  'border': 'none' }} href={`/DetailNFT/${element._id} `} class="btn ">
                  <img id="example1" class="card-img-top"   src={`http://localhost:8080/${file.filePath}`} alt="NO Preview available" style={{'height': '30rem'}} />
                  </a>
                    <div class="card-body">
                    <h5 class="card-title">{element.NFTname}</h5>
                    <h5 class="card-title">{element.Amount}</h5>
                    {/* <a style={{ 'backgroundColor': "rgb(255, 35, 145)", 'border': 'none' }} href={`/DetailNFT/${element._id} `} class="btn btn-primary">view</a> */}
                   
                  </div>
                  </div> 
              )}
            </div>
          </div>
        ) : 'NO RECORDS FOUNDS'}
      </div>

      {/*  */}
      <h1 className='mt-5' style={{'color':'white'}}>MUSIC NFTs</h1>
      <div className='row col-12 d-flex mt-5 p-1' >
        {props.table1 && props.table1.length > 0 ? props.table1.map((element, index) =>
          <div className='col-2 my-3' key={element._id}>
            <div className="row col-12" style={{'height':'40rem'}}>
              {element.files.map((file, index) =>
                <div class="card  rounded" style={{ 'height': '30rem', 'width':'30rem','color':'white' }}>
                 <a style={{  'border': 'none' }} href={`/DetailNFT/${element._id} `} class="btn ">
                  <img class="card-img-top" style={{ 'height': '20rem' }} src={audio} alt="My MUSIC" />
                   <audio class="card-body"controls controlsList="nodownload" >
                    <source src={`http://localhost:8080/${file.filePath}`} type="audio/mpeg" />
                  </audio></a>
                  <div class="card-body">
                    <h5 class="card-title">{element.NFTname}</h5>
                    <h5 class="card-title">{element.Amount}</h5>
                                      </div>
                </div>
              )}
            </div>
          </div>
        ) : 'NO RECORDS FOUNDS'}
      </div>
      
      {/*  */}
    </>
  );
}