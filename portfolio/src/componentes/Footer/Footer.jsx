import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
    return(
        <footer className="flex gap-10 justify-center items-center font-mono font-light text-lg bg-gradient-to-r from-rose-500 to-rose-900 h-16 text-white">
                <div className="flex items-baseline">
                    <MdCopyright className=" self-center"/>
                    <p>2024 GiantMazelli | All rights Reserved</p>
                </div>
            <div className="flex gap-4">
                <a class="apresentacao__botoes__link" href="https://github.com/GiantMazelliWasHere">
                    <FaGithub />
                </a>
                <a class="apresentacao__botoes__link" href="https://www.linkedin.com/in/eduardo-mazelli/">
                        <FaLinkedin/>
                </a>
                <a class="apresentacao__botoes__link" href="https://www.instagram.com/giantmazelli.exe/">
                        <FaInstagram/>
                </a>
            </div>
        </footer>
    )
}