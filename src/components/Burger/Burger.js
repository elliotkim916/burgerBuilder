import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      console.log('igKey', igKey);
      return [...Array(props.ingredients[igKey])].map((_, i) => {  // gives an array with a specific number of spaces
        console.log(i);
        return <BurgerIngredient key={igKey + i} type={igKey} />; // corresponding ingredient
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;