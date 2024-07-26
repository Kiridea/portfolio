import Skills from "../components/About/Skills";
import Character from "../components/About/Character";
import Stats from "../components/About/Stats";
import './About.css'

function About() {
    return (
        <section id="about">
            <Skills />
            <Character />
            <Stats />
        </section>
    )
}

export default About;