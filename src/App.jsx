import React from 'react';
import products from './products';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div style={{ backgroundColor: "#0d0f12", minHeight: "100vh", padding: "40px", color: "white", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "40px" }}>Product List</h1>
      {products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default App;
