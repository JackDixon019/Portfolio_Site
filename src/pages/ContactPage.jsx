import JaggedSection from "../components/JaggedSection";
import { linkBaseStyle, titleOnPapayaStyle } from "../components/styles";
import resume from "../Jack-Dixon-Resume-Dev.pdf";
import EnvelopeIcon from "@heroicons/react/24/solid/EnvelopeIcon";
import DocumentIcon from "@heroicons/react/24/solid/DocumentTextIcon";

export default function ContactPage() {
    let contactLinkStyle = "mt-4 flex flex-row justify-center align-middle text-scarlet-500 hover:text-smalt-700"
    return (
        <JaggedSection>
            <h1 className={titleOnPapayaStyle}>Contact</h1>
            <div className="m-auto mt-12 w-6/12 text-center font-Montserrat ">
                <a href="https://github.com/JackDixon019">
                    <div className={contactLinkStyle}>
                        <span class={"fa-brands fa-github text-3xl "} />
                        <h2 className={linkBaseStyle + " ml-4 mt-auto"}>
                            Github
                        </h2>
                    </div>
                </a>
                <a href="http://www.linkedin.com/in/jack-dixon-dev">
                    <div className={contactLinkStyle}>
                        <span class={"fa-brands fa-linkedin text-3xl "} />
                        <h2 className={linkBaseStyle + " ml-4 mt-auto"}>
                            LinkedIn
                        </h2>
                    </div>
                </a>
                <a href="mailto:jack.dixon019@gmail.com">
                    <div className={contactLinkStyle}>
                        <EnvelopeIcon className="h-8" />
                        <h2 className={linkBaseStyle + " ml-4 mt-auto"}>
                            Email
                        </h2>
                    </div>
                </a>
                <a href={resume}>
                    <div className={contactLinkStyle}>
                        <DocumentIcon className="h-8" />
                        <h2 className={linkBaseStyle + " ml-4 mt-auto"}>
                            Resume
                        </h2>
                    </div>
                </a>
            </div>
        </JaggedSection>
    );
}
