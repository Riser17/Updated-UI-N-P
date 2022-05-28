import React, { useEffect } from "react";

// Function for Slide in landing page
export default function Slider({ props, height, SL1, SL2, SL3, SL4, SL5, SL6 }) {
    let result = "#" + props;
    return (
        <>
            <div id={props} className="carousel slide p-0 m-20" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={SL1} className="d-block w-100" height={height} alt="Image Not Found" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={SL2} className="d-block w-100" height={height} alt="Image Not Found" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={SL3} className="d-block w-100" height={height} alt="Image Not Found" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={SL4} className="d-block w-100" height={height} alt="Image Not Found" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fourth slide label</h5>
                            <p>Some representative placeholder content for the fourth slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={SL5} className="d-block w-100" height={height} alt="Image Not Found" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fifth slide label</h5>
                            <p>Some representative placeholder content for the fifth slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={SL6} className="d-block w-100" height={height} alt="Image Not Found" />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={result} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={result} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}