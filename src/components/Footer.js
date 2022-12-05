export default function Footer() {
    const navigationsLink = ['Home', 'About Me', 'Skills', 'Experiences', 'Projects', 'Contact'];

    return (
        <div className="Footer">
            <div className="Footer__content">
            </div>
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