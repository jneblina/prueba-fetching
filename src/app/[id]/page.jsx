import React from 'react';
import Image from 'next/image';
import { obtenerProducto } from '@/libs/getProductos';
import Link from 'next/link';

const page = async ({ params: { id } }) => {
  const data = await obtenerProducto(id);

  return (
    <div className='bg-slate-300 md:h-screen sm:h-full p-4'>
      <h1 className='text-center font-bold text-3xl text-yellow-500 p-4 mb-8 uppercase'>
        Información del producto
      </h1>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/3 px-4 mb-4 md:mb-0'>
          <div className='flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
            <div className='mx-4 -mt-6 h-1/6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center'>
              <Image
                src={data.thumbnail}
                className='border-gray-50 border-4 rounded-xl text-center'
                alt='product image'
                width={200}
                height={200}
                style={{ width: 300, height: 200 }}
              ></Image>
            </div>
            <div className='p-6'>
              <h2 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                Nombre: {data.title}
              </h2>
              <h6 className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
                <p>
                  <span className='font-bold'>Descripcion:</span> {data.description}
                </p>
                <p>
                  <span className='font-bold'>Precio:</span> ${data.price}
                </p>
                <p>
                  <span className='font-bold'>Calificacion:</span> {data.rating}★
                </p>
                <p>
                  <span className='font-bold'>Stock:</span> {data.stock} unidades
                </p>
                <p>
                  <span className='font-bold'>Marca:</span> {data.brand}
                </p>
                <p>
                  <span className='font-bold'>Categoria:</span> {data.category}
                </p>
              </h6>
            </div>
            <div className='p-6 pt-0 space-x-6 text-center'>
              <button className='bg-blue-500 text-white p-2 rounded-full font-bold uppercase transition duration-200 ease-in-out hover:bg-blue-700 active:bg-blue-900 focus:outline-none'>
                Comprar
              </button>
              <button className='bg-green-500 text-white p-2 rounded-full font-bold uppercase transition duration-200 ease-in-out hover:bg-green-700 active:bg-green-900 focus:outline-none'>
                <Link href={'/'} className='p-2 rounded-md'>
                  Regresar
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-2/3 flex justify-center items-center'>
          <div className='grid grid-cols-3 gap-5'>
            {data.images.map((imageUrl, index) => (
              <div key={index} className='w-full'>
                <Image
                  className='rounded-lg'
                  src={imageUrl}
                  alt={`Imagen ${index + 1}`}
                  width={200}
                  height={200}
                  style={{ width: 200, height: 200 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
