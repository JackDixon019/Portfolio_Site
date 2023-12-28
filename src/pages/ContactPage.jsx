import JaggedSection from "../components/JaggedSection";
import { colours, styles } from "../components/styles";
import resume from "../Jack-Dixon-Resume-Dev.pdf";
import EnvelopeIcon from "@heroicons/react/24/solid/EnvelopeIcon";
import DocumentIcon from "@heroicons/react/24/solid/DocumentTextIcon";

export default function ContactPage() {
    let contactDivStyle = "mt-4 flex flex-row justify-center align-middle text-scarlet-500 hover:text-smalt-700"
    let contactLinkStyle = "font-Bebas-Neue text-3xl font-bold ml-4 mt-auto"
    return (
        <JaggedSection>
            <h1 className={styles.title + " text-scarlet-500"}>Contact</h1>
            <div className="m-auto mt-12 w-6/12 text-center font-Montserrat ">
                <a href="https://github.com/JackDixon019">
                    <div className={contactDivStyle}>
                        <span class={"fa-brands fa-github text-3xl "} />
                        <h2 className={contactLinkStyle}>
                            Github
                        </h2>
                    </div>
                </a>
                <a href="http://www.linkedin.com/in/jack-dixon-dev">
                    <div className={contactDivStyle}>
                        <span class={"fa-brands fa-linkedin text-3xl "} />
                        <h2 className={contactLinkStyle}>
                            LinkedIn
                        </h2>
                    </div>
                </a>
                <a href="mailto:jack.dixon019@gmail.com">
                    <div className={contactDivStyle}>
                        <EnvelopeIcon className="h-8" />
                        <h2 className={contactLinkStyle}>
                            Email
                        </h2>
                    </div>
                </a>
                <a href={resume}>
                    <div className={contactDivStyle}>
                        <DocumentIcon className="h-8" />
                        <h2 className={contactLinkStyle}>
                            Resume
                        </h2>
                    </div>
                </a>
            </div>
        </JaggedSection>
    );
}
