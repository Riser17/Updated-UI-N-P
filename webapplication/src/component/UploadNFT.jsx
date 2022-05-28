import React, { useState, useEffect } from 'react';
import FileUploadScreen from '../screens/FileUploadScreen';
import { getMultipleFiles } from '../data/api';

// Function for upload NFT
function UploadNFT() {


  return (
    <>
      <div className="container">
        <FileUploadScreen />
      </div>
    </>
  );
}

export default UploadNFT;
