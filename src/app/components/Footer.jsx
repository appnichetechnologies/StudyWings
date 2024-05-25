const Footer = () => 
{
    return (
        <div className="w-[80dw] p-8">
            <footer
                className=" md:py-6 bg-[#2c1353] h-auto mt-8 px-8
            rounded-xl flex gap-4 md:gap-0 flex-col md:flex-row md:justify-between justify-center items-center p-4"
            >
                <div className="text-center">
                    <span className="text-white">Copyright © Appniche Technologies 2024</span>
                </div>
                <div className="links flex flex-col md:flex-row gap-4 md:gap-0 text-sm">
                    <div className="hidden md:flex items-center gap-4">
                        <a href="/" className="text-white">Home</a>
                        <a href="/profile" className="text-white">Profile</a>
                        <a href="/login" className="text-white">Login</a>
                    </div>
                    <span className="px-2 hidden md:flex gap-4">
                        | 
                    </span>
                    <a href="#" className="hidden md:flex text-white">Terms of Use</a>

                    
                </div>
            </footer>
        </div>
    );
};

export default Footer;