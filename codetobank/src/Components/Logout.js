import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
 background-color: #0000007a;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  padding-top: 20px;

  div{
    background: white;
  padding: 15px;
  opacity: 1;
  margin-top: 30px;
  border-radius: 10px;
  width: 380px;
  height: 200px;
  margin: auto;

p{
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 50px;
    margin-top: 20px;
}

button{
    width: 100px;
height: 42px;
margin:5px;
background: #3D8A86;
border-radius: 8px;
color:white;
border: #3D8A86;
font-weight:500;
cursor:pointer;
font-family: 'Poppins',sans-serif;
:hover{
    background:white ;
    color:#3D8A86;
}
}
  }

  `;

function Logout(props) {

    const onLogout = () => {
        localStorage.removeItem("token");
        props.history.push("/");
    }

    return (
        <Div >
            <div>
                <p>Are You Sure You want to Logout?</p>
                <button onClick={onLogout}>Yes</button>
                <button onClick={props.cancelModal}> No</button>
            </div>
        </Div>
    )
}

export default Logout;