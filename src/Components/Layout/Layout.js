import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    toggleSideDrawer = () => {
        let showDrawer = !this.state.showSideDrawer;
        this.setState({ showSideDrawer: showDrawer });
    }
    render() {
        return (
            <Auxx>
                <Toolbar toggleDrawer={this.toggleSideDrawer}></Toolbar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}>
                </SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxx>
        )
    }
}
export default Layout;