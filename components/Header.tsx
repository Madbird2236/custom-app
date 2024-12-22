import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-xl font-bold">Daily Operations App</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/time-sheet" className="hover:underline">Time Sheet</a></li>
                    <li><a href="/project-manager" className="hover:underline">Project Manager</a></li>
                    <li><a href="/inventory" className="hover:underline">Inventory Management</a></li>
                    <li><a href="/vacation-leave" className="hover:underline">Vacation & Leave</a></li>
                    <li><a href="/onboarding" className="hover:underline">Employee Onboarding</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;