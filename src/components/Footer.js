import Logo from './Logo';
import { scrollTo } from '../utils';

export default function Footer() {
    const navigationsLink = ['Home', 'About Me', 'Skills', 'Experiences', 'Projects', 'Contact'];

    return (
        <div className="Footer">
            <footer className="Footer__content">
                <div className="Footer__content__logo" onClick={() => scrollTo(false, true)}>
                    <Logo color="#fffbf2" height="150" />
                </div>
                <div className="Footer__content__text">
                    <p>This portfolio was made with ❤️ by Théo BIET. </p>
                    <p>© 2021 Théo BIET. All rights reserved.</p>
                </div>
            </footer>
            <nav className="Footer__links">
                <ul className="Footer__links__list">
                    {navigationsLink.map((link, index) => (
                        <li key={index} className="Footer__links__list__item">
                            {link}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}