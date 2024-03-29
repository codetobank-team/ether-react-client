import React from "react";
import styled from "styled-components";
import avatar from '../Images/avatar.png';


function TopBar(props) {
  return (
    <Div>
      <P>Hello, {props?.user?.data?.firstName} {props?.user?.data?.lastName}</P>

      <Img src={avatar} />

    </Div>
  );
}

export default TopBar;


export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Img = styled.img`
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  background: #F5F5F5;
  margin: 0;
  font-size: 15px;
  color: #000;
`;

export const P = styled.p`
font-family: 'Poppins', sans-serif;
  margin: 0;
  line-height: 32px;
  margin-right: 10px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  color: #000000;
`;
