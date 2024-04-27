"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComp = () => {
    const [init, setInit] = useState(false);
    const shouldRender = typeof window !== 'undefined' ? window.innerWidth > 768 : false;

    useEffect(() => {
        if (shouldRender) {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
            });
        }
    }, [shouldRender]);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    const options = useMemo(
        () => ({
            fullScreen: {
                enable: false,
                zIndex: 0
            },
            particles: {
                number: {
                    density: {
                        enable: false,
                        area: 1000,
                    },
                    limit: 0,
                    value: 80,
                },
                color: {
                    value: "#CFD4D7",
                    animation: {
                        enable: true,
                        speed: 20,
                        sync: true,
                    },
                },
                shape: {
                    type: "edge",
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 1,
                        speed: 1,
                        sync: false,
                    },
                    random: false,
                    value: 1,
                },
                size: {
                    animation: {
                        enable: false,
                        minimumValue: 0.1,
                        speed: 40,
                        sync: false,
                    },
                    random: true,
                    value: 3,
                },
                lineLinked: {
                    blink: false,
                    color: "#ffffff",
                    consent: false,
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 1,
                },
                move: {
                    attract: {
                        enable: false,
                        rotate: {
                            x: 600,
                            y: 1200,
                        },
                    },
                    bounce: false,
                    direction: "none",
                    enable: true,
                    outMode: "out",
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
            },
            polygon: {
                draw: {
                    enable: true,
                    lineColor: "rgba(255,255,255,0.2)",
                    lineWidth: 0.3,
                },
                move: {
                    radius: 10,
                },
                inlineArrangement: "equidistant",
                scale: 0.5,
                type: "inline",
                url: "https://particles.js.org/images/smalldeer.svg",
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 1,
                        size: 40,
                    },
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    push: {
                        quantity: 4,
                    },
                    remove: {
                        quantity: 2,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default ParticlesComp;