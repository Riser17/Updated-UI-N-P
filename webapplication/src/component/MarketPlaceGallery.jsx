import React, { useState, useEffect } from 'react';
import Filters from './Filters'
import AllNFTsMarketPlace from './AllNFTsMarketPlace'
import { getMultipleFilesMarketPlace } from '../data/api'

// Function for marketplace gallery
export default function MyMarketPlaceGallery() {
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  const [table, setTable] = useState([]);
  var [table1, setTable1] = useState([]);

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
      const data = await getMultipleFilesMarketPlace(filter, sort,'art');
      setTable(data);
      const data1 = await getMultipleFilesMarketPlace(filter, sort,'music');
      setTable1(data1);
    }
    fetchData();
  }, [filter, sort]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMultipleFilesMarketPlace(filter, sort,'art');
      setTable(data);
      const data1 = await getMultipleFilesMarketPlace(filter, sort,'music');
      setTable1(data1);
    }
    fetchData();
  }, []);

  return (
    <>
      {/* Sending data using props */}
      <Filters onsearch={onsearch} onsort={onsort} />
      <AllNFTsMarketPlace table={table} table1={table1} />
    </>
  )
}
