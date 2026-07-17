import React from 'react';

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <h1 className='text-center'>The Zerodha Universe</h1>
                <p className='text-center'>Extend your trading and investment experience even further with our partner platforms</p>



                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png" className="d-block mx-auto"
                        style={{
                            width: "220px",
                            height: "80px",
                            objectFit: "contain"
                        }} />
                    <p className='text-small text-muted text-center'>Thematic investment platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" className="d-block mx-auto"
                        style={{
                            width: "220px",
                            height: "80px",
                            objectFit: "contain"
                        }} />
                    <p className='text-small text-muted text-center'>Algo & strategy platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" className="d-block mx-auto"
                        style={{
                            width: "220px",
                            height: "80px",
                            objectFit: "contain"
                        }} />
                    <p className='text-small text-muted text-center'>Options trading platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" className="d-block mx-auto"
                        style={{
                            width: "220px",
                            height: "80px",
                            objectFit: "contain"
                        }} />
                    <p className='text-small text-muted text-center'>Asset management</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/goldenpiLogo.png" className="d-block mx-auto"
                        style={{
                            width: "220px",
                            height: "80px",
                            objectFit: "contain"
                        }} />
                    <p className='text-small text-muted text-center'>Bonds trading platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png" className="d-block mx-auto"
                        style={{
                            width: "220px",
                            height: "80px",
                            objectFit: "contain"
                        }} />
                    <p className='text-small text-muted text-center'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{ width: "20%", margin: "0 auto" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;