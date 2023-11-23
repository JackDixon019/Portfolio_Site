import { NavLink } from "react-router-dom";
import JaggedSection from "../components/JaggedSection";
import { linkStyle } from "../components/styles";

export default function HomePage() {

    let needlessChange = "I am making this change to test out rebasing"
    
    function scrollToPortfolio(e){
        e.preventDefault()
        let portfolio = document.getElementById("portfolio")
        document.documentElement.style.scrollBehavior = "smooth";
        portfolio.scrollIntoView({ inline: "nearest" });

    }
    return (
        <div id="HomePage" className="min-h-screen">
            <JaggedSection id="intro">
                <h1 className="p-16 font-Bebas-Neue text-5xl text-scarlet-500">
                    Welcome!
                </h1>
                <p className="m-auto w-8/12 font-Montserrat">
                    My name is{" "}
                    <NavLink to={"/contact"} className={linkStyle}>
                        Jack Dixon
                    </NavLink>
                    , and I am a student at Coder Academy currently enrolled in
                    the Full Stack Web Development Bootcamp. You can see some
                    examples of my work over the past year here in my <a href="#portfolio" onClick={(e) => scrollToPortfolio(e)} className={linkStyle}>portfolio</a>,
                    or on my{" "}
                    <a
                        href="https://github.com/JackDixon019"
                        className={linkStyle}
                    >
                        Github
                    </a>{" "}
                    . If you'd like to learn a little more about me, and the
                    lessons I have learned from my projects, you can check out
                    my{" "}
                    <NavLink to={"/blog"} className={linkStyle}>
                        blog posts
                    </NavLink>
                    .
                </p>
            </JaggedSection>
            <section id="portfolio" className="nonJagged relative w-full bg-smalt-800">
                second section
            </section>
            <JaggedSection>Third section</JaggedSection>
            <section className="nonJagged relative w-full bg-orange-peel-600 ">
                Fourth section
            </section>
            <JaggedSection>Fifth section</JaggedSection>
        </div>
    );
}
