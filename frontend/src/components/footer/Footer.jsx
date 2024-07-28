import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="footer-logo">Election Commission of India</h1>
                    <p>Empowering the nation with remote voting technology. Ensuring every citizen's right to vote is exercised securely and conveniently.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/HowToVote">How to Cast Your Vote</Link></li>
                        <li><Link to="/Schedule">Voting Schedule</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact</h2>
                    <p>Election Commission of India, Nirvachan Sadan, Ashoka Road, New Delhi - 110001</p>
                    <p>Email: electioncommission202423@gmail.com</p>
                    <p>Phone: +9073832503</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Election Commission of India. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer