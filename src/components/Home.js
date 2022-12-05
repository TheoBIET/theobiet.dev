import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
    const roles = [
        'a Fullstack Developer',
        'a passionate',
        'a Node.js Ninja',
        'a Data Lover',
        'learning AI',
        'discovering Web 3',
        'a technology enthusiast',
    ]

    const socials = [
        {
            icon: <FaGithub />,
            url: 'https://github.com/TheoBIET',
            className: 'github'
        },
        {
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/theo-biet/',
            className: 'linkedin'
        },
        {
            icon: <FaTwitter />,
            url: 'https://twitter.com/Theo_Biet',
            className: 'twitter'
        },
    ]

    const [role, setRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setRole((role + 1) % roles.length), 3000);
        return () => clearInterval(interval);
    }, [role, setRole, roles.length]);

    return (
        <div className="Home">
            <div className="Home__content">
                <div className="Home__content__title">
                    <h1>Hi, I'm Theo.</h1>
                    <h2>Welcome to my Website!</h2>
                    <p>I'm <span className="Home__content__title__job">{roles[role]}</span></p>
                </div>
                <div className="Home__content__actions">
                    <ul className="Home__content__actions__buttons">
                        <li className="Home__content__actions__buttons__button button red">
                            Contact Me
                        </li>
                        <li className="Home__content__actions__buttons__button button yellow">
                            Download Resume
                        </li>
                    </ul>
                    <ul className="Home__content__actions__socials">
                        {socials.map((social, index) => (
                            <li className={`Home__content__actions__socials__item button little ${social.className}`}>
                                {social.icon}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="Home__scroll">
                <p>As you can see this website isn't finished. The development is currently in progress, so some things can seem to be "broken" atm.</p>
            </div>
        </div>
    );
}