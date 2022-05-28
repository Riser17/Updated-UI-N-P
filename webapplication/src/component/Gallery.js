import React, { useState, useEffect } from 'react'
import Filters from './Filters'
import MyNFTs from './MyNFTs'
import { getMultipleFiles } from '../data/api'

// Function for gallery of nft market
export default function Gallery() {
  
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  var [table, setTable] = useState([]);
  var [table1, setTable1] = useState([]);
  
  const connectedAccount = window.ethereum.selectedAddress;
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  function MinimumPrice(price) {
    setMinPrice(price)
  }
  function MaximumPrice(price) {
    setMaxPrice(price)
  }

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

  // function onsortart(){
    
  //  table1 = table.filter((item) => item.Category == 'art')
  //   setTable(table1);
  //   console.log(table1);
  // }
  // function onsortmusic(){
    
  //  table2 = table.filter((item) => item.Category == 'music')
  //    setTable(table2);

  //   console.log(table2);

 
  // }
// //

// useEffect(() => {
//   async function fetchData() {
//      table1 = table.filter((item) => item.Category == 'art')
//     setTable(table1);
//   }
//   fetchData();
// }, []); 

// useEffect(() => {
//   async function fetchData() {
//      table1 = table.filter((item) => item.Category == 'art')
//     setTable(table1);
//   }
//   fetchData();
// }, []);

// useEffect(() => {
//   async function fetchData() {
//      table2 = table.filter((item) => item.Category == 'music')
//     setTable(table2);
//   }
//   fetchData();
// }, []);


  //
  useEffect(() => {
    async function fetchData() {
      const data = await getMultipleFiles(filter, sort, connectedAccount, minPrice, maxPrice,'art');
      setTable(data);
      const data1 = await getMultipleFiles(filter, sort, connectedAccount, minPrice, maxPrice,'music');
      setTable1(data1);
    }
    fetchData();
  }, [filter, sort, connectedAccount, minPrice, maxPrice]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMultipleFiles(filter, sort, connectedAccount, minPrice, maxPrice,'art');
      setTable(data);
      const data1 = await getMultipleFiles(filter, sort, connectedAccount, minPrice, maxPrice,'music');
      setTable1(data1);
    }
    fetchData();
  }, []);

  return (
    <>
      {/* Sending data using props */}
      {/* <Filters onsearch={onsearch} onsort={onsort} MaximumPrice={MaximumPrice} MinimumPrice={MinimumPrice} onsortart={onsortart} onsortmusic={onsortmusic}/> */}
      <Filters onsearch={onsearch} onsort={onsort} MaximumPrice={MaximumPrice} MinimumPrice={MinimumPrice} />
      <MyNFTs table={table} table1={table1} />
    </>
  )
}
