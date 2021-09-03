import React from 'react';
import profileImage from '../../assets/DSC_7953.jpg';
import './dashboard.css';
import styled, { keyframes } from 'styled-components';
import { fadeInLeftBig, jello } from 'react-animations';

const fadeAnimation = keyframes`${fadeInLeftBig}`;
const jelloAnimation = keyframes`${jello}`;

const FadeIn = styled.div`
    animation: 2s ${fadeAnimation};
    width: 400px;
    margin-right: 10px;
`;
const Jello = styled.div`
    animation: 3s ${jelloAnimation};
    margin-left: 10px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button`
    padding: 20px;
    background-color: #fff;
    color: #000;
    border: none;
    margin: 10px;
    width: 150px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 4px 4px 2px #456;
    cursor: pointer;
`;

const Dashboard = () => {
    return (
        <div className="dashboard_container">
            <FadeIn>
                <img className="profile_image" src={profileImage} alt="Sabelo"/>
            </FadeIn>
            <div className="info_section">
                <Jello>
                    <h2>Hi, I'm A Programmer!</h2>
                    <p>My name is Sabelo and I do coding for a living and for fun.</p>
                </Jello>
                <div className="navigation">
                    <ul>
                        <li><Button>Work</Button></li>
                        <li><Button>About Me</Button></li>
                        <li><Button>Keep In Touch</Button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
