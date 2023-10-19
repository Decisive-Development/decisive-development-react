import { projectTileContent } from "../../constants";
// import { useState } from "react";

const ProjectTile = () => {
    // const [isHiddenVisible, setHiddenVisible] = useState(new Array(projectTileContent.length).fill(false));
    // const [timeoutId, setTimeoutId] = useState(null);

    // const showElement = (index) => {
    //     if (timeoutId) {
    //         clearTimeout(timeoutId);
    //     }

    //     const newVisibility = new Array(projectTileContent.length).fill(false);
    //     newVisibility[index] = true;
    //     setHiddenVisible(newVisibility);
    // };

    // const hideElementWithDelay = (index) => {
    //     const newTimeoutId = setTimeout(() => {
    //         const newVisibility = [...isHiddenVisible];
    //         newVisibility[index] = false;
    //         setHiddenVisible(newVisibility);
    //     }, 2000);

    //     setTimeoutId(newTimeoutId);
    // };

    return (
        <section className="py-32">
            {/* {projectTileContent.map((service, index) => (
                <div 
                    className="w-full flex items-center mb-32 relative" 
                    key={service.id}
                    onMouseEnter={() => showElement(index)}
                    onMouseLeave={() => hideElementWithDelay(index)}
                >
                    <div className="w-[700px] h-[394px] max-w-full overflow-hidden rounded-2xl relative z-10 mr-20">
                        <img
                            className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 opacity-70"
                            src={service.src} 
                            alt={service.alt}
                        />
                    </div>                    
                    <div
                        className={`${
                            isHiddenVisible[index] ? 'opacity-100' : 'opacity-0'
                        } 
                            z-20 transition-opacity duration-300 `}
                        id={`hidden-${index}`}
                    >
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
            ))} */}
        </section>
    );
}

export default ProjectTile;
