import Logo from './Logo';

export default function Navbar() {
    const scrollTo = (className) => {
        const element = document.querySelector(`.${className}`);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="Navbar">
            <div className="Navbar__logo"
                onClick={() => scrollTo('Navbar')}>
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