import React from 'react';
import card from '../Images/card.png';
import { P, P1, H2, Button, Header } from '../Components/Dashboard';
import styled from 'styled-components';
import TopBar from '../Components/TopBar';

const Div = styled.div`
display:flex;
justify-content:space-between;
`;

const Input = styled.input`
font-family: 'Poppins', sans-serif;
 width: 200px;
  height: 35px;
  border-radius: 5px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
  font-size: 14px;  
  font-size: 14px;
`;

const INput = styled.input`
width: 500px;
height: 101px;
border-radius: 5px;
background: white;
border: 1px solid rgba(0, 0, 0, 0.15);
padding-left: 15px;
padding-right: 15px;
margin-top: 10px;
font-size: 14px;  
font-size: 14px;
`;

const WButton = styled.button`
width: 90px;
height: 30px;
background: #FFFFFF;
border-radius: 8px;
color: #252930;
border:1px solid rgba(0, 0, 0, 0.3);
margin-left:8px;
`;

function Wallet() {
    return (
        <section className='dashboard-section'>

            <Header>
                <P1>Wallet</P1>
                <TopBar />
            </Header>

            <div className='dashboard-content'>
                <div className='dashboard-info'>
                    <P>Available Balance as at </P>
                    <p>date</p>
                    <H2>N40,000</H2>
                    <Button>Send</Button>
                </div>

                <div className='dashboard-info'>
                    <img className='card-img' src={card} alt='card' />
                </div>
            </div>

            <div>
                <Div >


                    <div>
                        <p>Receiver Account ID</p>
                        <Input type='text' placeholder='Account ID' />
                    </div>


                    <div>
                        <p>  Amount</p>
                        <Input type='text' placeholder='Amount' />
                    </div>


                </Div>

                <div>

                    <p>Add an optional refrence note</p>
                    <INput type='text' placeholder='Optional' />


                    <WButton>Send</WButton>


                </div>
            </div>

            <div>
                <p>Transaction History</p>
            </div>



        </section>
    )
}

export default Wallet;