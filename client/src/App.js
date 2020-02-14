import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

// Services
import productServices from './services/productServices';

function App() {
  const[products, setproducts] = useState(null);

  useEffect(() => {
    if(!products){
      getProducts();
    }
  });

  const getProducts = async ()=>{
    let res = await productServices.getAll();
    console.log(res);
    setproducts(res);
  }

  const renderProduct = (product) => {
    return(
        <li key={product._id} className="list__item product">
          <h3 className="product__name">{product.name}</h3>
          <p className="product__description">{product.description}</p>
        </li>
    )
  }

  return (
    <div className="App">
      <ul className="list">
        {
          (products && products.length > 0) ? 
          (products.map(product => renderProduct(product))) :
          (<h1>No products found.</h1>)
        }
      </ul>
    </div>
  );
}

export default App;
