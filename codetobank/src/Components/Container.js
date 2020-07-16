import React from 'react';
import { Route, NavLink } from "react-router-dom";
import Dashboard from '../Components/Dashboard';
import Wallet from '../Components/Wallet';
import Transactions from '../Components/Transactions';
import Ellipse from '../Images/Ellipse.png';
import OneBlock from '../Images/OneBlock.png';
import dashboard from '../Images/dashboard.svg';
import walletfocus from '../Images/walletfocus.svg';
import exit from '../Images/exit.svg';


function Container(props) {

    const onLogout = () => {
        localStorage.removeItem("token");
        props.history.push("/");
    }

    return (
        <div className='container'>
            <section className='sidebar-container'>

                <div className='dashboard-logo'>
                    <img className='container-ellipse' src={Ellipse} />

                    {/* <img className='container-oneblock' src={OneBlock} /> */}
                </div>
                <NavLink exact to='/app/dashboard'>
               
                    <h3 className='side-bar' >  <i class="fa fa-pie-chart" aria-hidden="true"></i> Dashboard</h3>
                </NavLink>

                <NavLink exact to='/app/wallet'>
                    <h3 className='side-bar'><i class="fa fa-credit-card-alt" aria-hidden="true"></i>Wallet</h3>
                </NavLink>
{/* 
                <NavLink exact to='/app/transactions'>
                    <h3 className='side-bar'>Transactions</h3>
                </NavLink> */}

                <NavLink exact to='/' onClick={onLogout}>
                    <h3 className='side-bar'> <i class="fa fa-sign-out" aria-hidden="true"></i>Logout</h3>
                </NavLink>
            </section>

            <section className='section-two'>
                <Route exact path="/app/dashboard" render={props => <Dashboard {...props} />} />
                <Route exact path="/app/wallet" render={props => <Wallet {...props} />} />
                {/* <Route exact path="/app/transactions" render={props => <Transactions {...props} />} /> */}
            </section>


        </div>
    )
}

export default Container;