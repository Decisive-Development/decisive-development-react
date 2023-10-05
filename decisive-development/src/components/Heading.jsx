const Heading = () => {

  return (
    <div className="relative z-20">
        <p className="text-2xl mb-5 font-light">TOM PENNY</p>
        <h1 className="text-7xl mb-5 font-medium flex h-20">
            Website <span className="typed"></span>
        </h1>
        <div id="particles-js" />
        <p className="w-[700px] mb-5 text-lg">
            Enabling individuals and small businesses to thrive online.
            Enhancing your digital presence, helping you reach more people and
            achieve greater revenue. My services include bespoke design,
            reliable development, effective SEO, and valuable advice.
        </p>
        <a href="projects" className="link-hover border-b-2 border-blue">
            SEE PROJECTS
        </a>
    </div>
  )
}

export default Heading