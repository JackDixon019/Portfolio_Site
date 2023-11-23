export default function NonJaggedSection({ id, children, colour }) {
    let elementID = null
    if (id){
        elementID = id
    }
    let nonJaggedStyle = "nonJagged relative w-full font-Montserrat text-papaya-whip-100 " + colour
    return (
        <section id={elementID} className={nonJaggedStyle}>
            {children}
        </section>
    );
}
