

const AboutHero = () => {
    return (
        <section className="h-screen pt-30">
            <div className="container h-full flex">
                <div className="grid grid-cols-2 gap-10 h-full py-32">
                    <div className="flex flex-col justify-end z-20">
                        <h1 className="text-6xl mb-10">
                            Hello!
                        </h1>
                        <div>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aut dolores blanditiis quod dolorem quam hic similique officiis. Aliquam magni temporibus cumque tempora dolorum reiciendis excepturi, veritatis libero voluptatem. Consectetur?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aspernatur nesciunt. Sunt sit corrupti dolores.
                            </p>
                        </div>
                    </div>
                    <div className="z-20">
                        <img src="https://placehold.co/600x400" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
