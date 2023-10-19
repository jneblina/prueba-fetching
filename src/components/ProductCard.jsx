'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'

const ProductCard = ({ product }) => {

  const router = useRouter()

  return (
    <div className='flex flex-col md:flex-row gap-4 w-auto'>
        <div className='md:w-64 sm:w-48'>
          <Image
            src={product.thumbnail}
            className='rounded-2xl m-2'
            alt="product image"
            width={300}
            height={200}
            style={{ width: 300, height: 200 }}
          ></Image>
        </div>
      <div className='mt-2'>
        <p className='font-bold text-xl'>{product.title}</p>
        <div className='mt-4'>
          <button
            onClick={() => {
              router.push(`http://localhost:3000/${product.id}`)
            }}
            className="bg-purple-500 text-white p-2 rounded-full font-bold uppercase
            transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard