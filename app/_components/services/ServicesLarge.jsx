import { servicesLargeContent } from "../../_constants";

const ServicesLarge = () => {
    return (
        <section>
            {servicesLargeContent.map((service) => (
                <div className="w-full flex items-center justify-around mb-32" key={service.id}>
                    <div className="w-[450px] h-[320px] max-w-full overflow-hidden rounded-2xl relative z-10">
                        <img
                            className="object-cover w-full h-full hover:scale-110 transition-all duration-300"
                            src={service.src} alt={service.alt}
                        />
                    </div>
                    <div className="relative z-10">
                        <h2 className={`text-4xl mb-5 ${service.themeText}`}>
                            {service.title}
                        </h2>
                        <span className={`h-1 w-32 block mb-10 ${service.themeBg}`}></span>
                        <p className="text-base w-[600px] max-w-full mb-10">
                            {service.copy}
                        </p>
                        <a href="">
                            {service.cta}
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default ServicesLarge;
