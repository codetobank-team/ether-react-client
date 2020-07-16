import React, { useState, useEffect } from 'react';

import { P, P1, H2, Button, Header, WhiteButton } from '../Components/Dashboard';
import styled from 'styled-components';
import TopBar from '../Components/TopBar';
import { connect } from "react-redux";
import { axiosWithAuth } from '../axiosWithAuth';
import { postTransactions, getWalletDetails, getTransactions } from '../Store/actionCreators';
import pills from '../Images/pills.png';
import CardComponent from './CardComponent';
import moment from 'moment';
import ReceiveModal from './ReceiveModal'

function Wallet(props) {

    useEffect(() => {
        props.getTransactions();
        props.getWalletDetails()
    }, []);


    const [recieverAccountID, setRecieverAccountID] = useState('');
    const [pin, setPinChange] = useState('');
    const [amount, setAmount] = useState('');
    const [showWalletForm, setShowWalletForm] = useState(false)
    const [referenceNote, setReferenceNote] = useState('');
    const [showReceiveModal, setShowReceiveModal] = useState(false);

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
            "recipient": recieverAccountID,
            "transactionPin": pin,
            "amount": amount,

        }
        event.preventDefault();
        props.postTransactions(request, () => {
            setShowWalletForm(false);
            setPinChange('');
            setAmount('')
            setRecieverAccountID('');
            setReferenceNote('')
        })
    }


    let user = JSON.parse(localStorage.getItem('user')) || {}
    return (
        <section className='dashboard-section'>

            <Header>
                <P1>Wallet</P1>
                <TopBar user={user} />
            </Header>

            <div className='dashboard-content'>
                <section className='dashboard-content-section'>
                    <div className='dashboard-info'>
                        <P>Available Balance </P>
                        <p className='date-p'>as at {moment().format('Do MM, YYYY')}</p>
                        <H2>N{props.walletDetails.balance || "0"}</H2>

                        <DIV>
                            <img src={pills} style={{ width: "22px", height: "22px", marginRight: '9px', marginLeft: '6px' }} />
                            <div style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
                                <p>Stay informed : COVID-19</p> <br />
                                <a href='https://covid19.ncdc.gov.ng/' target='blank'>
                                    Get the latest information from the NSCDC about the COVID-</a>
                            </div>
                        </DIV>

                        <Button onClick={() => setShowWalletForm(true)}>
                            <i class="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: '10px' }}></i>Send</Button>

                        <WhiteButton onClick={() => setShowReceiveModal(true)}>Receive</WhiteButton>

                    </div>

                    <CardComponent />
                </section>

                {showWalletForm && (
                    <div>
                        <Div >
                            <div style={{ marginRight: '30px' }}>

                                <div>
                                    <p>Receiver Account ID</p>
                                    <Input type='text' placeholder='Account ID' onChange={onRecieverAccountIDChange} value={recieverAccountID} />
                                </div>

                                <div>
                                    <p>Enter Transaction Pin</p>
                                    <Input type='text' placeholder='****' onChange={onPinChange} value={pin} />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <p>Amount</p>
                                    <Input type='text' placeholder='N0.00' onChange={onAmountChange} value={amount} />
                                </div>


                                <div>

                                    <p>Reference note</p>
                                    <Input type='text' placeholder='Optional' onChange={onReferenceNoteChange} value={referenceNote} />

                                </div>

                                <ButtonDiv>

                                    <Button onClick={onSubmit} >
                                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Send</Button>
                                </ButtonDiv>

                            </div>

                        </Div>

                    </div>
                )}

                {showReceiveModal && (
                    <ReceiveModal />
                )}

            </div>

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        walletDetails: state.transactionReducer.walletDetails,
        user: state.authReducer
    }
}
export default connect(mapStateToProps, { postTransactions, getWalletDetails, getTransactions })(Wallet);

const Div = styled.div`
display:flex;
margin-top: 60px;
flex-wrap: wrap;
padding-right:50px;
p{

font-weight: 500;
font-size: 17px;
letter-spacing: 0.4px;
color: #252733;
text-align: left;

}
`;



const ButtonDiv = styled.div`
display:flex;
justify-content: flex-end;
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
  margin-bottom: 25px;
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
margin-top: 15px;
margin-left: 77%;
`;

export const DIV = styled.div`
    font-family: 'Poppins',sans-serif;
    line-height: 0.09px;
    width: 380px;
    text-align: initial;
    border: 1px solid #C41426;
    margin-bottom: 10px;
    border-radius: 5px;
    height: 52px;
    display: flex;
    align-items:center;
p{
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
}
a{
    font-size: 10px;
    line-height: 16px;
    color: #9FA2B4;
}
`;