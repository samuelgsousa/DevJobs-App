import GitLogo from "../../images/github-mark.svg"
import LinkedinLogo from "../../images/linkedin.svg"
import ExternalLink from "../../images/external-link.svg"

const Footer = () =>{

    return(

    <footer>
        <span>
            Projeto desenvolvido por <strong>Samuel Sousa</strong>
        </span>

        <div>
            <a href="https://github.com/samuelgsousa" target="_blank">GitHub <img src={ExternalLink} alt="" class="external" />  <img src={GitLogo} alt="" /></a> 
            <a href="https://www.linkedin.com/in/samuel-gomes-teixeira-de-sousa-5537b71b9" target="_blank">Linkedin <img src={ExternalLink} alt="" class="external"/> <img src={LinkedinLogo} alt="" /> </a> 
        </div>
    </footer>

    )
}

export default Footer