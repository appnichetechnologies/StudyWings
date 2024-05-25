import Navbar from "../../components/home/Navbar";
import Footer from "../../components/Footer";
import AddDocument from "../../components/profile/AddDocument";
import "../../index.css";


export default function Profile_Documents()
{
    return (
        <section className="bg-[--background]">
            <section id="navbar">
                <Navbar />
            </section>

            <section  id="profile_page">
                <AddDocument/>
            </section>

            <section  id="footer">
                <Footer/>
            </section>
        </section>
    ); 
}