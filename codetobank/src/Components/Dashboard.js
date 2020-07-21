import React, { useEffect } from 'react';
import card from '../Images/card.png';
import TopBar from '../Components/TopBar';
import styled from 'styled-components';
import Transaction from './Transactions';
import { DIV } from '../Components/Wallet';
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

            <Header>
                <P1>Dashboard</P1>
                <TopBar user={user} />
            </Header>



            <div className='dashboard-content'>

                <section className='dashboard-content-section'>
                    <div className='dashboard-info'>
                        <P>Available Balance </P>
                        <p className='date-p'>as at {moment().format('Do MM, YYYY')}</p>
                        <H2>N{props.walletDetails.balance || "0.00"}</H2>


                        <DIV>
                            <img src={pills} style={{ width: "22px", height: "22px", marginRight: '9px', marginLeft: '6px' }} />
                            <div style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
                                <p>Stay informed : COVID-19</p> <br />
                                <a href='https://ngcovid19.com.ng/' target='blank'>
                                    Get the latest information from the NSCDC about the COVID-</a>
                            </div>
                        </DIV>
                    </div>

                    <CardComponent />

                </section>
                <div>
                    <P2>Transaction History</P2>
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

export const P = styled.p`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 28px;
letter-spacing: 0.4px;
`;

export const P1 = styled.p`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 28px;
letter-spacing: 0.4px;
color: #C41426;
`;

export const H2 = styled.h2`
    font-family: 'Poppins',sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin: 13px 0 28px 0;
    /* line-height: 50px; */
    text-align: center;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    color: #C41426;
    text-align: start;
`;

export const Button = styled.button`
width: 100px;
height: 42px;
background: #3D8A86;
border-radius: 8px;
color:white;
border: #3D8A86;
font-weight:500;
cursor:pointer;
font-family: 'Poppins',sans-serif;
:hover{
    background:#58b1ba ;
    color:#FFFFFF;
}
`
export const WhiteButton = styled.button`
width: 100px;
height: 42px;
background: white;
cursor:pointer;
border-radius: 8px;
color:#3D8A86;
border: 1px solid #3D8A86;
margin-left:5px;
font-weight:500;
font-family: 'Poppins',sans-serif;
:hover{
    background: #58b1ba;
    color:white;
}
`;

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 34px;
`;

const P2 = styled.p`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
`;