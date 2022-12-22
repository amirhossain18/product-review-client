import React from 'react';
import './Productslist.css'
const ProductsList = ({product}) => {
  const {_id , name, email, img} = product;
 console.log(_id)
    return (
        <div className='dis'>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    <img src={img} alt="" />
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductsList;