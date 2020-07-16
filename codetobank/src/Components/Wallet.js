import React, { useState } from 'react';
import card from '../Images/card.png';
import { P, P1, H2, Button, Header, WhiteButton } from '../Components/Dashboard';
import styled from 'styled-components';
import TopBar from '../Components/TopBar';
import { connect } from "react-redux";
import { axiosWithAuth } from '../axiosWithAuth';
import { postTransactions } from '../Store/actionCreators';

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
                        <P>Available Balance </P>
                        <p className='date-p'>as at date</p>
                        <H2>N40,000</H2>

                        <DIV>
                            <p>Stay informed : COVID-19</p> <br />
                            <a href='https://covid19.ncdc.gov.ng/' target='blank'>
                                Get the latest information from the NSCDC about the COVID-19</a>
                        </DIV>

                        <Button>Send</Button>

                        <WhiteButton>Recieve</WhiteButton>

                    </div>

                    <div className='dashboard-info'>
                        <img className='card-img' src={card} alt='card' />
                    </div>
                </section>


                <div>
                    <div className = "input-content-section">
                        <div className="inputsection">

                            <div>
                                <p>Receiver Account ID</p>
                                <Input type='text' placeholder='Account ID' onChange={onRecieverAccountIDChange} value={recieverAccountID} />
                            </div>

                            <div>
                                <p>Enter Transaction Pin</p>
                                <Input type='text' placeholder='****' onChange={onPinChange} value={pin} />
                            </div>
                        </div>

                        <div className="inputsection" >
                            <div>
                                <p>Amount</p>
                                <Input type='text' placeholder='N0.00' onChange={onAmountChange} value={amount} />
                            </div>


                            <div>

                                <p>Refrence note</p>
                                <Input type='text' placeholder='Optional' onChange={onReferenceNoteChange} value={referenceNote} />

                            </div>

                            <ButtonDiv>
                            <WButton onClick={onSubmit} >Send</WButton>
                        </ButtonDiv>



                        </div>
                       

                    </div>



                </div>



                {/* <div>
                    <p>Transaction History</p>
                </div> */}
            </div>





        </section>
    )
}

export default connect(state => state, { postTransactions })(Wallet);

const Div = styled.div`
display:flex;
justify-content:space-between;
flex-wrap: wrap;
padding-right:50px;
/* border: 1px solid #C41426; */
p{
    /* font-style: normal; */
font-weight: 500;
font-size: 14px;
/* line-height: 28px; */
letter-spacing: 0.4px;
color: #252733;
text-align: left;

}
`;



const ButtonDiv = styled.div`
display:flex;
/* justify-content: flex-end; */
/* padding-right:50px; */
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
font-family:  'Poppins', sans-serif;
line-height: 0.09px;
text-align: initial;
border: 1px solid #C41426;
margin-bottom:10px;
border-radius: 5px;
padding:5px;
/* box-sizing: border-box; */
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