import React from 'react';
import profileImage from '../../assets/DSC_7953.jpg';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard_container">
            <div className="profile_image_container">
                <img className="profile_image" src={profileImage} alt="Sabelo"/>
            </div>
        </div>
    )
}

export default Dashboard;
