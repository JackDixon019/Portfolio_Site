import JaggedSection from "../components/JaggedSection";

export default function HomePage() {
    return (
        <div id="HomePage" className="min-h-screen">
            <JaggedSection>
                <h1 className="font-Bebas-Neue text-5xl text-scarlet-500">
                    First section
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur beatae, maxime voluptatibus dolor dolorem quas accusamus nisi! Quisquam quam possimus vero ut et maxime ex ducimus alias harum dignissimos.
                </p>
            </JaggedSection>
            <section className="nonJagged bg-smalt-800 relative w-full">
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
