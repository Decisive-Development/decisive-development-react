import React from "react";
import { TextLine, Dots, ColouredLine } from "..";

const AboutInfo = () => {
    return (
        <section className="bg-gradient bg-theme-primary-600 bg-opacity-25 font-code background overflow-hidden relative pt-32">
            <ColouredLine position="top-0" />
            <div className="container h-full">
                <h3 className="font-bold text-3xl relative z-30">
                    Available for hire; here's my CV:
                </h3>
               <div className="w-3/4 relative m-auto">
                    <div className="bg-theme-complementary z-20 h-3/4 top-0 bottom-0 my-auto absolute w-[1px] -left-6 "></div>
                    <div className="bg-gradient-to-b from-theme-blue-600 via-white to-theme-blue-600 z-20 h-full absolute w-[1px] -left-3 "></div>
                    <div className="py-32">
                        <TextLine>
                            <p>
                                <span className="text-purple-400">class</span>{" "}
                                <span className="text-red-500">Author</span> {"= {"}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={4} /><span className="text-red-500">constructor</span>() {"{"}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} /><span className="text-purple-400">this</span>.<span className="text-blue-400">name</span> = <span className="text-[#00ff00]">'Tom Penny'</span>;{" "}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} /><span className="text-purple-400">this</span>.<span className="text-blue-400">email</span> = <span className="text-[#00ff00]">'tom@decisive-development.com'</span>;{" "}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} /><span className="text-purple-400">this</span>.<span className="text-blue-400">phone</span> = <span className="text-[#ffd700]">+44 (0) 7708754503</span>;{" "}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} /><span className="text-purple-400">this</span>.<span className="text-blue-400">location</span> = <span className="text-[#00ff00]">'Oxfordshire, England'</span> {" "}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} /><span className="text-purple-400">this.</span><span className="text-blue-400">skills</span>{": [ "}
                            </p>
                        </TextLine>
                        <TextLine>
                            <div className="flex">
                                <Dots count={12} />
                                <p className="text-[#00ff00]">
                                    'HTML', 'CSS', 'SCSS', 'Tailwind', 'JavaScript', 'Next.js, 'React.js', 'Alpine.js', 'Laravel', 'SEO', 'Google Analytics', 'Adobe Creative Cloud', 'UX/UI', 'Wordpress', 'NPM', 'Netlify'
                                </p>
                            </div>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} />{"];"}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} /><span className="text-purple-400">this.</span><span className="text-blue-400">hobbies</span>{": [ "}
                            </p>
                        </TextLine>
                        <TextLine>
                            <div className="flex">
                                <Dots count={12} />
                                <p className="text-[#00ff00]">
                                    'Powerlifting', 'Videography', 'Painting', 'Photography', 'Camping', 'Audiobooks'
                                </p>
                            </div>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} />
                                {"];"}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} /><span className="text-purple-400">this.</span><span className="text-blue-400">interests</span>{": [ "}
                            </p>
                        </TextLine>
                        <TextLine>
                            <div className="flex">
                                <Dots count={12} />
                                <p className="text-[#00ff00]">
                                    'Audiobooks', 'Cooking', 'Meditation', 'Traveling', 'Music', 'Podcasts', 'F1', 'Technology', 'Hiking'
                                </p>
                            </div>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={8} />{"];"}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <Dots count={4} />{"}"}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                {"};"}
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                <span className="text-red-500">export default</span>{" "}
                                <a href="#">
                                    <span className="text-purple-400 err">ReturnToTop</span>
                                </a>
                                <span className="font-bold animate-pulse h-full -translate-y-1 cursor scale-125">|</span>
                            </p>
                        </TextLine>
                    </div>
               </div>
            </div>
        </section>
    );
};

export default AboutInfo;