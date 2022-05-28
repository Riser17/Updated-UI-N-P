import React, { useState, useEffect } from 'react';
import Filters from './Filters'
import MyNFTsMarketPlace from './MyNFTsMarketPlace'
import { getMultipleFilesMyNFTsMarketPlace } from '../data/api'

// Function for marketplace gallery
export default function MyMarketPlaceGallery() {
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  const [table, setTable] = useState([]);
  var [table1, setTable1] = useState([]);
  const connectedAccount = window.ethereum.selectedAddress;

  //Function for filter
  function onsearch(event) {
    const NFTname = event.target.value
    if (NFTname && NFTname != "") {
      setFilter({ ...filter, NFTname });
    }
    else {
      setFilter(null)
    }
  }
  //Function for sort 
  function onsort(sortOrder) {
    setSort({ ...sort, Amount: sortOrder });
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getMultipleFilesMyNFTsMarketPlace(filter, sort, connectedAccount,'art');
      setTable(data);
      const data1 = await getMultipleFilesMyNFTsMarketPlace(filter, sort, connectedAccount,'music');
      setTable1(data1);
    }
    fetchData();
  }, [filter, sort]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMultipleFilesMyNFTsMarketPlace(filter, sort, connectedAccount,'art');
      setTable(data);
      const data1 = await getMultipleFilesMyNFTsMarketPlace(filter, sort, connectedAccount,'music');
      setTable1(data1);
    }
    fetchData();
  }, []);

  return (
    <>
      {/* Sending data using props */}
      <Filters onsearch={onsearch} onsort={onsort} />
      <MyNFTsMarketPlace table={table} table1={table1} />
    </>
  )
}
