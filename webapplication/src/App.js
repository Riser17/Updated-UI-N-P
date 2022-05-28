import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/Navbarui";
import Landing from "./component/Landing";
import Createnft from "./component/Createnft";
import Dashboard from "./component/Dashboard";
import Marketplace from "./component/Marketplace";
import DetailNFT from "./component/DetailNFT";
import MyNFTs from './component/MyNFTs';
import Login from './component/Login'
import { useState, useEffect } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
} from './component/ConnectWallet'

// Function for APP
function App(props) {
  //States for managing account status
  const [walletAddress, setWallet] = useState("");
  useEffect(async () => {
    const { address } = await getCurrentWalletConnected();
    setWallet(address);
    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });
    } else {
    }
  }
  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  };

  return (
    <Router>
      <NavBar
        walletAddress={walletAddress}
        connectWalletPressed={connectWalletPressed}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        {walletAddress.length > 0 ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createnft" element={<Createnft />} />

            <Route path="/MyNFTs" element={<MyNFTs />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Landing />} />
            <Route path="/createnft" element={<Landing />} />
            <Route path="/MyNFTs" element={<Landing />} />
          </>
        )}
        <Route path="/DetailNFT/:id" element={<DetailNFT />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

