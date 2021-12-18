import React from 'react';
import styled from 'styled-components';


function Logout(props) {

    const onLogout = () => {
        localStorage.removeItem("token");
        props.history.push("/");
    }

    return (
        <div className='modal-wrapper'>
            <div className='inner-modal-wrapper'>
                <p className='text-h1-modal'>Are You Sure You want to Logout?</p>

                <div className='lg-btn-wrapper'>
                    <button className='confirm' onClick={onLogout}> Yes</button>
                    <button className='cancel' onClick={props.cancelModal}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Logout;

const Div = styled.div`
  background-color: #0000007a;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  padding-top: 20px;

  div {
    background: white;
    padding: 15px;
    opacity: 1;
    margin-top: 30px;
    border-radius: 10px;
    width: 380px;
    height: 200px;
    margin: auto;

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 19px;
      font-weight: 500;
      margin-bottom: 50px;
      margin-top: 20px;
    }

    button {
      width: 100px;
      height: 42px;
      margin: 5px;
      background: #c41426;
      border-radius: 8px;
      color: white;
      border: #3D8A86;
      font-weight: 500;
      font-size: 18px;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;

      :hover {
        background: #c41414b0;
        color: #ffffff;
      }
    }

  }

`;
