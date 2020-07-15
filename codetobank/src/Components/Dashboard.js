import React from 'react';
import card from '../Images/card.png';
import TopBar from '../Components/TopBar';
import styled from 'styled-components';
import Transaction from './Transactions';
import {DIV}from '../Components/Wallet';

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
font-family: 'Poppins', sans-serif;
font-weight: bold;
font-size: 20px;
line-height: 50px;
text-align: center;
letter-spacing: 1px;
color: #C41426;;
text-align: start;
`;

export const Button = styled.button`
width: 100px;
height: 42px;
background: #3D8A86;
border-radius: 8px;
color:white;
border: #3D8A86;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 34px;
`;


function Dashboard() {
    return (
        <section className='dashboard-section'>

            <Header>
                <P1>Dashboard</P1>
                <TopBar />
            </Header>



            <div className='dashboard-content'>

                <section className='dashboard-content-section'>
                    <div className='dashboard-info'>
                        <P>Available Balance</P>
                        <p className='date-p'> as at date</p>
                        <H2>N40,000</H2>
                        {/* <Button>Send</Button> */}

                        <DIV>
                            <p>Stay informed : COVID-19</p> <br />
                            <a href='https://covid19.ncdc.gov.ng/' target='blank'>
                                Get the latest information from the NSCDC about the COVID-</a>
                        </DIV>
                    </div>

                    <div className='dashboard-info'>
                        <img className='card-img' src={card} alt='card' />
                    </div>

                </section>
                <div>
                    <P2>Transaction History</P2>
                    <Transaction/>
                </div>
            </div>





        </section>
    )
}

export default Dashboard;

const P2 = styled.p`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
`;