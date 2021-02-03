import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"></BurgerIngredients>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
        </div>
    );
};

export default Burger;