import React, { useState, useEffect } from 'react'
import axios from "axios";
import MyNFTs from './MyNFTs'
import { useParams } from "react-router-dom";
import { getnfts } from '../data/api'

// Function for detailNft
export default function DetailNFT(props) {

    const params = useParams();
    // State for managing all nft list
    const [nft, setNft] = useState([])
    useEffect(() => {
        async function fetchData() {
            const data = await getnfts(params.id);
            setNft(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            {nft ? (<div className='container col-12 d-flex'>
                <div className='col-6'>
                    {nft.files ? nft.files.map(file => {
                        return    nft.Category === 'art'?
                        <img class="card-img-top" style={{ 'height': '20rem' }} src={`http://localhost:8080/${file.filePath}`} alt="NO Preview available" />
    
                       :
    <audio controls controlsList="nodownload">
      <source src={`http://localhost:8080/${file.filePath}`} type="audio/mpeg"/>
    </audio>
                      
                  



//                         <img src={`http://localhost:8080/${file.filePath}`} height="75%" width="22%" className="card-img-top img-responsive" alt="img" />
// //                         <audio controls controlsList="nodownload">
// //   <source src={`http://localhost:8080/${file.filePath}`} type="audio/mpeg"/>
// // </audio>
                        
                        
                    }) : ''}
                </div>
                <div className='col-6 mx-5 ' id='headings' style={{ "width": "75%", "height": "50%" }}>
                    <h2>
                    Category - {nft.Category}
                    </h2>
                    <h4>
                        NFTname -  {nft.NFTname}
                    </h4>
                    <h4>
                        Description - {nft.Description}
                    </h4>
                    <h4>
                        AssetID - {nft.AssetID}
                    </h4>
                    <h4>
                        CreatorName - {nft.CreatorName}
                    </h4>
                    <h4>
                        Tags - {nft.Tags}
                    </h4>
                    <h4>
                        createdAt - {nft.createdAt}
                    </h4>
                    <h4>
                        updatedAt - {nft.updatedAt}
                    </h4>
                    <h4>
                        Amount - {nft.Amount}
                    </h4>
                    <a href="#" class="btn btn-primary">SELL NOW</a>
                </div>
            </div >)
                :
                (<div>
                    <p>no record</p>
                </div>)
            }
        </div>
    )
}
