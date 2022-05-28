import React, { useState, useEffect } from 'react';

import Uploadmusic from './Uploadmusic';

import { getMultipleFiles } from '../data/api';

function MusicNFT() {

  
    return (
        <>
            <div className="container">

                <Uploadmusic />

            </div>

        </>
    );
}

export default MusicNFT;

































