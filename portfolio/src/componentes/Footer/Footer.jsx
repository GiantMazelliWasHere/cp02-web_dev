import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return(
        <footer >
            <p>Desenvolvido por GiantMazelli.</p>
            <a class="apresentacao__botoes__link" href="https://github.com/GiantMazelliWasHere">
                    <FiGithub/>
            </a>
            <a class="apresentacao__botoes__link" href="https://www.linkedin.com/in/eduardo-mazelli/">
                    <FiLinkedin/>
            </a>
        </footer>
    )
}