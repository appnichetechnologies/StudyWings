import Navbar from "../components/home/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/auth/LoginForm";
import "../index.css";

export default function Home() {
    return (
        <section>
            <section id="navbar">
                <Navbar />
            </section>

            <section id="login-section">
                <LoginForm />
            </section>

            <section  id="footer">
                <Footer/>
            </section>
        </section>
    );
}
