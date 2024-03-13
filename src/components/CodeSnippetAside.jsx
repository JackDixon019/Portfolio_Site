import { CodeBlock, dracula } from "react-code-blocks";
import { colours } from "./styles";
import CopyContentButton from "./CopyContentButton";

export default function CodeSnippetAside({
    asideId,
    codeSnippet = `Hello World!`,
    buttonColours = colours.button.smalt,
    language = "Python",
    theme = dracula,
}) {
    return (
        <aside id={asideId}>
            <CodeBlock
                theme={theme}
                language={language}
                text={codeSnippet}
            />
            <CopyContentButton
                elementId={asideId}
                classNames={buttonColours + "ml-4"}
            />
        </aside>
    );
}
