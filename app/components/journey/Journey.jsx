import JourneyCTA from "./JourneyCTA";
import JourneyBody from "./JourneyBody";

const Journey = () => {
    return (
        <section className="pt-32 container relative h-full" id="journey">
            <div className="">
                <JourneyCTA />
                <JourneyBody />
            </div>
        </section>
    )
}

export default Journey