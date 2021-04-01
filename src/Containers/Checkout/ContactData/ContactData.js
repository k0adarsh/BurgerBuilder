import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
class ContactData extends Component {
    state = {
        name: ' ',
        email: ' ',
        address: {
            street: ' ',
            postalcode: ' '
        }
    }
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name"></input>
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email"></input>
                    <input className={classes.Input} type="text" name="street" placeholder="Your Street"></input>
                    <input className={classes.Input} type="text" name="postal" placeholder="Your Postal Code"></input>
                    <Button btnType="Success" >ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;