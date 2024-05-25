import Navbar from "../../components/home/Navbar";
import Footer from "../../components/Footer";
import ProfileAdd from "../../components/profile/AddProfile";
import "../../index.css";


export default function Profile_Add()
{
    return (
        <section className="bg-[--background]">
            <section id="navbar">
                <Navbar />
            </section>

            <section  id="profile_page">
                <ProfileAdd/>
            </section>

            <section  id="footer">
                <Footer/>
            </section>
        </section>
    ); 
}