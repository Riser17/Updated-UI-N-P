'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const MultipleFile = require('../models/multiplefile');
const mongoose = require('mongoose');

// Function for posting the data 
const multipleFileUpload = async (req, res, next) => {
    try {
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file);
        });
        const multipleFiles = new MultipleFile({
            Category: req.body.Category,
            NFTname: req.body.NFTname,
            Royalty: req.body.Royalty,
            Amount: req.body.Amount,
            Description: req.body.Description,
            Tags: req.body.Tags,
            CreatorName: req.body.CreatorName,
            Owner: req.body.Owner,
            Listed: req.body.Listed,
            tokenId: req.body.tokenId,
            itemId: req.body.itemId,
            files: filesArray
        });

        const fs = require('fs');

        // Saving and appending the data in multifile.json
        const saveData = (multipleFiles) => {
            const finished = (error) => {
                if (error) {
                    console.error(error)
                    return;
                }
            }
            const jsonData = JSON.stringify(multipleFiles, null, 2)
            fs.appendFile('multipleFiles.json', jsonData, finished)
        }
        saveData(multipleFiles);
        await multipleFiles.save();
        res.status(201).send('Files Uploaded Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Getting the data with filter and sort condition
const getallMultipleFiles = async (req, res, next) => {
    try {
        let { sort, filter, connectedAccount, minPrice, maxPrice,category } = req.query;
        category = JSON.parse(category)
        if (connectedAccount) {
            connectedAccount = JSON.parse(connectedAccount)
        }
        if (filter) {
            filter = JSON.parse(filter)
            if (filter.title) {
                filter.title = new RegExp(filter.title, 'i')
            }
            else if (filter.NFTname) {
                filter.NFTname = new RegExp(filter.NFTname, 'i')
            }
        }
        if (sort) {
            sort = JSON.parse(sort)
        }
        if (minPrice) {
            minPrice = JSON.parse(minPrice)
        }
        if (maxPrice) {
            maxPrice = JSON.parse(maxPrice)
        }
        const minimum = await MultipleFile.find().sort({ Amount: 1 });
        const maximum = await MultipleFile.find().sort({ Amount: -1 });
        let min = minimum[0].Amount;
        let max = maximum[0].Amount;
        if (min < minPrice) {
            min = minPrice;
        }
        if (max > maxPrice) {
            max = maxPrice;
        }
        const files = await MultipleFile.find({ ...filter, Category: category, Owner: connectedAccount, Listed: false, Amount: { $gte: min, $lte: max } }).sort({ ...sort });
        res.status(200).send(files);
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message);
    }
}

const getallMultipleFilesMyNFTsMarketPlace = async (req, res, next) => {
    try {
        let { sort, filter, connectedAccount, category } = req.query;
        
        if (connectedAccount ) {
            connectedAccount = JSON.parse(connectedAccount)
            category = JSON.parse(category)
        }
        if (filter) {
            filter = JSON.parse(filter)
            if (filter.title) {
                filter.title = new RegExp(filter.title, 'i')
            }
            else if (filter.NFTname) {
                filter.NFTname = new RegExp(filter.NFTname, 'i')
            }
        }
        if (sort) {
            sort = JSON.parse(sort)
        }
        const files = await MultipleFile.find({ ...filter, Owner: connectedAccount,Category: category , Listed: true }).sort({ ...sort });
        res.status(200).send(files);
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message);
    }
}

const getallMultipleFilesMarketPlace = async (req, res, next) => {
    try {
        let { sort, filter, category } = req.query;
        console.log(category)
        category = JSON.parse(category)
        if (filter) {
            filter = JSON.parse(filter)
            if (filter.title) {
                filter.title = new RegExp(filter.title, 'i')
            }
            else if (filter.NFTname) {
                filter.NFTname = new RegExp(filter.NFTname, 'i')
            }
        }
        if (sort) {
            sort = JSON.parse(sort)

        }
        const files = await MultipleFile.find({ ...filter,Category: category , Listed: true }).sort({ ...sort });
        res.status(200).send(files);
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message);
    }
}

const updateDB = async (req, resp) => {
    MongoClient.connect(url, function (err, db) {
        let { tokenId, itemId, listed } = req.query;
        let list
        if ('true' === listed) {
            list = true
        }
        if ('false' === listed) {
            list = false
        }
        if (err) throw err;
        var dbo = db.db("upload-files-database");
        dbo.collection("multiplefiles").updateOne({ tokenId: parseInt(tokenId) }, { $set: { Listed: list } })
        dbo.collection("multiplefiles").updateOne({ tokenId: parseInt(tokenId) }, { $set: { itemId: parseInt(itemId) } })
        resp.send({ result: "Updated" });
    });
}
// Getting the daya for particular asset page(Individual Asset Page)
const getnfts = async (req, res, next) => {
    try {
        const nft = await MultipleFile.findOne({ _id: mongoose.Types.ObjectId(req.params.id) });
        res.status(200).send(nft);
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message);
    }
}

// Image file size formatter functon
const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

// Exporting all the functions from this file
module.exports = {
    multipleFileUpload,
    getallMultipleFiles,
    getnfts,
    updateDB,
    getallMultipleFilesMyNFTsMarketPlace,
    getallMultipleFilesMarketPlace,
}