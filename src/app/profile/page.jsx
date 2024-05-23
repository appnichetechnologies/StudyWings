import Navbar from "../components/home/Navbar";
import Footer from "../components/Footer";
import ProfilePanel from "../components/profile/ProfilePanel";
import StudentInfo from "../components/profile/ApplicationInfo";
import "../index.css";


export default function Profile()
{
    return (
        <section className="bg-[--background]">
            <section id="navbar">
                <Navbar />
            </section>

            <section  id="profile_page">
                <ProfilePanel/>
                <StudentInfo/>
            </section>

            <section  id="footer">
                <Footer/>
            </section>
        </section>
    ); 
}