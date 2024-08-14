import './Contact.css'
import ContactForm from '../components/ContactForm'

function Contact() {
    return(
        <section id="contact">
            <div className="form-container">
                <ContactForm />
            </div>
            <div className="socials-container">
                <ul id="socials">
                    <li>
                        <a target="_blank" href="">
                            <img src="" alt="" />
                            Github
                        </a>
                        <a target="_blank" href="">
                            <img src="" alt="" />
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact