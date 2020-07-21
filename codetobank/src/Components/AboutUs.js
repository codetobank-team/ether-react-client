import React from "react";
import '../aboutus.css';
import styled from "styled-components";
import Dammy from '../Images/Team/Dammy.jpeg';
import Destiny from '../Images/Team/Destiny.jpeg';
import Etienne from '../Images/Team/Etienne.jpeg';
import John from '../Images/Team/John.jpeg';
import Kelechi from '../Images/Team/Kelechi.jpeg';
import Oye from '../Images/Team/Oye.jpg';
import Sammy from '../Images/Team/Sammy.jpeg';
import Seyi from '../Images/Team/Seyi.jpeg';
import arrow from '../Images/Team/arrow.png';
import chain from '../Images/Team/chain.png';
import block from '../Images/Team/block.png';
import bg from '../Images/Team/bg.png';
import oneblocklogo from '../Images/Team/oneblocklogo.png';
import helmet from '../Images/Team/helmet.png';


function AboutUs() {
    return (
        <div>
{/* 
            <p className='mission'>WE HAD JUST ONE MISSION</p>
            <img className='helmet' src={helmet} alt='helmet.png' />

            <img className='bg' src={bg} alt='bg.png' />

            <h2>Meet The Recruits</h2> */}

            <section className='section2'>
            <div className='overlay'>
            <h2 className='intro'>Meet The Code Busters</h2>
                <section className='mini-section'>
                    <div>
                        <img className='people' src={Destiny} alt='destiny.png' />
                    </div>

                    <div className='text-section'>
                        
                        <p> <span className='span' >Name:</span> DESTINY IHEJIRIKA</p>
                        <p> <span className='span' >Unit:</span> UI/UX SPECIALIST</p>
                       
                    </div>
                </section>

                <section className='mini-section-two'>
                    <div className='text-section-two'>
                    <p> <span className='span' >Name:</span> KELECHI OKORE</p>
                        <p> <span className='span' >Unit:</span> UI/UX SPECIALIST</p>
                    </div>

                    <div>
                        <img className='people2' src={Kelechi} alt='kelechi.png' />
                    </div>
                </section>

                <section className='mini-section'>
                    <div>
                        <img className='people' src={Dammy} alt='Dammy.png' />
                    </div>

                    <div className='text-section'>
                        
                        <p> <span className='span' >Name:</span> DAMILOLA OLAWUMI</p>
                        <p> <span className='span' >Unit:</span> WEB DEVELOPER</p>
                       
                    </div>
                </section>

                <section className='mini-section-two'>
                    <div className='text-section-two'>
                    <p> <span className='span' >Name:</span> JOHN OKORE </p>
                        <p> <span className='span' >Unit:</span> MOBILE APP DEVELOPER</p>
                    </div>

                    <div>
                        <img className='people2' src={John} alt='John.png' />
                    </div>
                </section>

                <section className='mini-section'>
                    <div>
                        <img className='people' src={Oye} alt='Oye.png' />
                    </div>

                    <div className='text-section'>
                        
                        <p> <span className='span' >Name:</span> OYEKUNLE OLOYEDE</p>
                        <p> <span className='span' >Unit:</span> BACKEND DEVELOPER</p>
                       
                    </div>
                </section>

                <section className='mini-section-two'>
                    <div className='text-section-two'>
                    <p> <span className='span' >Name:</span> ETIENNE OKEKE</p>
                        <p> <span className='span' >Unit:</span> BLOCKCHAIN DEVELOPER</p>
                    </div>

                    <div>
                        <img className='people2' src={Etienne} alt='Etienne.png' />
                    </div>
                </section>

                <section className='mini-section'>
                    <div>
                        <img className='people' src={Sammy} alt='Sammy.png' />
                    </div>

                    <div className='text-section'>
                        
                        <p> <span className='span' >Name:</span> SAMUEL </p>
                        <p> <span className='span' >Unit:</span> BACKEND/BLOCKCHAIN DEVELOPER</p>
                       
                    </div>
                </section>

                <section className='mini-section-two'>
                    <div className='text-section-two'>
                    <p> <span className='span' >Name:</span> SEYI OBAWEYA</p>
                        <p> <span className='span' >Unit:</span> INFRASTRUCTURE/DEVOPS </p>
                    </div>

                    <div>
                        <img className='people2' src={Seyi} alt='Seyi.png' />
                    </div>
                </section>

            </div>



            </section>


        </div>
    )
}

export default AboutUs;