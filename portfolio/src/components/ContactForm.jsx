import './ContactForm.css'

function ContactForm() {
    return(
        <form id="contact-form">
            <label>
                Name
                <input type="text" />
            </label>
            <label>
                Email
                <input type="email" />
            </label>
            <label>
                Message
                <textarea name="message" />
            </label>
        </form>
    )
}

export default ContactForm