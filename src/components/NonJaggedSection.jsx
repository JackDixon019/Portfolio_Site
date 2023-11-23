export default function NonJaggedSection({ id, children, colour }) {
    // assigns element an id if required
    let elementID = null
    if (id){
        elementID = id
    }

    // Sets text colour according to background
    let textColour = "text-papaya-whip-100 "
    if (colour === "bg-orange-peel-500"){
        textColour = "text-smalt-950 "
    } 

    let nonJaggedStyle = "nonJagged w-full font-Montserrat " + textColour + colour
    return (
        <section id={elementID} className={nonJaggedStyle}>
            {children}
        </section>
    );
}
