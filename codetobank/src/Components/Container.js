import React from 'react';
import { Route, NavLink } from "react-router-dom";
import Dashboard from '../Components/Dashboard';
import Wallet from '../Components/Wallet';
import Transactions from '../Components/Transactions';


function Container(props) {

    const onLogout = () => {
        localStorage.removeItem("token");
        props.history.push("/");
    }

    return (
        <div>
            <section>
                <NavLink exact to='/dashboard'>
                    <h3>Dashboard</h3>
                </NavLink>

                <NavLink exact to='/wallet'>
                    <h3>Wallet</h3>
                </NavLink>

                <NavLink exact to='/transactions'>
                    <h3>Transactions</h3>
                </NavLink>

                <NavLink exact to='/' onClick={onLogout}>
                    <h3>Logout</h3>
                </NavLink>
            </section>

            <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
            <Route exact path="/wallet" render={props => <Wallet {...props} />} />
            <Route exact path="/transactions" render={props => <Transactions {...props} />} />


            {/* <section>

            </section> */}
        </div>
    )
}

export default Container;