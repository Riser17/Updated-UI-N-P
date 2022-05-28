import React, { useState, useEffect } from 'react';
import { updateDB } from '../data/api';
import audio from '../../src/Assets/audio.jpg'
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3('https://polygon-mumbai.g.alchemy.com/v2/TfY2Jppq1FeTBO6DHxTDke8pZdLVSI1z');
const MarketPlaceContractABI = require("./MarketPlace-abi.json");
const MarketPlaceContractAddress = "0xbBEa7D18Eb1FEC072EE5848768f90C4F0941a76d";
const NFTsContractAddress = "0x3e5232273D806295174C3d59D7A2DAb2c8E872C1";

// Function for NFT marketplace
export default function MyNFTsMarketPlace(props) {
  async function removeFromMarket(tokenId, itemId) {

    window.contract = await new web3.eth.Contract(MarketPlaceContractABI, MarketPlaceContractAddress);
    const transactionParameters = {
      to: MarketPlaceContractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .deleteMarketItem(NFTsContractAddress, itemId)
        .encodeABI(),
    };
    try {
      const txHash = await web3.eth.sendTransaction(transactionParameters)
      const listed = false;
      await updateDB(tokenId, itemId, listed);
    } catch (error) {
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  }

  return (
    <>
      {/* <div className='row col-12 d-flex mt-5 p-1' style={{ 'height': 'auto', 'backgroundColor': "smoke" }}>
        {props.table && props.table.length > 0 ? props.table.map((element, index) =>
          <div className='col-3 my-3' key={element._id}>
            <div className="row col-12">
              {element.files.map((file, index) =>
                <div class="card shadow-lg bg-white rounded" style={{ 'height': 'auto', 'backgroundColor': "white", 'color': 'black' }}>
                 { element.Category === 'art'?
                    <img class="card-img-top" style={{ 'height': '20rem' }} src={`http://localhost:8080/${file.filePath}`} alt="NO Preview available" />

                   :
<audio controls controlsList="nodownload">
  <source src={`http://localhost:8080/${file.filePath}`} type="audio/mpeg"/>
</audio>
                  
              }
                  <div class="card-body">
                    <h5 class="card-title">Category :  {element.title}</h5>
                    <h5 class="card-title">NFT name :  {element.NFTname}</h5>
                    <h5 class="card-title">Price :  {element.Amount}</h5>
                    <a style={{ 'backgroundColor': "rgb(255, 35, 145)", 'border': 'none' }} href={`/DetailNFT/${element._id} `} class="btn btn-primary">view</a>
                    <button style={{ 'backgroundColor': "rgb(255, 35, 145)", 'border': 'none' }} onClick={() => {
                      removeFromMarket(element.tokenId, element.itemId);
                    }} class="btn btn-primary">Remove</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : 'NO RECORDS FOUNDS'}
      </div> */}
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
                    <button id='list' style={{'height':'4rem', 'width':'8rem','fontSize':'10px'}} onClick={() => {
                      removeFromMarket(element.tokenId, element.itemId);
                    }} class="btn btn-primary">Remove</button>
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
                    {/* <a style={{ 'backgroundColor': "rgb(255, 35, 145)", 'border': 'none' }} href={`/DetailNFT/${element._id} `} class="btn btn-primary">view</a> */}
                    <button id='list' style={{'height':'4rem', 'width':'8rem','fontSize':'10px'}} onClick={() => {
                      removeFromMarket(element.tokenId, element.itemId);
                    }} class="btn btn-primary">Remove</button>
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