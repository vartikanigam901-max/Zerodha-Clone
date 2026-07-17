import React from 'react';

function Hero() {
    return (
        <section
            className="container-fluid"
            id="supportHero"
            style={{ backgroundColor: "rgb(56, 126, 209)" }}>

            <div className="container">

                <div id="supportWrapper">
                    <p className="fs-3 text-white m-0">Support Portal</p>
                    <a href="" className="text-white">Track Tickets</a>
                </div>

                <div className="row mt-4 px-5 pb-5 gx-5">

                    <div className="col-lg-7">
                        <h3 className="fs-2 fw-semibold text-white mb-4">
                            Search for an answer or browse help topics to create a ticket
                        </h3>

                        <input
                            type="text"
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                        />

                        <div className="mt-4">
                            <a href="" className="text-white me-3">Track account opening</a>
                            <a href="" className="text-white me-3">Track segment activation</a>
                            <a href="" className="text-white me-3">Intraday</a>
                            <a href="" className="text-white me-3">Margins</a>
                            <a href="" className="text-white">Kite user manual</a>
                        </div>
                    </div>

                    <div className="col-lg-5 ps-5">
                        <h3 className="fs-2 fw-semibold text-white mb-4">
                            Featured
                        </h3>

                        <ol className="text-white">
                            <li className="mb-3">
                                <a href="" className="text-white">
                                    Current Takeovers and Delisting-January 2024
                                </a>
                            </li>

                            <li>
                                <a href="" className="text-white">
                                    Latest Intraday leverages-MIS & CO
                                </a>
                            </li>
                        </ol>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;