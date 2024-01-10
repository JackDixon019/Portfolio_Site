export default function JaggedSection({ children }) {
    return (
        <section className="jagged w-full p-12 lg:pl-16 xl:pl-24 relative font-Montserrat before:bg-papaya-whip-100 after:bg-papaya-whip-100">
            {children}
        </section>
    );
}
