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

    return (
        <section id={elementID} className={"nonJagged pt-8 pb-8 w-full font-Montserrat " + textColour + colour}>
            {children}
        </section>
    );
}
