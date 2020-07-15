import React, { useState } from 'react';
import card from '../Images/card.png';
import { P, P1, H2, Button, Header } from '../Components/Dashboard';
import styled from 'styled-components';
import TopBar from '../Components/TopBar';
import { connect } from "react-redux";
import {axiosWithAuth }from '../axiosWithAuth';
import {postTransactions} from '../Store/actionCreators';

function Wallet(props) {

    const [recieverAccountID, setRecieverAccountID] = useState('');
    const [pin, setPinChange] = useState('');
    const [amount, setAmount] = useState('');
    const [referenceNote, setReferenceNote] = useState('');

    const onRecieverAccountIDChange = event => {
        setRecieverAccountID(event.target.value)
    }

    const onPinChange = event => {
        setPinChange(event.target.value)
    }

    const onAmountChange = event => {
        setAmount(event.target.value)
    }

    const onReferenceNoteChange = event => {
        setReferenceNote(event.target.value)
    }

    const onSubmit = (event) => {
        let request = {
            "senderId": "5f0e1e10b346ef001ef3c71a",
            "receiverId": recieverAccountID,
            "transactionStatus": "COMPLETED",
            "transactionType": "SENT",
            "transactionPin": pin,
            "amount": amount
        }
        event.preventDefault();
        props.postTransactions(request)
    }

    
    return (
        <section className='dashboard-section'>

            <Header>
                <P1>Wallet</P1>
                <TopBar />
            </Header>

            <div className='dashboard-content'>
                <section className='dashboard-content-section'>
                    <div className='dashboard-info'>
                        <P>Available Balance as at </P>
                        <p>date</p>
                        <H2>N40,000</H2>
                        <Button>Send</Button>
                    </div>

                    <div className='dashboard-info'>
                        <img className='card-img' src={card} alt='card' />
                    </div>
                </section>


                <div>
                    <Div >

                        {/* <div>
                            <p>Your Account Id</p>
                            <Input type='text' placeholder='Your Account Id' onChange={onChange} />
                        </div> */}

                        <div>
                            <p>Receiver Account ID</p>
                            <Input type='text' placeholder='Account ID' onChange={onRecieverAccountIDChange} value={recieverAccountID} />
                        </div>

                        <div>
                            <p>Pin</p>
                            <Input type='text' placeholder='Enter Transaction Pin' onChange={onPinChange} value={pin} />
                        </div>


                        <div>
                            <p>Amount</p>
                            <Input type='text' placeholder='Amount' onChange={onAmountChange} value={amount} />
                        </div>


                    </Div>

                    <div>

                        <p>Add an optional refrence note</p>
                        <INput type='text' placeholder='Optional' onChange={onReferenceNoteChange} value={referenceNote} />


                        <WButton onClick={onSubmit} >Send</WButton>


                    </div>
                </div>

                <div>
                    <p>Transaction History</p>
                </div>
            </div>





        </section>
    )
}

export default connect(state => state, {postTransactions})(Wallet);

const Div = styled.div`
display:flex;
justify-content:space-between;
flex-wrap: wrap;
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
