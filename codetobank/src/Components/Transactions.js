import React from 'react';
import styled from "styled-components";


function Transaction(props) {
    let transactions = [...props.transactions];
    transactions = transactions.reverse();
    return (
        <div style={{marginTop:'25px'}}>
            {transactions.map(transaction=> {
                let sign = '+';
               
                if(transaction.type === 'sent') sign = '-' 
                return (
                    <Div>
                        <Div1>
                        <i class={transaction.type === 'sent'?"fa fa-arrow-up":"fa fa-arrow-down"} aria-hidden="true"></i>
                        </Div1>

                        <MiniDiv>

                            <div>
                                <P3>{transaction.type}</P3>
                                {transaction.type === 'sent' && (<P4>To: {transaction.recipient}</P4>)}
                                {transaction.type !== 'sent' && (<P4>From: {transaction.sender}</P4>)}

                            </div>

                            <p className='amount' style={{color:transaction.type === 'sent'?"#BC484B":"#00BDAA;"}}> {sign} N{transaction.amount}</p>
                        </MiniDiv>

                    </Div>
                )
            })}
        </div>
    )
}

export default Transaction;

const Div = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(118, 118, 118, 0.15);
    padding-bottom: 15px;
    padding-top: 10px;
`;

const Div1 = styled.div`
   width: 32px;
  height: 32px;
  line-height: 32px;
  background: #ffffff;
  text-align: center;
  color:#949494;
  font-size:12px
`;

const MiniDiv = styled.div`
flex: 1;
display: flex;
justify-content: space-between;
align-items: center;
.amount{
    color: #00BDAA;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    line-height: 24px
}

`;

const P3 = styled.p`
    font-family: 'Poppins',sans-serif;
    text-align: left;
    line-height: 19px;   
    font-weight: normal;
    margin-left: 16px;
`;

const P4 = styled.div`
     margin-left: 16px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    margin-top: 5px;
    color: #767676;
`;
