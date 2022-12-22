import React, { useState } from 'react';

const Addproducts = () => {
    const [user, setUser]= useState()
 const handleAddproducts = event =>{
    event.preventDefault();
    console.log(user)
   
 }


 const handleInputBlur = event =>{
 const value = event.target.value;
 const field= event.target.name;
 const newProduct = {...user}
 newProduct[field] = value;
 newProduct[field] =value;
 setUser(newProduct);


 }



    return (
        <div>
             <h2>Add products</h2>
             <form onSubmit={handleAddproducts}>
   <input onBlur={handleInputBlur} type="text" name="name" placeholder="product name" />
   <br />
   <input type="text" name="email" placeholder="email" />
   <br />
             <button>Submit</button>
             </form>
        </div>
    );
};

export default Addproducts;