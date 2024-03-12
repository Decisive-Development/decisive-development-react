import { servicesSmallContent } from "../../constants";

const ServicesSmall = () => {
    return (
        <section>
            {servicesSmallContent.map((service) => (
                <div className="relative z-10 mb-16" key={service.id}>
                    <h2 className={`text-4xl mb-5 ${service.themeText}`}>
                        {service.title}
                    </h2>
                    <span className={`h-1 w-32 block mb-10 ${service.themeBg}`}></span>
                    <div className="grid grid-cols-12 w-full">
                        <div className="col-span-6">
                            <h3 className="font-bold mb-5 text-xl">
                                {service.subTitle}
                            </h3>
                            <p className="text-base w-[600px] max-w-full mb-10">
                                {service.copy}
                            </p>
                            <p className="text-base w-[600px] max-w-full mb-10">
                                {service.subCopy}
                            </p>
                        </div>
                        <div className="col-span-3 justify-self-end">
                            {service.listOne && (
                                <>
                                    <h3 className="font-bold mb-5 text-xl">
                                        {service.listOne.listTitle}
                                    </h3>
                                    <ul className="list-disc list-inside">
                                        {service.listOne.listItems.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        <div className="col-span-3 justify-self-end">
                            {service.listTwo && (
                                <>
                                    <h3 className="font-bold mb-5 text-xl">
                                        {service.listTwo.listTitle}
                                    </h3>
                                    <ul className="list-disc list-inside">
                                        {service.listTwo.listItems.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ServicesSmall;