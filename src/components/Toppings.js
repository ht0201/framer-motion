import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0 0 8px rgb(255, 255, 255)',
    boxShadow: '0 0 8px rgb(255, 255, 255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <div className='toppings container'>
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.2,
                originX: 0,
                color: 'orange',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <motion.button variants={buttonVariants} whileHover='hover'>
          Order
        </motion.button>
      </Link>
    </div>
  );
};

export default Toppings;
