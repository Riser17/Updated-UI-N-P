import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../index.css";
import {
  connectWallet,
  getCurrentWalletConnected,
} from './ConnectWallet'

// Function for login
export default function Login() {
  const [walletAddress, setWallet] = useState("");
  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  };
  useEffect(async () => {
    const { address } = await getCurrentWalletConnected();
    setWallet(address);
  }, []);
  return (
    <>
      <div id="land" className="container-fluid">
        <div className="row1">
          <div className="col">
            <p id="first">WITH</p>
          </div>
        </div>
        <div className="row2 pb-4">
          <div className="col1 col-1">
            <p id="second">NOISY</p>
            <p id="subwhite">BUY THE NFT </p>
            <p id="subwhite">AND OWN THE</p>
            <p id="subwhite">PHYSICAL ART</p>
          </div>
          <div className="col2 col-2">
            <pre id="black"> PANDA...</pre>
            <p id="subwhite">BUY THE NFT </p>
            <p id="subwhite">AND OWN THE</p>
            <p id="subwhite">PHYSICAL ART</p>
          </div>
        </div>
        <div>
          <NavLink to='/' onClick={connectWalletPressed}>{walletAddress.length > 0 ? (
            String(walletAddress).substring(0, 9) +
            "..." +
            String(walletAddress).substring(36)
          ) : (
            <span>Connect Wallet</span>
          )}</NavLink>
        </div>
      </div>
    </>
  );
}