import logo from '../assets/logo.svg';

export default function Navbar() {
    const scrollTo = (className) => {
        const element = document.querySelector(`.${className}`);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="Navbar">
            <div className="Navbar__logo"
                onClick={() => scrollTo('Navbar')}>
                <img src={logo} alt="logo" />
            </div>
            <div className="Navbar__burger">
                <div className="Navbar__burger__line"></div>
                <div className="Navbar__burger__line"></div>
                <div className="Navbar__burger__line"></div>
            </div>
        </div>
    );
}