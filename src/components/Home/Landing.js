import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Landing() {
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
            url: 'https://www.linkedin.com/in/ThéoBIET/',
            className: 'linkedin'
        },
        {
            icon: <FaTwitter />,
            url: 'https://twitter.com/DavDav_js',
            className: 'twitter'
        },
    ]

    const [role, setRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setRole((role + 1) % roles.length), 3000);
        return () => clearInterval(interval);
    }, [role, setRole, roles.length]);

    return (
        <div className="Landing">
            <div className="Landing__content">
                <div className="Landing__content__title">
                    <h1>Hi, I'm Theo.</h1>
                    <h2>Welcome to my Website!</h2>
                    <p>I'm <span className="Landing__content__title__job">{roles[role]}</span></p>
                </div>
                <div className="Landing__content__actions">
                    <ul className="Landing__content__actions__buttons">
                        <li className="Landing__content__actions__buttons__button button red">
                            Contact Me
                        </li>
                        <li className="Landing__content__actions__buttons__button button yellow">
                            Download Resume
                        </li>
                    </ul>
                    <ul className="Landing__content__actions__socials">
                        {socials.map((social, index) => (
                            <a href={social.url} key={index} target="_blank" rel="noreferrer">
                                <li className={`Landing__content__actions__socials__item button little ${social.className}`}>
                                    {social.icon}
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="Landing__scroll">
                <p>As you can see this website isn't finished. The development is currently in progress, so some things can seem to be "broken" atm.</p>
            </div>
        </div>
    );
}