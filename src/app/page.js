import React from 'react';
import ProductCard from '@/components/ProductCard';
import { obtenerProductos } from '@/libs/getProductos';

const HomePage = async () => {
  const { products } = await obtenerProductos();

  return (
    <div className='bg-slate-200 items-center w-screen'>
      <h1 className='text-center font-bold p-4 text-5xl text-yellow-500'>AMASON</h1>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 p-4 '>
        {products.map((product) => (
          <div className='p-2' key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
