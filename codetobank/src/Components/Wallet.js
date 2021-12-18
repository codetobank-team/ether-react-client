import React, {useState, useEffect} from 'react';
import TopBar from '../Components/TopBar';
import {connect} from "react-redux";
import {postTransactions, getWalletDetails, getTransactions} from '../Store/actionCreators';
import pills from '../Images/pills.png';
import CardComponent from './CardComponent';
import moment from 'moment';
import ReceiveModal from './ReceiveModal'
import LaddaButton, {XL, SLIDE_UP, SLIDE_RIGHT, L,} from 'react-ladda';

function Wallet(props) {

    useEffect(() => {
        props.getTransactions();
        props.getWalletDetails()
    }, []);


    const [recieverAccountID, setRecieverAccountID] = useState('');
    const [pin, setPinChange] = useState('');
    const [amount, setAmount] = useState(0);
    const [showWalletForm, setShowWalletForm] = useState(false)
    const [referenceNote, setReferenceNote] = useState('');
    const [showReceiveModal, setShowReceiveModal] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const modal = () => {
        setShowReceiveModal(false)
    }

    const validate = () => {
        let isError = false;
        if (recieverAccountID === '') {
            setError('Please enter recievers wallet address');
            isError = true;
        }
        if (pin.length < 4 || pin.length > 4) {
            setError('Transaction PIN length must be 4')
            isError = true;
        }
        if (amount === 0 || amount < 0) {
            setError('Amount Must be greater than 0')
            isError = true;
        }
        return isError;

    }


    const onRecieverAccountIDChange = event => {
        setRecieverAccountID(event.target.value)
        setError('');
    }

    const onPinChange = event => {
        setPinChange(event.target.value)
        setError('');
    }

    const onAmountChange = event => {
        setAmount(event.target.value)
        setError('');
    }

    const onReferenceNoteChange = event => {
        setReferenceNote(event.target.value)
        setError('');
    }

    const onSubmit = (event) => {
        let isNotValid = validate();
        if (isNotValid) {
            return
        }
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

            <div className='dashboard-container'>
                <p className='dashboard-p1'>Wallet</p>
                <TopBar user={user}/>
            </div>

            <div className='dashboard-content'>
                <section className='dashboard-content-section'>
                    <div className='dashboard-info'>
                        <p className='available-balance-text'>Available Balance </p>
                        <p className='date-p'>as at {moment().format('Do MM, YYYY')}</p>
                        <h2 className='dashboard-h2'>N{props.walletDetails.balance || "0.00"}</h2>

                        <div className='container-mini-div'>
                            <img className='container-mini-div-img' src={pills} alt='pills'/>
                            <div className='mini-div-2'>
                                <p className='mini-div-text'>Stay informed : COVID-19</p> <br/>
                                <a className='mini-div-a' href='https://covid19.ncdc.gov.ng/' target='blank'>
                                    Get the latest information from the NSCDC about the COVID-</a>
                            </div>
                        </div>

                        <button className='send-button' onClick={() => setShowWalletForm(true)}>
                            <i className="fa fa-paper-plane fa-icon" aria-hidden="true"></i>Send
                        </button>

                        <button className='recieve-button' onClick={() => setShowReceiveModal(true)}>Receive</button>

                    </div>

                    <CardComponent/>

                </section>

                {showWalletForm && (
                    <div>
                        <p className='error-styles'> {error}</p>
                        <div className='wallet-div1'>
                            <div className='wallet-div2'>

                                <div>
                                    <p className='wallet-p'>Receiver Account ID</p>
                                    <input className='input' type='text' placeholder='Account ID'
                                           onChange={onRecieverAccountIDChange}
                                           value={recieverAccountID}/>

                                </div>

                                <div>
                                    <p>Enter Transaction Pin</p>
                                    <input className='input' type='password' placeholder='****' onChange={onPinChange}
                                           value={pin}/>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <p>Amount</p>
                                    <input className='input' type='number' placeholder='N0.00' onChange={onAmountChange}
                                           value={amount}/>
                                </div>

                                <div>
                                    <p>Reference note</p>
                                    <input className='input' type='text' placeholder='Optional'
                                           onChange={onReferenceNoteChange}
                                           value={referenceNote}/>

                                </div>

                                <div className='button-wrapper'>

                                    <button className='send-button' onClick={onSubmit}>
                                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Send
                                    </button>

                                    {/*<LaddaButton*/}
                                    {/*    onClick={() => setLoading(true)}*/}
                                    {/*    onClick={onSubmit}*/}
                                    {/*    data-color="#eee"*/}
                                    {/*    data-size={L}*/}
                                    {/*    data-style={SLIDE_UP}*/}
                                    {/*    className='send-button'*/}
                                    {/*    data-spinner-size={20}*/}
                                    {/*    data-spinner-color="#ddd"*/}
                                    {/*    type='submit'*/}
                                    {/*    data-spinner-lines={12}*/}
                                    {/*>*/}
                                    {/*    Send*/}
                                    {/*</LaddaButton>*/}

                                </div>

                            </div>

                        </div>

                    </div>
                )}

                {showReceiveModal && (
                    <ReceiveModal modal={modal}/>
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
export default connect(mapStateToProps, {postTransactions, getWalletDetails, getTransactions})(Wallet);

