import React, { useState, useEffect } from 'react';
import { multipleFilesUpload } from '../data/api';
import Spinner from 'react-bootstrap/Spinner';
import { pinJSONToIPFS } from "./pinata.js";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3('https://polygon-mumbai.g.alchemy.com/v2/TfY2Jppq1FeTBO6DHxTDke8pZdLVSI1z');
const contractABI = require("./contract-abi.json");
const NFTsContractAddress = "0x3e5232273D806295174C3d59D7A2DAb2c8E872C1";
const jjj = web3.utils.asciiToHex("ee");

const FileUploadScreen = () => {
  // States on FileUploadScreen    
  const [multipleFiles, setMultipleFiles] = useState('');
  const [Category, setCategory] = useState('art');
  const [NFTname, setNFTname] = useState('');
  const [Tags, setTags] = useState('');
  const [Royalty, setRoyalty] = useState(5);
  const [Amount, setAmount] = useState('');
  const [Description, setDescription] = useState('');
  const [CreatorName, setCreatorName] = useState('');
  const [multipleProgress, setMultipleProgress] = useState(0);
  const [status, setStatus] = useState("");
  let [loading, setLoading] = useState(false);
  const [Listed, setListed] = useState(false);
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const [isSucces, setSuccess] = useState(null);

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
    setuserInfo({
      ...userInfo,
      file: e.target.files[0],
      filepreview: URL.createObjectURL(e.target.files[0]),
    });
  }

  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    }
  }
  // Appending metadata in formData  
  const UploadMultipleFiles = async () => {
    setLoading(true)
    //Creating Metadata
    const data = {
      'multipleFiles': multipleFiles[0].name,
      'Category': Category,
      'NFTname': NFTname,
      'Tags': Tags,
      'Royalty': Royalty,
      'Amount': Amount,
      'Description': Description,
      'CreatorName': CreatorName,
    }
    const { success, status, signerAddress, tokenId } = await createNFT(data);
    const Owner = signerAddress;
    const itemId = 0;
    // const tokenId = 0;
    // const success = true;
    // const status = true;
    const formData = new FormData();
    formData.append('Category', Category);
    formData.append('NFTname', NFTname);
    formData.append('Tags', Tags);
    formData.append('Royalty', Royalty);
    formData.append('Amount', Amount);
    formData.append('Description', Description);
    formData.append('CreatorName', CreatorName);
    formData.append('files', multipleFiles);
    formData.append('Owner', Owner);
    formData.append('tokenId', tokenId);
    formData.append('itemId', itemId);
    formData.append('Listed', Listed);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('files', multipleFiles[i]);
    }
    if (success) {
      await multipleFilesUpload(formData, mulitpleFileOptions);
      alert('Asset successfully minted');
    }
    else {
      alert('Something went wrong !!!')
    }
    setStatus(status);
    setLoading(false)
  }

  async function RoyaltyFun(Royalty) {
    var subTotalFormatted = parseFloat(Royalty).toFixed(2)
    setRoyalty(subTotalFormatted)
    console.log(subTotalFormatted);
    if (Royalty < 0) {
      setRoyalty(0)
    }
    if (Royalty > 10) {
      setRoyalty(10)
    }
  }

  async function createNFT(data) {
    //Sending metadata to IPFS and getting response
    const pinataResponse = await pinJSONToIPFS(data);
    console.log(pinataResponse)
    const tokenURI = await web3.utils.asciiToHex(pinataResponse.pinataUrl);
    //the transaction
    window.contract = await new web3.eth.Contract(contractABI, NFTsContractAddress);
    const transactionParameters = {
      to: NFTsContractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .create(1, tokenURI, jjj, Royalty * 100, window.ethereum.selectedAddress)
        .encodeABI(),
    };
    try {
      const txHash = await web3.eth.sendTransaction(transactionParameters)
      const tokenId = parseInt(web3.eth.abi.decodeParameter("uint256", txHash.logs[0].data));
      return {
        signerAddress: txHash.from,
        success: true,
        status:
          "✅ Check out your transaction on Polygonscan: https://mumbai.polygonscan.com/tx/" +
          txHash.blockHash,
        tokenId: tokenId,
      };
    } catch (error) {
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  }
  return (
    <div className="row mt-3">
      {/* previw      */}
      {userInfo.filepreview !== null ?
        <img className="previewimg" style={{ "width": "25%" }} src={userInfo.filepreview} alt="UploadImage" />
        : null}
      {/* previw      */}
      <div className="p-0">
        <div className="row p-0">
          <div className="formdesign col-12 p-5 row">
            {isSucces !== null ? <h4> {isSucces} </h4> : null}
            <div className="form-group col-12 my-3">
              <input type="file" id='Image' className="form-control form-control-lg" name="upload_file" onChange={(e) => MultipleFileChange(e)} single accept="image/png, image/jpeg" />
            </div>
            <div className="col-6 my-3">
              <div className="form-floating">
                <input type="text" id='Category' onChange={(e) => setCategory(e.target.value)} placeholder="Category" value="Art"  className="form-control form-control-lg" readonly />
                <label className="h5" for="Category">Category</label>
              </div>
            </div>
            <div className="col-6 my-3">
              <div className="form-floating">
                <input type="text" id='NFTname' onChange={(e) => setNFTname(e.target.value)} placeholder="NFT name" className="form-control form-control-lg" />
                <label className="h5" for="NFTname">NFT name</label>
              </div>
            </div>
            <div className="col-6 my-3">
              <div className="form-floating">
                <input type="text" onChange={(e) => setTags(e.target.value)} placeholder="Tags" className="form-control form-control-lg" />
                <label className="h5" for="floatingInput">Tags</label>
              </div>
            </div>
            <div className="col-6 my-3 d-flex">          
                {/* <input type="number" id='Royalty' onChange={(e) => RoyaltyFun(e.target.value)} placeholder="Asset id" className="form-control form-control-lg\" /> */}
                {/* <label className="h5 pb-2" for="Royalty">Royalty </label> <label>5</label> */}

              
                <div className="form-floating col-11 tooltip1 ">
               
                <input type="number" id='Royalty' onChange={(e) => RoyaltyFun(e.target.value)} placeholder="Royalty" className="form-control form-control-lg" /><span class="tooltiptext">message</span>
                
               
                <label className="h5" for="Royalty">Royalty </label></div>
                
                <div className="input-group-prepend input-group-lg col-1">
                <span className="input-group-text">%</span>   
                 
              </div>
            </div>
            <div className="col-6 my-3">
              <div className="form-floating">
                <input type="number" id='price' onChange={(e) => setAmount(e.target.value)} placeholder="Enter Base price" className="form-control form-control-lg" />
                <label className="h5" for="price">Enter Base price</label>
              </div>
            </div>
            <div className="col-6 my-3">
              <div className="form-floating">
                <input type="text" id='CreatorName' onChange={(e) => setCreatorName(e.target.value)} placeholder="Enter CreatorName" className="form-control form-control-lg" />
                <label className="h5" for="CreatorName">Enter CreatorName</label>
              </div>
            </div>
            <div className="col-12 my-3">
              <div className="form-floating">
                <textarea id='textarea' onChange={(e) => setDescription(e.target.value)} style={{ height: '150px' }} placeholder="Enter Description" className="form-control form-control-lg" ></textarea>
                <label className="h5" for="textarea">Enter Description</label>
              </div>
            </div>
            {loading ? (
              <button
                type="button"
                className="my-3 btn btn-danger btn-lg btn-block"
              >
                <Spinner animation="border" variant="white" />
              </button>
            ) : (
              <button
                onClick={() => UploadMultipleFiles()}
                type="button"
                className="my-3 btn btn-danger btn-lg btn-block"
              >
                Upload
              </button>
            )}
          </div>
        </div>
      </div>
      <p style={{ "color": "white", "fontSize": "24px" }}>{status}</p>
    </div>
  );
}

export default FileUploadScreen;