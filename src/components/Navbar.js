import { useEffect, useState } from 'react';
import { scrollTo } from '../utils';
import Logo from './Logo';

export default function Navbar() {
    const [isLogoVisible, setIsLogoVisible] = useState(true);

    useEffect(() => {
        const threshold = 100;
        window.onscroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos < threshold) return setIsLogoVisible(true);
            setIsLogoVisible(false);
        }
    }, []);

    return (
        <div className="Navbar">
            <div
                className={`Navbar__logo ${isLogoVisible ? '--visible' : '--hidden'}`}
                onClick={() => scrollTo(false, true)}
            >
                <Logo color="#010a10" height="100" />
            </div>
            <div className="Navbar__burger">
                <div className="Navbar__burger__line"></div>
                <div className="Navbar__burger__line"></div>
                <div className="Navbar__burger__line"></div>
            </div>
        </div>
    );
}