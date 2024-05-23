import Navbar from "./components/home/Navbar";
import HeroPage from "./components/home/Hero";
import Footer from "./components/Footer";
import "./index.css";

export default function Home() {
    return (
        <section>
            <section id="navbar">
                <Navbar />
            </section>

            <section id="hero-section">
                <HeroPage />
            </section>

            <section  id="footer">
                <Footer/>
            </section>
        </section>
    );
}
