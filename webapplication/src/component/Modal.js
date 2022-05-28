import React from "react";
import "./Modal.css";
import thumbnail from "../Assets/images/thumbnail.png";
import logo from "./logo.png";

function Modal({ setOpenModal }) {
  return (

    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            style={{ "color": "white" }}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-x-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <img alt="picture2" src={logo} width="150px" height="150px" />
        </div>
        <div className="row2 pb-4">
          <div className="col1 col-3">
            <h1 id="modelHeading" style={{ "color": "white" }}>WE BELIVE IN A FREED WORLD FOR ALL ARTISTS</h1>
          </div>
        </div>
        <div  className="col1 col-5" style={{"color":"white"}}>
             <p id="noisy">A Decentralized Markrtplace Created By Artists</p> 
            
             <p className="noisy">Noisypanda.World</p>
           </div>
        <div className="footer">
          <button
            className="btn btn-outline-danger "
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
            type="button"
          >
            ENTER NOW
          </button>
        </div>
        <div className="text-center">
          <img alt="picture" src={thumbnail} width="450px" height="100%" />
        </div>
      </div>
    </div>
  );
}

export default Modal;

