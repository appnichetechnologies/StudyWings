import Navbar from "../components/home/Navbar";
import Footer from "../components/Footer";
import RegisterForm from "../components/auth/RegisterForm";
import "../index.css";

export default function Home() {
    return (
        <section>
            <section id="navbar">
                <Navbar />
            </section>

            <section id="register-section">
                <RegisterForm />
            </section>

            <section  id="footer">
                <Footer/>
            </section>
        </section>
    );
}
