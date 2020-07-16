import React, { useState, useEffect } from 'react';
import qrCode from '../Images/qrCode.png';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getWalletDetails } from '../Store/actionCreators';


function ReceiveModal(props) {
    useEffect(() => {
        props.getWalletDetails()
    }, []);

    const [closeModal, setCloseModal] = useState(false)
    const [copiedAddress, setCopiedAddress] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.walletDetails.address).then(function() {
            setCopiedAddress(true);
            setTimeout(() => setCopiedAddress(false), 2000);
          }, function() {
            console.error("Does not support error");
          });
    }

    return (
        <div className='modal'>
            <div className='form edit-form'>
                <P1>Recieve Payments</P1>
                <P2> Scan QR code</P2>
                <Img src={qrCode} alt='qrCode' />

                <section style={{ display: 'flex' }}>
                    <Div>{props.walletDetails.address}</Div>
                    <P3 onClick={() => copyToClipboard()}> <i class="fa fa-clone" aria-hidden="true"></i>{copiedAddress ? 'Copied' : 'Copy'}</P3>
                </section>

                <DIv>Cancel</DIv>


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        walletDetails: state.transactionReducer.walletDetails,
        user: state.authReducer
    }
}
export default connect(mapStateToProps, { getWalletDetails })(ReceiveModal);


const P1 = styled.p`
color: #C41426;
font-family: "Poppins", sans-serif;
font-weight: 600;
font-size: 19px;
line-height: 28px;
letter-spacing: 0.4px;
border-bottom: 1px solid #C4C4C4;
`;

const P2 = styled.p`
font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 14px;
margin-top: 30px;
letter-spacing: 0.1px;
color: #9FA2B4;
`;

const Img = styled.img`
    width: 250px;
    height: 250px;
    /* margin: auto; */
    margin-left: 90px;
    margin-bottom: 30px;
    margin-top: 30px;
  
`;

const Div = styled.button`
font-family: "Poppins", sans-serif;
width: 281px;
background:#FFFFFF;
height: 50px;
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 2px 0px 0px 2px;
font-size: 10px;
color: rgba(132, 132, 132, 0.9);
`;

const P3 = styled.button`
font-family: "Poppins", sans-serif;
width: 140px;
height: 50px;
font-size: 16px;
color: #FFFFFF;
background: #3D8A86;
border: 1px solid #3D8A86;
border-radius: 0px 2px 2px 0px;

    &:hover {
        cursor: pointer;
    }
`;

const DIv = styled.button`
font-family: "Poppins", sans-serif;
width: 421px;
height: 50px;
font-size: 14px;
background: #C41426;
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 2px;
color: #FFFFFF;
margin-top: 30px;

&:hover {
    cursor: pointer;
}
`;
