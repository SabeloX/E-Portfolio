import React from 'react';
import profileImage from '../../assets/DSC_7953.jpg';
import './dashboard.css';
import styled, { keyframes } from 'styled-components';
import { fadeInLeftBig } from 'react-animations';

const bounceAnimation = keyframes`${fadeInLeftBig}`;

const Bouncy = styled.div`
    animation: 2s ${bounceAnimation};
    width: 400px;
`;

const Dashboard = () => {
    return (
        <div className="dashboard_container">
            <Bouncy>
                <img className="profile_image" src={profileImage} alt="Sabelo"/>
            </Bouncy>
        </div>
    )
}

export default Dashboard;
