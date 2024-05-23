const AboutHero = () => {
    return (
        <section className="h-screen pt-30">
            <div className="container h-full flex">
                <div className="grid grid-cols-2 gap-10 h-[800px] my-auto py-32">
                    <div className="flex flex-col justify-end">
                        <div className="z-20">
                            <p className="font-bold uppercase text-lg text-theme-purple">
                                About Me
                            </p>
                            <h1 className="text-6xl mb-10 text-theme-turquoise">
                                Hello!
                            </h1>
                            <div>
                                <p className="text-xl mb-7 text-theme-complementary">
                                    I'm Tom, a self taught website developer. My focus is to design, develop and deliver <span className="text-theme-green font-bold">beautiful</span> and <span className="text-theme-orange">functional</span> websites. My goal is to provide high quality websites that are tailored to your needs, which grow your business and help you achieve your goals. 
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-end ">
                                <p className="text-theme-blue">
                                    I work around the world...
                                </p>
                                <div className="cursor-none select-none -z-10 w-fit">
                                    <iframe  src="https://giphy.com/embed/rcSLJHmBdAMfRJ67bs" width="100" height="100" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img className="z-20 rounded-tr-[50px] rounded-bl-[50px]" src="https://placehold.co/600x400" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
