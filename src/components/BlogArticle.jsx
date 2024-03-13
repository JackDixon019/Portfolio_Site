import { useState } from "react";
import { colours, styles } from "./styles";

export default function BlogArticle({ children, backgroundColour }) {
    let [expanded, setExpanded] = useState(false);

    var buttonColour = colours.button.papaya;

    switch (backgroundColour) {
        case "smalt":
            buttonColour = colours.button.smalt;
            break;

        case "orange":
            buttonColour = colours.button.orange;
            break;

        case "papaya":
            buttonColour = colours.button.papaya;
            break;

        default:
            break;
    }

    function showMore(e) {
        e.preventDefault();
        setExpanded(!expanded);
    }

    return children ? (
        expanded ? (
            <div>
                <article className="m-auto pb-12 pt-8 text-justify font-Montserrat lg:w-8/12">
                    {children}
                </article>
                <button
                    type="button"
                    className={"m-auto w-full pb-12 " + styles.link + buttonColour}
                    onClick={(e) => showMore(e)}
                >
                    Show Less
                </button>
            </div>
        ) : (
            <div>
                <article className="m-auto pt-8 text-justify font-Montserrat lg:w-8/12">
                    {children[0]}
                </article>

                <button
                    type="button"
                    className={"m-auto w-full pb-12 " + styles.link + buttonColour}
                    onClick={(e) => showMore(e)}
                >
                    Show More
                </button>
            </div>
        )
    ) : null;
}
