import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 pt-5 mt-5'>
                     <h3>{productName}</h3>
                     <p style={{fontSize: "1.2em"}}>{productDescription}</p>
                     <div>
                        <a href={learnMore} style={{textDecoration: "none"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>


                <div className='col-6'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;