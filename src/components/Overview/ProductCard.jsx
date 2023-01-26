import React from "react";
import { ProductData } from "./ProductsData";
import ProductChart from "./ProductChart";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-3 gap-[1.4rem] bg-[#F4F8FC] pt-[0rem] pl-[1rem] pb-[1rem] pr-[1rem] mr-[2rem] sm-sc:block sm-sc:mb-[2rem] ">
      <div>
        <ProductChart />
      </div>
      <div className="bg-[#fff] p-[2rem] col-span-2 sm-sc:p-[0.5rem] sm-sc:mt-[1rem] ">
        <div className="flex justify-between items-center pb-[2rem] sm-sc:pb-[1rem]">
          <h2 className="text-[16px] text-[#A8B1B8] sm-sc:text-[12px] ">Latest Added Products</h2>
          <p>...</p>
        </div>
        <div>
          {ProductData.map((product) => {
            return (
              <div className='grid grid-cols-6 items-center gap-[1rem] pb-[1rem] sm-sc:gap-[0rem] sm-sc:w-[300px] sm-sc:m-auto ' key={product.id}>
                <div>
                  <img className='w-[50px] h-[40px] sm-sc:w-[40px] sm-sc:h-[30px] ' src={product.image} alt='' />
                </div>
                <div className="w-[200px] ml-[-4rem] sm-sc:w-[0px] sm-sc:ml-[0rem]">
                  <h2 className='text-[16px] sm-sc:text-[10px]'>{product.product}</h2>
                  <p className='text-[14px] sm-sc:text-[10px]'>{product.variety} Varieties</p>
                </div>
                <div>
                  <h2 className='text-[16px] sm-sc:text-[10px]'>{product.sku}</h2>
                </div>
                <div>
                  <h2 className='text-[16px] sm-sc:text-[10px]'>{product.productType}</h2>
                </div>
                <div>
                  <h2 className='text-[16px] sm-sc:text-[10px]'>{product.date}</h2>
                </div>
                <div>
                  <h2  className={product.status === 'Publish' ? 'text-[#7AD6D4] bg-[#b8f7f6] p-[0.5rem] text-[16px] sm-sc:text-[10px] ' : 'bg-[#FDF2EE] text-[#F8CFBF] p-[0.5rem] text-[16px] sm-sc:text-[10px]'}>{product.status}</h2>
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
