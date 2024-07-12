import ButtonCTA from '../button/ButtonCTA';
const projectTileContent = [
    {
        id: "roger",
        src: '/photographs/rogers-roofing.jpg',
        alt: "Rogers Roofing",
        title: "Rogers Roofing",
        copy: "Roger is a a seasoned professional in the roofing and building industry with over 30 years of experience, he sought my expertise to enhance his online presence. His old website was not up to scratch and he was being let down by his previous developer. I delivered a modern, responsive website that showcased his work and services. The website covers all SEO practices and has soared to the front page in just a couple of months.",
        cta: "More Info",
        themeText: "text-theme-orange font-code font-light",
        href: "https://www.rogers-roofing.com",
        theme: "orange"
    },
    {
        id: "jordan",
        src: '/photographs/jordan-website.jpg',
        alt: "JS Martial Arts",
        title: "Jordan Squires Martial Arts",
        copy: "Jordan is a martial arts instructor based in Oxfordshire, England. He has over 15 years of experience in teaching all ages, skill levels and across multiple disciplines. He wanted a website that would showcase his services and provide a platform for people to find out more about his classes. Since launching last year Jordan has increased his number of clients tenfold, becoming the most popular MMA instructor in the area.",
        cta: "More Info",
        themeText: "text-theme-blue font-code font-light",
        href: "https://www.js-martialarts.com/",
        theme: "blue"
    },
];

const ProjectTile = () => {
    return (
        <section className="pt-16 container">
            {projectTileContent.map((service) => (
                <div 
                    className='grid grid-cols-1 lg:grid-cols-2 gap-20 w-full relative z-30 py-16'
                    key={service.id}
                >
                    <div className='rounded-[50px] overflow-hidden white-shadow h-fit m-auto'>
                        <a href={service.href} target="_blank" rel="noopener noreferrer">
                            <img
                                className="w-full hover:scale-110 duration-500 ease-in-out"
                                src={service.src}
                                alt={service.alt}
                            />
                        </a>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h4 className={`font-bold text-3xl mb-7 ${service.themeText}`}>
                            {service.title}
                        </h4>
                        <p className='mb-5'>
                            {service.copy}
                        </p>
                        <ButtonCTA
                            href={service.href}
                            theme={service.theme}
                            className=""
                            buttonText="Visit Site"
                            isExternal={true}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectTile;