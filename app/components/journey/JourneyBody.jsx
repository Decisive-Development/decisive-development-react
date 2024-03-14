const JourneyBody = () => {
    return (
        <section>
            <div className="grid grid-cols-12 h-full">
                <div className="col-span-3 h-full relative py-32 pr-14 text-right">
                    <h3 className="mb-5 relative z-20">
                        Your website reflects your business. Make a lasting impression.
                    </h3>
                    <a href="/contact" className="bg-theme-primary hover:bg-theme-red text-white hover:text-theme-primary font-semibold py-2 px-4 border border-theme-red hover:border-transparent rounded transition ease-in-out duration-300 relative z-20">
                       Get Started
                    </a>
                    <div className="bg-gradient-to-b from-transparent via-theme-red to-transparent h-full absolute w-[2px] right-0 top-0"></div>
                </div>
                <div className="col-span-9 w-full ml-20 py-32">
                    <div className="relative z-20">
                        <h3 className="font-bold text-3xl text-theme-red mb-3">
                            Why Choose Decisive Development
                        </h3>
                        <h4 className="font-medium text-xl mb-10">
                            Escape the Ordinary, Embrace the Exceptional
                        </h4>
                        <p className="mb-5">
                            The Problem with Website Builder Platforms:
                        </p>
                        <ul className="list-disc list-outside w-[700px]">
                            <li className="mb-5 ml-5">
                                <span className="font-bold">Not Custom-Designed:</span> Rely on templates and your website might just disappear into the crowd, missing the chance to highlight what makes your brand special.
                            </li>
                            <li className="mb-5 ml-5">
                                <span className="font-bold">Poor Google Rankings & SEO:</span> Lacking control over SEO details like speed and metadata can leave your site lagging behind in search results.
                            </li>
                            <li className="mb-5 ml-5">
                                <span className="font-bold">Lack of Customer Support:</span> With builder platforms, you're often on your own, without the dedicated support to guide you through issues or updates.
                            </li>
                            <li className="mb-5 ml-5">
                                <span className="font-bold">Limited Mobile Experience:</span> Even with 'responsive' designs, many builders fall short in truly optimising for mobile, a critical flaw in today's smartphone-centric world.
                            </li>
                            <li className="mb-5 ml-5">
                                <span className="font-bold">Price:</span> While website builders might seem cost-effective at first glance, fee's for add-ons, plugins, features and support can quickly add up. Not to mention the cost of your time.
                            </li>
                        </ul>
                        <p>
                            Your investment in a custom website is an investment in your business.
                        </p>
                    </div>
                </div>	
            </div>	
            <div className="grid grid-cols-12 h-full ">
                <div className="col-span-3 h-full py-32 pr-14 text-right relative">
                    <h3 className="relative z-20">
                        Partner with us.
                    </h3>
                    <h3 className="mb-5 relative z-20">
                        Your growth is our business.
                    </h3>
                    <a href="/contact" className="bg-theme-primary hover:bg-theme-blue text-white hover:text-theme-primary font-semibold py-2 px-4 border border-theme-blue hover:border-transparent rounded transition ease-in-out duration-300 relative z-20">
                       Get Started
                    </a>
                    <div className="bg-gradient-to-b from-transparent via-theme-blue to-transparent h-full absolute w-[2px] right-0 top-0"></div>
                </div>
                <div className="col-span-9 w-full ml-20 py-32">
                    <div className="relative z-20">
                        <h3 className="font-bold text-3xl text-theme-blue mb-3">
                            Our Process
                        </h3>
                        <h4 className="font-medium text-xl mb-10">
                            Understanding Your Vision
                        </h4>
                        <p className="mb-5">
                            We begin every project with a deep dive into your world. We want to understand every facet of your business, brand, and goals to ensure the website we create resonates with your identity and ambitions. This initial phase involves detailed discussions to capture your vision, preferences, and expectations, ensuring our design aligns perfectly with your business strategy.
                        </p>
                        <ul className="list-disc list-outside w-[700px]">
                            <li className="mb-5 ml-5">
                                <span className="font-bold">Tailored Proposal</span> 
                            </li>
                            <li className="mb-5 ml-5">
                                <span className="font-bold">Design and Development</span> 
                            </li>
                            <li className="mb-5 ml-5">
                                <span className="font-bold">Review and Launch</span> 
                            </li>
                            <li className="mb-5 ml-5">
                                <span className="font-bold">Ongoing Support</span> 
                            </li>
                        </ul>
                        <p>
                            Your investment in a custom website is an investment in your business.
                        </p>
                    </div>
                </div>	
            </div>	

        </section>
    );
};

export default JourneyBody;