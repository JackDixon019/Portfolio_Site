import JaggedSection from "../components/JaggedSection";

export default function HomePage() {
    return (
        <div id="HomePage" className="min-h-screen">
            <JaggedSection>
                First section
            </JaggedSection>
            <section className="nonJagged bg-smalt-700 after:bg-smalt-700  relative w-full">
                second section
            </section>
            <JaggedSection>
                Third section
            </JaggedSection>
            <section className="nonJagged relative w-full bg-orange-peel-500 ">
                Fourth section
            </section>
            <JaggedSection>
                Fifth section
            </JaggedSection>
        </div>
    );
}
