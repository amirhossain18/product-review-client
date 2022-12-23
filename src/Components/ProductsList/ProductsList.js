import React from 'react';
import { Link } from 'react-router-dom';
import './Productslist.css'
const ProductsList = ({product}) => {
  const {_id , name, email, img} = product;
 console.log(_id)
    return (
        <div className="card w-50 d-flex">
        <img className="card-img-top" src={img} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={`checkout/${_id}`}>
          <button href="#s" className="btn btn-primary">Go somewhere</button>
          </Link>
        </div>
      </div>
    );
};

export default ProductsList;