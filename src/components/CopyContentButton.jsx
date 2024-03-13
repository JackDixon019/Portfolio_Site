import { useState } from "react";

export default function CopyContentButton({elementId, classNames}){
    let [copied, setCopied] = useState(false)
    async function copyContent(){
        try {
            let text = document.getElementById(elementId).innerText;
            await navigator.clipboard.writeText(text);
            setCopied(true)
            console.log("Content copied to clipboard");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };
    function handleBlur(){
        setCopied(false)
    }
    return(
        <button type="button"
        onClick={copyContent}
        onBlur={handleBlur}
        className={classNames}
        >
            <i class="fa-solid fa-copy"></i>
            {copied ? " Code copied to clipboard" : null}
        </button>
    )
}