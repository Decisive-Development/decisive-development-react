const injectParticles = async () => {
  if (document.querySelector("#particle-js")) return;
  console.log("running");
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
  document.body.appendChild(script);
  script.onload = function () {
    particlesJS.load("particles-js", "/particles.json", function () {
      console.log("callback - particles.js config loaded");
    });
  };
};

export default injectParticles;
