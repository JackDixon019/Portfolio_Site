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
import challenjour from "../images/Challenjour.png";
import ERD from "../images/ERD.png";
import shinyCompanion from "../images/Shiny_Companion_Screenshot.png";

export default function HomePage() {
    // smoothly scrolls to location on page
    function scrollToPortfolio(e) {
        e.preventDefault();
        let portfolio = document.getElementById("portfolioStart");
        document.documentElement.style.scrollBehavior = "smooth";
        portfolio.scrollIntoView({ inline: "nearest" });
    }

    let portfolioImageStyle = "mt-8 w-11/12 m-auto md:m-auto md:w-3/12";
    let portfolioFlexBoxStyle =
        "flex flex-col content-center justify-between md:flex-row md:content-center";
    let portfolioFlexBoxStyleReverse =
        "flex flex-col-reverse content-center justify-between md:flex-row";
    let portfolioArticleStyle =
        "pb-12 pt-8 text-justify font-Montserrat md:w-8/12";
    let portfolioIconStyle = " text-5xl md:text-3xl ";

    return (
        <div id="HomePage" className="min-h-screen flex-col">
            {/* Intro */}
            <JaggedSection id="intro">
                <h1 className={titleOnPapayaStyle}>Welcome!</h1>
                <article className="pb-12">
                    <p className="m-auto mt-12 w-8/12 font-Montserrat">
                        My name is{" "}
                        <NavLink to={"/contact"} className={linkOnPapayaStyle}>
                            Jack Dixon
                        </NavLink>
                        , and I am a student at Coder Academy currently enrolled
                        in the Full Stack Web Development Bootcamp. You can see
                        some examples of my work over the past year here in my{" "}
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
                            rel="noreferrer"
                            className={linkOnPapayaStyle}
                        >
                            Github
                        </a>
                        .{/* TODO: add blog page */}
                        {/* If you'd like to learn a little more about me, and the
                        lessons I have learned from my projects, you can check
                        out my{" "}
                        <NavLink to={"/blog"} className={linkOnPapayaStyle}>
                            blog posts
                        </NavLink>
                        . */}
                    </p>
                </article>
            </JaggedSection>

            {/* IGYB */}
            <NonJaggedSection id="portfolioStart" colour="bg-smalt-800">
                {/* TODO: Add the link to the site when deployed */}
                <h1 className={titleOnSmaltStyle}>
                    {" "}
                    <a href="https://www.google.com">I Got You Boo</a>
                </h1>
                <div className={portfolioFlexBoxStyle}>
                    <img
                        src={iGotYouBoo}
                        alt="Screenshot of I Got You Boo landing page"
                        className={portfolioImageStyle}
                    />
                    <article className={portfolioArticleStyle}>
                        <p>
                            This project is a collaborative work between myself
                            and two fellow students from Coder Academy:{" "}
                        </p>
                        <p>
                            <a
                                href="https://github.com/captainaomi"
                                rel="noreferrer"
                                className={linkOnSmaltStyle}
                            >
                                Naomi Mowbray
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://github.com/ella-jones"
                                rel="noreferrer"
                                className={linkOnSmaltStyle}
                            >
                                Ella Jones
                            </a>
                        </p>
                        <p>
                            We worked together for our final assignment to
                            create a forum for people seeking mentors to help
                            them as they step into spaces where they are a
                            minority.
                        </p>
                        <p>
                            This site uses the MERN stack, including a frontend
                            written using the React Framework with Tailwind for
                            the styling, a backend written using Express and
                            Node.js, with Mongoose acting as an ODM for
                            interactions with a MongoDB backend.
                        </p>
                        <p>
                            The frontend is deployed using Netlify, and the
                            Backend is deployed using Heroku.
                        </p>
                    </article>
                </div>
                {/* TODO: Replace with actual link */}
                <aside className="pb-12">
                    <a href="https://www.google.com">
                        <i
                            class={
                                "fa-brands fa-github text-orange-peel-400 hover:text-scarlet-500" +
                                portfolioIconStyle
                            }
                        />
                    </a>{" "}
                    <a href="https://www.google.com">
                        <i
                            className={
                                "fa-solid fa-globe ml-24  text-orange-peel-400 hover:text-scarlet-500" +
                                portfolioIconStyle
                            }
                        />
                    </a>
                </aside>
            </NonJaggedSection>

            {/* Birdwatching API */}
            <JaggedSection>
                <h1 className={titleOnPapayaStyle}>
                    <a href="https://github.com/JackDixon019/JackDixon_T2A2">
                        Birdwatching API
                    </a>
                </h1>
                <div className={portfolioFlexBoxStyleReverse}>
                    <article className={portfolioArticleStyle}>
                        <p>
                            This is an API for an amateur birdwatching app. It
                            features full CRUD for users, locations, birds, and
                            sessions, as well as authentication/authorisation
                            systems to protect data. The API is designed for
                            amateur birdwatchers to be able to easily record how
                            many of each bird they saw during a birdwatching
                            session, as well as the date and location of each
                            session.
                        </p>
                        <p>
                            This API was written in Python, using the Flask
                            framework in conjunction with a SQL database and
                            with SQLAlchemy as an ORM.
                        </p>
                    </article>
                    <img
                        src={ERD}
                        alt="ERD of Birdwatching API Database"
                        className={portfolioImageStyle}
                    />
                </div>
                <aside className="pb-12">
                    <a href="https://github.com/JackDixon019/JackDixon_T2A2">
                        <i
                            class={
                                "fa-brands fa-github text-scarlet-500 hover:text-smalt-700" +
                                portfolioIconStyle
                            }
                        />
                    </a>{" "}
                </aside>
            </JaggedSection>

            {/* Shiny Companion */}
            <NonJaggedSection colour="bg-orange-peel-500">
                <h1 className={titleOnOrangeStyle}>
                    <a
                        href="https://shiny-companion.netlify.app/"
                        rel="noreferrer"
                    >
                        Shiny Hunting Companion
                    </a>
                </h1>
                <div className={portfolioFlexBoxStyle}>
                    <img
                        src={shinyCompanion}
                        alt="Screenshot of Shiny Companion App"
                        className={portfolioImageStyle}
                    />
                    <article className={portfolioArticleStyle}>
                        <p>
                            This project was the result of a week-long
                            Hackathon, where I collaborated with my classmate{" "}
                            <a
                                href="https://github.com/O-App-Pesi"
                                rel="noreferrer"
                                className={linkOnOrangeStyle}
                            >
                                Joshua Thompson
                            </a>{" "}
                            to create an app which could assist users in hunting
                            for so-called "shiny" pokemon.
                        </p>
                        <p>
                            The app features several tools which can be of use
                            to a player, these are explained in further detail
                            in the{" "}
                            <a
                                href="https://github.com/ShinyHelper/ShinyHuntingCompanion_SV"
                                rel="noreferrer"
                                className={linkOnOrangeStyle}
                            >
                                Github repo
                            </a>{" "}
                            of the project.
                        </p>
                        <p>
                            This app was made using React, fetching data from{" "}
                            <a
                                href="https://pokeapi.co/"
                                rel="noreferrer"
                                className={linkOnOrangeStyle}
                            >
                                PokeApi
                            </a>
                            .
                        </p>
                        <p>
                            With this project, I am particularly happy with the
                            neat manner in which I was able to handle iterative
                            element rendering with the "SandwichRecipe"
                            component, allowing me to render any number of 36
                            distinct elements as required. This component is
                            used in both the "Sandwiches" page to render 18
                            recipes at a time, and again on each individual
                            pokemon's page to render only the elements which
                            correspond to the pokemon's "type".
                        </p>
                    </article>
                </div>
                <aside className="pb-12">
                    <a href="https://github.com/ShinyHelper/ShinyHuntingCompanion_SV">
                        <i
                            class={
                                "fa-brands fa-github text-smalt-700 hover:text-papaya-whip-100" +
                                portfolioIconStyle
                            }
                        />
                    </a>{" "}
                    <a href="https://shiny-companion.netlify.app/">
                        <i
                            className={
                                "fa-solid fa-globe ml-24 text-smalt-700 hover:text-papaya-whip-100" +
                                portfolioIconStyle
                            }
                        />
                    </a>
                </aside>
            </NonJaggedSection>

            {/* Challenjour */}
            <JaggedSection>
                <h1 className={titleOnPapayaStyle}>
                    <a href="https://github.com/JackDixon019/Challenjour_React_App">
                        Challenjour React App
                    </a>
                </h1>
                <div className={portfolioFlexBoxStyleReverse}>
                    <article className={portfolioArticleStyle}>
                        <p>
                            This app was written as a side-project to explore
                            using React to create a website that would
                            reactively render according to calls made to an API.
                            In this case, I contacted the Riot Games API to
                            display a user's "Challenges" data.
                        </p>
                        <p>
                            I chose to include this project in my portfolio
                            because it was an entirely independent endeavour,
                            and I'm proud I was able to independently create
                            this from scratch.
                        </p>
                        <p>
                            This site is not deployed, primarily due to Riot
                            Games' API key restrictions. Since this project was
                            a personal one for educational purposes only, it was
                            not approved for a permanent key and must be
                            manually updated every 24 hours. Even without the
                            API key, the test data should still work, and give a
                            view of how the site reactively renders
                        </p>
                    </article>
                    <img
                        src={challenjour}
                        alt="Screenshot of Challenjour React App"
                        className={portfolioImageStyle}
                    />
                </div>
                <aside className="pb-12">
                    <a href="https://github.com/JackDixon019/Challenjour_React_App">
                        <i
                            class={
                                "fa-brands fa-github text-scarlet-500 hover:text-smalt-700" +
                                portfolioIconStyle
                            }
                        />
                    </a>
                </aside>
            </JaggedSection>
        </div>
    );
}
