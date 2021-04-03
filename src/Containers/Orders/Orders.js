import React, { Component } from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Auxx from '../../hoc/Auxx';
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                let fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(err => this.setState({ loading: false }));
    }
    render() {
        let showOrder = <Spinner />;
        if (!this.state.loading) {
            showOrder = (
                <Auxx>
                    {
                        this.state.orders.map((order) => (
                            <Order key={order.id}
                                ingredients={order.ingredients}
                                price={+order.price} />)
                        )}
                </Auxx>)
        }
        return (
            showOrder
        );
    }
}

export default withErrorHandler(Orders, axios);