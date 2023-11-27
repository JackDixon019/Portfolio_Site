export default function JaggedSection({ children }) {
    return (
        <section className="jagged w-full p-12 relative font-Montserrat transition-opacity delay-150 ease-in before:bg-papaya-whip-100 after:bg-papaya-whip-100">
            {children}
        </section>
    );
}
