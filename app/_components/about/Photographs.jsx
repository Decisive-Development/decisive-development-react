import { SwiperBlock } from "..";

const Photographs = () => {
    return (
        <section className="pt-16 pb-32">
            <div className="container h-full ">
                <h2 className="mb-16 text-center text-3xl z-30 relative">
                    I like to photograph stuff...
                </h2>
                <div className="z-30 relative select-none">
                    <SwiperBlock />
                </div>
            </div>
        </section>
    );
};

export default Photographs;
