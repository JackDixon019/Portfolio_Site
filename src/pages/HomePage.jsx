import { NavLink } from "react-router-dom";
import JaggedSection from "../components/JaggedSection";
import {
    linkOnOrangeStyle,
    linkOnPapayaStyle,
    linkOnSmaltStyle,
    titleOnOrangeStyle,
    titleOnPapayaStyle,
    titleOnSmaltStyle,
} from "../components/styles";
import NonJaggedSection from "../components/NonJaggedSection";
import iGotYouBoo from "../images/I_Got_You_Boo_Landing_Placeholder.png";

export default function HomePage() {
    // smoothly scrolls to location on page
    function scrollToPortfolio(e) {
        e.preventDefault();
        let portfolio = document.getElementById("portfolio");
        document.documentElement.style.scrollBehavior = "smooth";
        portfolio.scrollIntoView({ inline: "nearest" });
    }

    return (
        <div id="HomePage" className="min-h-screen">
            <JaggedSection id="intro">
                <h1 className={titleOnPapayaStyle}>Welcome!</h1>
                <p className="m-auto mt-12 w-8/12 font-Montserrat">
                    My name is{" "}
                    <NavLink to={"/contact"} className={linkOnPapayaStyle}>
                        Jack Dixon
                    </NavLink>
                    , and I am a student at Coder Academy currently enrolled in
                    the Full Stack Web Development Bootcamp. You can see some
                    examples of my work over the past year here in my{" "}
                    <a
                        href="#portfolioStart"
                        onClick={(e) => scrollToPortfolio(e)}
                        className={linkOnPapayaStyle}
                    >
                        portfolio
                    </a>
                    , or on my{" "}
                    <a
                        href="https://github.com/JackDixon019"
                        target="_blank"
                        rel="noreferrer"
                        className={linkOnPapayaStyle}
                    >
                        Github
                    </a>{" "}
                    . If you'd like to learn a little more about me, and the
                    lessons I have learned from my projects, you can check out
                    my{" "}
                    <NavLink to={"/blog"} className={linkOnPapayaStyle}>
                        blog posts
                    </NavLink>
                    .
                </p>
            </JaggedSection>
            <NonJaggedSection id="portfolioStart" colour="bg-smalt-800">
                {/* TODO: Add the link to the site when deployed */}
                <h1 className={titleOnSmaltStyle}>
                    {" "}
                    <a href="https://www.google.com">I Got You Boo</a>
                </h1>
                {/* TODO: Replace with actual landing page */}
                <img
                    src={iGotYouBoo}
                    alt="I Got You Boo Landing Page"
                    className="float-right mt-8 w-3/12"
                />
                <article className="w-8/12 pt-8 text-left">
                    <p>
                        This project is a collaborative work between myself and
                        two fellow students from Coder Academy:{" "}
                    </p>
                    <p>
                        <a
                            href="https://github.com/captainaomi"
                            target="_blank"
                            rel="noreferrer"
                            className={linkOnSmaltStyle}
                        >
                            Naomi Mowbray
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://github.com/ella-jones"
                            target="_blank"
                            rel="noreferrer"
                            className={linkOnSmaltStyle}
                        >
                            Ella Jones
                        </a>
                    </p>
                    <p>
                        We worked together for our final assignment to create a
                        forum for people seeking mentors to help them as they
                        step into spaces where they are a minority.
                    </p>
                    <p>
                        This site uses the MERN stack, including a frontend
                        written using the React Framework with Tailwind for the
                        styling, a backend written using Express and Node.js,
                        with Mongoose acting as an ODM for interactions with a
                        MongoDB backend.
                    </p>
                    <p>
                        The frontend is deployed using Netlify, and the Backend
                        is deployed using Heroku.
                    </p>
                </article>
            </NonJaggedSection>
            <JaggedSection>
                <h1 className={titleOnPapayaStyle}>Challenjour React App</h1>
                <article>
                    <p>
                        This app was written as a side-project to explore using
                        React to create a website that would reactively render
                        according to calls made to an API. In this case, I
                        contacted the Riot Games API to display a user's
                        "Challenges" data. 
                    </p> 
                    <p>
                        The code here is a little messy, as I
                        was practicing both the old style of React
                        elements-as-a-class and the more modern
                        elements-as-a-function standard, as well as converting
                        from the old to the new.
                    </p>
                    <p>
                        This site is not deployed, primarily due to Riot Games'
                        API key restrictions. Since this project was a personal
                        one for educational purposes only, it was not approved
                        for a permanent key and must be manually updated every
                        24 hours.
                    </p>
                </article>
            </JaggedSection>
            <NonJaggedSection colour="bg-orange-peel-500">
                <h1 className={titleOnOrangeStyle}>Fourth Section</h1>
                <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                    <a href="#portfolio" className={linkOnOrangeStyle}>
                        Placeat
                    </a>{" "}
                    nisi exercitationem in aut neque esse, temporibus deleniti
                    voluptatum debitis, ratione dicta animi nulla ipsam ullam
                    quidem repellendus sit quibusdam fugiat?{" "}
                </p>
            </NonJaggedSection>
            <JaggedSection>Fifth section</JaggedSection>
        </div>
    );
}
