import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_PRODUCTS } from '../../graphql/queries.js';
import Dashboard from '../Dashboard/Dashboard';
import "./GetProducts.css";
const GetProducts = () => {

  const { data } = useQuery(LOAD_PRODUCTS);


  return (
    <div>
      {
        data?
          <Dashboard props={data.categories[0].products}/> 
      : 
        <div className='loading-container'>
          <p className='loading-text'>Loading...</p>
        </div>
      }
    </div>
  );
};

export default GetProducts;