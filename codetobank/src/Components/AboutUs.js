import React from "react";
import styled from "styled-components";
import Dammy from '../Images/Team/Dammy.jpeg';
import Destiny from '../Images/Team/Destiny.jpeg';
import Etienne from '../Images/Team/Etienne.jpeg';
import John from '../Images/Team/John.jpeg';
import Kelechi from '../Images/Team/Kelechi.jpeg';
import Oye from '../Images/Team/Oye.jpeg';
import Sammy from '../Images/Team/Sammy.jpeg';
import Seyi from '../Images/Team/Seyi.jpeg';



export const MainDiv = styled.div`
/* background-color:#04203D; */
/* background-image: linear-gradient(#cc2b5e, #753a88 );  */
width:100%;
`;

export const Section = styled.section`
display:flex;
width: 100%;
flex-wrap: wrap;
text-align: center;

`;

export const Img = styled.img`
width:280px;
height:280px;
object-fit:contain;
/* border-radius: 50%; */
`;

export const Div = styled.div`
background: #fffefe;
width: 400px;
margin: auto;
width: 400px;
:hover {
  box-shadow: 0px 1px 3px 0px #aaa;
}
padding-top: 10px;
margin-top: 20px;
`;

export const P = styled.p`
font-family: "Poppins", sans-serif;
font-size: 16px;
text-align: center;
margin:5px;

`;

export const H6 = styled.h6`
font-size: 20px;

font-family: Lato;
margin-top: 10px;
`;

export const H4 = styled.h4`
text-align: center;
font-size: 16px;
font-family: "Poppins", sans-serif;
/* font-family: Lato; */
`;

export const Anchor = styled.a`
margin: 15px;
font-size: 25px;
color: #070707;
`;

function AboutUs() {

    return (
        <MainDiv>
            <H4>Meet The Team</H4>
            {/* <p > Meet the amazing team that put the Insight web app all together. </p> */}
            <Section>
                <Div>
                    <Img src={Dammy} alt="Dammy.jpeg" />
                    <H6>Damilola Olawumi</H6>
                    <P>Frontend Developer</P>
                    
                </Div>

                <Div>
                    <Img src={Destiny} alt="Destiny.jpeg" />
                    <H6>Destiny Ihejirika</H6>
                    <P>Product Designer </P>
                    
                </Div>

                <Div>
                    <Img src={Etienne} alt="Etienne.jpeg" />
                    <H6>Okeke Etienne</H6>
                    <P>Blockchain Developer</P>
                    
                </Div>

                <Div>
                    <Img src={John} alt="John.jpeg" />
                    <H6>John Okore</H6>
                    <P>Mobile App Developer</P>
                    
                </Div>

                <Div>
                    <Img src={Kelechi} alt="Kelechi.jpeg" />
                    <H6>Kelechi</H6>
                    <P>UX Designer</P>
                    
                </Div>

                
                <Div>
                    <Img src={Sammy} alt="Sammy.jpeg" />
                    <H6>Samuel</H6>
                    <P>Backend/Blockchain Developer</P>
                    
                </Div>

                <Div>
                    <Img src={Oye} alt="Oye.jepg" />
                    <H6>Oyekunle</H6>
                    <P>Backend Developer</P>
                    
                </Div>

                <Div>
                    <Img src={Seyi} alt="Seyi.jepg" />
                    <H6>Seyi Obaweya</H6>
                    <P>DevOps Engineer</P>
                    
                </Div>
            </Section>

        </MainDiv>
    )
}

export default AboutUs;