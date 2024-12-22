import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="text-center">© {new Date().getFullYear()} Daily Operations App. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;