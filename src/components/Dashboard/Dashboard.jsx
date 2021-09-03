import React from 'react';
import profileImage from '../../assets/DSC_7953.jpg';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <img className="profile_image" src={profileImage} alt="Sabelo"/>
        </div>
    )
}

export default Dashboard;
