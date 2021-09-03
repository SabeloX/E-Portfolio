import React from 'react';
import profileImage from '../../assets/DSC_7953.jpg';
import './dashboard.css';
import styled, { keyframes } from 'styled-components';
import { fadeInLeftBig, zoomInDown, zoomInUp } from 'react-animations';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

const fadeAnimation = keyframes`${fadeInLeftBig}`;
const zoomInDownAnimation = keyframes`${zoomInDown}`;
const zoomInUpAnimation = keyframes`${zoomInUp}`;

const FadeIn = styled.div`
    animation: 2s ${fadeAnimation};
    width: 400px;
    margin-right: 10px;
`;
const ZoomInsDown = styled.div`
    animation: 3s ${zoomInDownAnimation};
    margin-left: 10px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ZoomInsUp = styled.div`
    animation: 3s ${zoomInUpAnimation};
    margin: 10px;
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
    font-family: 'Indie Flower', cursive;
    font-size: 15px;
`;

const Dashboard = () => {
    return (
        <div className="dashboard_container">
            <FadeIn>
                <img className="profile_image" src={profileImage} alt="Sabelo"/>
            </FadeIn>
            <div className="info_section">
                <ZoomInsDown>
                    <h1>Hi, I'm A Software Engineer!</h1>
                    <p>My name is Sabelo and I do coding for a living and for fun.</p>
                </ZoomInsDown>
                <ZoomInsUp className="navigation">
                    <ul>
                        <li><Button>My Work</Button></li>
                        <li><Button>About Me</Button></li>
                        <li><Button>Keep In Touch</Button></li>
                    </ul>
                    <div class="contact">
                        <ul>
                            <li>
                                <p>Instagram</p>
                                <IconButton>
                                    <a href="https://www.instagram.com/xero_king/" target="__blank" ><InstagramIcon fontSize="large"/></a>
                                </IconButton>
                            </li>
                            <li>
                                <p>Email</p>
                                <IconButton>
                                    <a href="mailto:sabelomtw@gmail.com" target="__blank" ><EmailSharpIcon fontSize="large"/></a>
                                </IconButton>
                            </li>
                            <li>
                                <p>Github</p>
                                <IconButton>
                                    <a href="https://github.com/SabeloX" target="__blank" ><GitHubIcon fontSize="large"/></a>
                                </IconButton>
                            </li>
                        </ul>
                    </div>
                </ZoomInsUp>
            </div>
        </div>
    )
}

export default Dashboard;
