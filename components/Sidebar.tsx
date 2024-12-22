import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><Link to="/time-sheet">Time Sheet</Link></li>
                <li><Link to="/project-manager">Project Manager</Link></li>
                <li><Link to="/inventory-management">Inventory Management</Link></li>
                <li><Link to="/vacation-leave">Vacation & Leave Management</Link></li>
                <li><Link to="/employee-onboarding">Employee Onboarding</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;