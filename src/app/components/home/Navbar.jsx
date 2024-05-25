'use client';
import { useEffect, useRef, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => 
{

    const menu = useRef();
    const btn = useRef();
    const [code, setCode] = useState(0);
    const [uname, setName] = useState([]);

    const clickMe = () => 
    {
        const doopen = btn.current.classList.contains("bi-list");
        if (doopen === true) 
        {
            btn.current.classList.remove("bi-list");
            // btn.current.classList.add("bi-x");
            menu.current.style.right = "8dvw";
            menu.current.classList.remove("hidden");

        }
        else 
        {
            btn.current.classList.remove("bi-x");
            btn.current.classList.add("bi-list");
            menu.current.style.right = "-100%";
            menu.current.classList.add("hidden");
        }
    }

    const clickLogout = () => 
    {
        sessionStorage.setItem("navcode", 1)
    }

    function logIn() 
    {
        return <a className="flex gap-4" href="/login"><i className="bi bi-box-arrow-right block"></i> Sign In</a>
    }

    function logOut() 
    {
        return (<a onClick={clickLogout} className="flex gap-4" href="/"><i className="bi bi-box-arrow-right block"></i> Logout</a>)
    }


    useEffect(() => 
    {
        setName(sessionStorage.getItem("name"));
        const storedCode = parseInt(sessionStorage.getItem("navcode"));
        if (!isNaN(storedCode)) 
        {
            // Check if parsing was successful
            setCode(storedCode);
        }
    }, []);

    return (
        <header className="w-full h-[8dvh] bg-transparent py-3">

            <nav className="flex justify-between items-center">

                <div className="navbar_title h-[8dvh] flex justify-between items-center gap-8">
                    <div className="p-[2.5px] rounded-full">
                        <div className="title text-2xl font-extrabold p-3 text-[#e3d8f6] rounded-full">StudyWings</div>
                    </div>
                </div>

                <div ref={menu} id="navbar_float_menu" className="absolute transition-all top-[9dvh] right-[-100%] z-10 w-[260px] h-[280px] p-1 rounded-lg hidden duration-500">
                    <div className="flex h-full flex-col justify-evenly items-center p-3 text-xl bg-[#a986e3] rounded-lg text-[#0a0413]" >
                        <div className="container flex justify-between items-center gap-8 rounded-md h-[80px] bg-[#8a5ad8]">
                            <div className="w-[40%] flex justify-center items-center">
                                <img className="rounded-full" src='/img1.jpg' alt="dummy image" width={50} />
                            </div>
                            <span className="section w-[70%]">{uname}</span>
                        </div>
                        <span className="flex justify-center items-center hover:bg-[#8a5ad8] px-4 w-full h-[40px] rounded-lg"><a href="/">Home</a></span>
                        <span className="flex justify-center items-center hover:bg-[#8a5ad8] px-4 w-full h-[40px] rounded-lg"><a href="/profile">Profile</a></span>
                        <span className="flex justify-center items-center hover:bg-[#8a5ad8] px-4 w-full h-[40px] rounded-lg"><a href="/application">Application</a></span>
                        <span className="flex justify-center items-center hover:bg-[#8a5ad8] px-4 w-full h-[40px] rounded-lg">
                            {code === 1 ? logOut() : logIn()}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div onClick={clickMe} id="navbar_menu_button" className="navbar_menu_button text-2xl flex items-center gap-2 px-3 py-1 cursor-pointer">
                       <div ref={btn}>
                            <VscThreeBars
                                className="bi bi-list text-5xl font-bold text-[--primary-200] border-2 border-[#a986e3] px-2 rounded-xl"
                            />
                        </div> 
                        
                    </div>
                </div>

            </nav>

        </header>
    );
}

export default Navbar;
