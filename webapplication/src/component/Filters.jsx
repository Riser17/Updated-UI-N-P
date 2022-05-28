
import React, { useState, useEffect } from 'react';
import './priceslider.css';
import axios from 'axios';

// API url
const apiUrl = 'http://localhost:8080/api/';

// Function for filters
export default function Filters(props) {

    

    return (
        <div className="container-fluid mt-5" >
            
                    <div className='row '>
                        
                            <div className='col-6 form-group has-search p-2' id='searchDiv' style={{ "display": "flex", "margin": "auto" }}>
                            <span class="fa fa-search form-control-feedback"></span>
                                <input
                                    className='form-control'
                                    
                                    id='searchInput'
                                    type='search'
                                    placeholder='SEARCH MY NFTs'
                                    aria-label='Search'
                                    name='search'
                                    onChange={(event) => { props.onsearch(event) }} // Getting data using props
                                />
                                
                            </div>
                        
                        
                            <div className="dropdown mx-5  row">
                                <div className='col-4 mt-3' >
                                <strong style={{'color': 'white' }}>Sort by price : </strong>
                                <button
                                    style={{ backgroundColor: "rgb(0, 0, 0)" }}
                                    className="btn dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    
                                >
                                    Price 
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu"
                                    aria-labelledby="dropdownMenuButton2"
                                    style={{'backgroundColor': 'black' }}
                                >
                                    <li >
                                        {/*  Getting ascending data using props */}
                                        <a className="dropdown-item"id='sortprize' href="#" onClick={(event) => { props.onsort(1) }} style={{'color': 'white' }} >
                                            low to high
                                        </a>
                                    </li>
                                    <li>
                                        {/*  Getting descending data using props */}
                                        <a className="dropdown-item" href="#" onClick={(event) => { props.onsort(-1) }} style={{'color': 'white' }} >
                                            high to low
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-4 m-5 ms-6  ' >
                            
                                <div className="minmax p-2">
                                <span className='p-2' style={{'color': 'white' }}>FROM</span>
                                        <input type="text" onChange={(e) => { props.MinimumPrice(e.target.value) }} id="price_prod" name="price_prod" />
                                    <span className='p-2'  style={{'color': 'white' }}>To</span>
                                        <input type="text" onChange={(e) => { props.MaximumPrice(e.target.value) }} id="price_prod" name="price_prod" />
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
    )
}
