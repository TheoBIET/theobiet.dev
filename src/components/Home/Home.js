import Landing from './Landing';
import About from './About';
import Skills from './Skills';
import Travels from './Travels';
import Gallery from './Gallery';

export default function Home() {
    return (
        <div className="Home">
            <Landing />
            <About />
            <Skills />
            {/* <Travels /> */}
            <Gallery />
        </div>
    );
}