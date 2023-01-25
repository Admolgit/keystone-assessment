import React from "react";
import { ProductData } from "./ProductsData";
import "./ProductCard.scss";
import ProductChart from "./ProductChart";

const ProductCard = () => {
  return (
    <div className="mainContainer">
      <div>
        <ProductChart />
      </div>
      <div className="productContainer">
        <div className="latest">
          <h2>Latest Added Products</h2>
          <p>...</p>
        </div>
        <div>
          {ProductData.map((product) => {
            return (
              <div className='product' key={product.id}>
                <div>
                  <img className='image' src={product.image} alt='' />
                </div>
                <div className="productName">
                  <h2>{product.product}</h2>
                  <p>{product.variety} Varieties</p>
                </div>
                <div>
                  <h2>{product.sku}</h2>
                </div>
                <div>
                  <h2>{product.productType}</h2>
                </div>
                <div>
                  <h2>{product.date}</h2>
                </div>
                <div>
                  <h2  className={product.status === 'Publish' ? 'selected' : 'disabled'}>{product.status}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
