import React, { useEffect } from 'react';
import card from '../Images/card.png';
import TopBar from '../Components/TopBar';
import styled from 'styled-components';
import Transaction from './Transactions';
import { connect } from 'react-redux';
import { getTransactions, getWalletDetails } from '../Store/actionCreators';
import pills from '../Images/pills.png';
import CardComponent from './CardComponent';
import moment from 'moment';

function Dashboard(props) {

    useEffect(() => {
        props.getTransactions();
        props.getWalletDetails()
    }, []);

    let user = JSON.parse(localStorage.getItem('user')) || {}
    return (

        <section className='dashboard-section'>

            <div className='dashboard-container'>
                <p className='dashboard-p1'>Dashboard</p>
                <TopBar user={user} />
            </div>

            <div className='dashboard-content'>

                <section className='dashboard-content-section'>
                    <div className='dashboard-info'>
                        <p className='available-balance-text'>Available Balance </p>
                        <p className='date-p'>as at {moment().format('Do MM, YYYY')}</p>
                        <h2 className='dashboard-h2'>N{props.walletDetails.balance || "0.00"}</h2>

                        <div className='container-mini-div'>
                            <img className='container-mini-div-img' src={pills} alt='pills'  />
                            <div className='mini-div-2'>
                                <p className='mini-div-text'>Stay informed : COVID-19</p> <br />
                                <a className='mini-div-a' href='https://covid19.ncdc.gov.ng/' target='blank'>
                                    Get the latest information from the NSCDC about the COVID-</a>
                            </div>
                        </div>
                    </div>

                    <CardComponent />
                </section>

                <div>
                    <p className='transaction-p'>Transaction History</p>
                    <Transaction transactions={props.transactions || []} />
                </div>

            </div>

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        walletDetails: state.transactionReducer.walletDetails,
        transactions: state.transactionReducer.transactions,
        user: state.authReducer
    }
}
export default connect(mapStateToProps, { getTransactions, getWalletDetails })(Dashboard);
