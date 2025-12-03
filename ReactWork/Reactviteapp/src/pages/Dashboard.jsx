import React, {use, useEffect, useState}from 'react'

function dashboard() {
    const [data,setData]=useState([]);
    const [cart,setCart]=useState([]);

     useEffect(() => {
      async function fetchData() {
         const serverresponse = await fetch('https://fakestoreapi.com/products');
         const jsonresponse = await serverresponse.json();
         console.log(jsonresponse);
         setData(jsonresponse);
      }
      fetchData();
     }, [])
     function shoppingcart(item) {
      setCart(data => [...data, item]);
      // alert(cart.length);
          //  alert(item.title + " added to cart");
  }
  return (
    <div>
  <div style={{backgroundColor:'skyblue',width:"200px",height:"200px", display:'inline-block', float:'right', marginRight:'20px', marginTop:'20px', padding:'10px'}}>
        {
          cart.length === 0 ? (<h4>Cart is empty</h4>) :
            (
              cart.map((item) => (
                <h3 style={{ backgroundColor: 'cyan' }}>{item.title}
                cart</h3>
              )
              )
            )
        }
      </div>
  {
    data.length === 0 ? (
      <h2>Data could not fetch</h2>
    ) : (
      data.map((item, index) => (
        <div style={{border: '3px solid Black', margin: '10px', padding: '10px', height: '500px', width: '800px',display: 'grid', alignItems: 'center'}} key={index}>
          <img src={item.image} alt={item.title} style={{width: '100px', height: '100px', alignItems: 'center'}} />
          <h3>{item.title}</h3>
          <h5>{item.description}</h5>
          <h6>Price: ${item.price}</h6>
          <p>Category: {item.category}</p>
          <button onClick={()=>shoppingcart(item)}>Add to Cart</button>
        </div>
      ))
    )
  }
</div>

  )
}

export default dashboard
