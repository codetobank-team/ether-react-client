import React from 'react';
import card from '../Images/card.png';
import TopBar from '../Components/TopBar';
import styled from 'styled-components';

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
color:#A4A6B3;
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
                        <p> as at date</p>
                        <H2>N40,000</H2>
                        <Button>Send</Button>
                    </div>

                    <div className='dashboard-info'>
                        <img className='card-img' src={card} alt='card' />
                    </div>

                </section>
                <div>
                    <p>Transaction History</p>
                </div>
            </div>





        </section>
    )
}

export default Dashboard;