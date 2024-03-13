export default function JaggedSection({ children, id }) {
    return (
        <section className="jagged w-full p-12 relative font-Montserrat before:bg-papaya-whip-100 after:bg-papaya-whip-100" id={id}>
            {children}
        </section>
    );
}
