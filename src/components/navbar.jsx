import { useState } from 'react';
import './navbar.css'

function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    const scrollTo = (id) => {
        setNavOpen(false);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
    

    return (
        <div className={`${navOpen ? "open " : ""}fixed flex w-full z-50`}>
            <div className='overlay bg-black fixed w-screen h-screen'></div>
            <div className='fixed h-screen bg-black px-6 pt-30 menu flex flex-col gap-2'>
                <a onClick={() => scrollTo("Home")} className='text-xl cursor-pointer'>Home</a>
                <a onClick={() => scrollTo("About")} className='text-xl cursor-pointer'>About</a>
                <a onClick={() => scrollTo("Projects")} className='text-xl cursor-pointer'>Projects</a>
            </div>
            <button className='p-6 z-10' onClick={() => setNavOpen(!navOpen)}>
                <div class='hamburger-toggle'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </button>
        </div>
    )
}

export default NavBar;