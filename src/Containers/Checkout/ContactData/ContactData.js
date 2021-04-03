import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
class ContactData extends Component {
    state = {
        name: ' ',
        email: ' ',
        address: {
            street: ' ',
            postalcode: ' '
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                Name: 'Adarsh Kunwar',
                Phone: 'XXXXXX808'
            }
        }
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }
    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name"></input>
            <input className={classes.Input} type="email" name="email" placeholder="Your Email"></input>
            <input className={classes.Input} type="text" name="street" placeholder="Your Street"></input>
            <input className={classes.Input} type="text" name="postal" placeholder="Your Postal Code"></input>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;