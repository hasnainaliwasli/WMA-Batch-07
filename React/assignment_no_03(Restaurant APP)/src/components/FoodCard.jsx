import React from 'react';

const FoodCard = ({ imageSrc, title, detail, price, click }) => {

    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className="card">
                <img src={imageSrc} style={{ maxHeight: '150px', objectFit: 'fill', width: '100%' }} className="card-img-top" alt={title} />
                <div className="card-body text-center">
                    <h5 className="card-title text-start">{title} || {price}</h5>
                    <p className="card-text text-start">{detail}</p>
                    <button className="btn btn-primary" onClick={click}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
