import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx';
import Modal from '../../Components/UI/Modal/Modal';

const withErrorHandler = (wrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {

            axios.interceptors.request.use(req => {
                this.setState({ error: null });
            });

            axios.interceptors.response.use(null, error => {
                this.setState({ error: error });
            });
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <Auxx>
                    <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <wrappedComponent {...this.props} />
                </Auxx>)
        }
    }
};

export default withErrorHandler;