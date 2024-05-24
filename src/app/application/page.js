import Navbar from "../components/home/Navbar";
import Footer from "../components/Footer";
import ApplicationFetch from "../components/application/Fetch";
import "../index.css";

export default function Application() {
    return (
        <section>
            <section id="navbar">
                <Navbar />
            </section>

            <section id="application-section">
                < ApplicationFetch/>
            </section>

            <section  id="footer">
                <Footer/>
            </section>
        </section>
    );
}
