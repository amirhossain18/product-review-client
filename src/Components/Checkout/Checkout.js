import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
 
const Checkout = () => {
    const {_id, name , price} = useLoaderData();
    const {user} = useContext(AuthContext)


   const handlePlaceOrder = event => {
    event.preventDefault();
    const form = event.target;
    const name= `${form.firstName} ${form.lastName}`
    const email = user?.email || "unRegiser";

    const review= form.review.value;

   const orderProduct = {
    order: _id,
    name,
    price,
    customer: name,
    email,

    review
   }
     fetch('http://localhost:5000/review',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
         body: JSON.stringify(orderProduct)
     })
     .then(res=>res.json())
      .then(data=> {
       
        console.log(data)
        if(data.acknowledge){
            alert('reciew pleaced succeccfully')
            form.reset();
        }
    }) 
      .catch(err=>console.log(err))
   }



    return (
        <div className="container"> 
        <h1>Product Name: <span>  <h4>{name} </h4> </span> </h1>
        <h4>Price {price}</h4>
          <form onSubmit={handlePlaceOrder}>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <input name="firstName" type="text" class="form-control is-valid"  placeholder="First name"  required/>
    </div>
    <div class="col-md-4 mb-3">
      <input name="lastName"  type="text" class="form-control is-valid" placeholder="Last name"  required/>
     
    </div>
    <div class="col-md-4 mb-3">
    
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" ></span>
        </div>
        <input name="email"  type="email" class="form-control is-invalid" id="validationServerUsername" placeholder="email" defaultValue={user?.email} aria-describedby="inputGroupPrepend3" required readOnly/>
     
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">

      <input name="address"  type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required/>
    
    </div>
    <textarea name="review" className="textarea textarea-accent" placeholder="Review"> </textarea>

  
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
            
        </div>
    );
};

export default Checkout;