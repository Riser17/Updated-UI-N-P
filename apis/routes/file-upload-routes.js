'use strict';
const express = require('express');
const { upload } = require('../helpers/filehelper');
const { multipleFileUpload,
    getallMultipleFiles,
    getnfts,
    updateDB,
    getallMultipleFilesMyNFTsMarketPlace,
    getallMultipleFilesMarketPlace } = require('../controllers/fileuploadController');
const router = express.Router();

// Route for posting the data
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);

// Route for getting all the data from the database
router.get('/getMultipleFiles', getallMultipleFiles);

router.get('/getMultipleFilesMarketPlace', getallMultipleFilesMarketPlace);

router.get('/getMultipleFilesMyNFTsMarketPlace', getallMultipleFilesMyNFTsMarketPlace);

router.put("/update", updateDB)

// Route for getting the data according to its ID
router.get('/DetailNFT/:id', getnfts);

module.exports = {
    routes: router
}