import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos</h2>
                </div>
                <img src={landingImg} alt="Pataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <a href="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>Estudar
                    </a>
                    <a href="/give-classes" className="give-classes">
                        <img src={giveClassIcon} alt="Dar Aula"/>Dar Aula
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões jé realizadas 
                    <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;