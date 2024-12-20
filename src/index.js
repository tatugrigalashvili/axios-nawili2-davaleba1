import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(function() {
    axios.get('https://fakestoreapi.com/products')
     .then(function(response) {
      setProducts(response.data);
     }).catch(function(error){
      console.log(error)
     })
  }, []);

  return (
    <React.Fragment>
      {products.map((item, index) => (
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </React.Fragment>
  );
}


var root = document.getElementById("root")
ReactDom.createRoot(root).render(<App></App>)