import { defaultData } from '../../assets/data.js';
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Desk } from '../Models/Desk';

export default function Landing() {
    const { roles, socials } = defaultData;
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
            <div className="Landing__desk">
                <div className="Landing__desk__renderer">
                    <Canvas
                        className="Skills__computer__renderer"
                        camera={{ position: [0, 2, 7], fov: 30, zoom: 1.5 }}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <ambientLight intensity={1.25} />
                        <directionalLight intensity={4} />
                        <Suspense fallback={null}>
                            <Desk
                                position={[-.5, -1.5, .3]}
                                rotation={[0, -.25, 0]}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
            <div className="Landing__scroll">
                <p>Scroll to discover</p>
            </div>
        </div>
    );
}