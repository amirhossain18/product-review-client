import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const Review = () => {
    const {user} = useContext(AuthContext)
   const [order, setOrder] =useState({})


   useEffect(() =>{
    fetch(`http://localhost:5000/review?email=${user.email}`)
    .then(res => res.json())
   .then(data => setOrder(data))
   },[user?.email])
   
    return (
        <div>
                <h3>Review page</h3>
                <h2> {order.length}</h2>
        </div>
    );
};

export default Review;