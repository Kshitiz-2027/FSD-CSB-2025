import React, {use, useEffect, useState}from 'react'

function dashboard() {
    const [data,setData]=useState([]);
     useEffect(() => {
      async function fetchData() {
         const serverresponse = await fetch('https://fakestoreapi.com/products');
         const jsonresponse = await serverresponse.json();
         console.log(jsonresponse);
         setData(jsonresponse);
      }
      fetchData();
     }, [])
  return (
    <div>
  {
    data.length === 0 ? (
      <h2>Data could not fetch</h2>
    ) : (
      data.map((item, index) => (
        <div style={{border: '2px solid Blue', margin: '10px', padding: '10px', height: '200px', width: '500px',display: 'flex', alignItems: 'center'}} key={index}>
          <img src={item.image} alt={item.title} style={{width: '50px', height: '50px'}} />
          <h3>{item.title}</h3>
          <button>Add to Cart</button>
        </div>
      ))
    )
  }
</div>

  )
}

export default dashboard
