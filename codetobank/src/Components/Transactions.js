import React from 'react';
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  margin-top: 25px;
  line-height: 6px;
`;

const Div1 = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  background: #e5e5e5;
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
font-family: 'Poppins', sans-serif;
margin: 15px;
text-align: left;
line-height: 2px;
/* font-style: normal; */
font-weight: normal;

`;

const P4 = styled.div`
 margin-left: 16px;
 font-family: 'Poppins', sans-serif;
 font-style: normal;
 font-weight: normal;
 font-size: 10px;
 line-height: 2px;
 color: #767676;
`;

function Transaction() {
    return (
        <Div>
            <Div1>TH</Div1>

            <MiniDiv>

                <div>
                    <P3>Recieved</P3>
                    <P4>From: SOBn7268...UG378930f</P4>
                </div>

                <p className='amount'> + N30,000</p>
            </MiniDiv>

        </Div>
    )
}

export default Transaction;