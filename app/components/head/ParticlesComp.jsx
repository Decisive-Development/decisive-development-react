"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComp = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0
                },
                particles: {
                    number: {
                        density: {
                            enable: false,
                            area: 2000,
                        },
                        limit: 0,
                        value: 100,
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
                            minimumValue: 0.3,
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
                        opacity: 0.3,
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
                            opacity: 0.8,
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
            }}
        />
    );
};
export default ParticlesComp;
