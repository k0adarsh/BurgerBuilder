import React, { Component } from 'react';
import Auxx from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('Order summary updated');
    }
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map((igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {igKey}
                        </span>: {this.props.ingredients[igKey]}
                    </li>)
            }))
        return (
            <Auxx>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Auxx>
        );
    }
}
export default OrderSummary;