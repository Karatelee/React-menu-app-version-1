import React from 'react';
import { Link } from 'react-router-dom';

import Loading from '@/components/Loading'
import logoImage from '@/images/logo.png'; 
import "../scss/styles.scss"


const Dishes = ({ dishes, addToCart }) => {
  return (
    <div className="containerStyle">
      <div className="header">
        <div className='header-line'>
          <div className="header-logo">
            <img src={logoImage} alt="" />
          </div>
          <div className='nav'>
            <a className='nav-item' href="/">HOME</a>
            <a className='nav-item' href="/menu">MENU</a>
            <a className='nav-item' href="/about">ABOUT US</a>
            <a className='nav-item' href="/cart">CART</a>
          </div>
        </div>

        <h1>Dishes</h1>
        
        {dishes ? (
          <div>
            {dishes.map((dish) => (
              <div key={dish.id}>
                <Link to={`/dishes/${dish.id}`}>
                  <img src={dish.image} alt={dish.name} />
                  <p>{dish.name}</p>
                  <p>{dish.price}</p>
                </Link>
                
                <button onClick={() => addToCart(dish)}>Add to cart</button>
              </div>
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Dishes;