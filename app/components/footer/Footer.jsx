import Image from "next/image";
import images from "../../../public/index";
import { footerLinks, companyLinks, legalLinks } from "../../constants";

const Footer = () => {
    return (
        <footer>
            <section className="bg-theme-secondary z-30 relative mt-32 py-32">
                <span className="bg-theme-primary h-5 mt-10 w-full block absolute -top-5"></span>
                <div className="container relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full gap-10">
                        <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-1">
                            <Image
                                src={images.logoWhite}
                                alt="Decisive Development"
                                className="w-52 mb-5 max-w-full pointer-events-auto"
                            />
                            <a 
                                className="mb-2"
                                href="mailto:tom@decisive.development.com"
                            >
                                <span className="font-bold">Email:</span> tom@decisive.development.com
                            </a>
                            <a 
                                href="tel:+447708754503"
                                className="mb-5"
                            >
                                <span className="font-bold">Phone:</span> +44 (0) 77 087 545 03
                            </a>
                            <div>
                                <ul className="cursor-pointer grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 font-light pointer-events-auto">
                                    {companyLinks.map((companyLink) => (
                                        <li
                                            key={companyLink.id}
                                            className="hover:-translate-x-7 hover:text-blue transform duration-150"
                                        >
                                            <a href={`#${companyLink.id}`}>{companyLink.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-start lg:justify-center">
                            <div>
                                <h6 className="text-2xl font-bold mb-5">
                                    Services
                                </h6>
                                <ul className="cursor-pointer text-base font-light pointer-events-auto">
                                    {footerLinks.map((footerLink) => (
                                        <li
                                            key={footerLink.id}
                                            className="hover:-translate-x-7 hover:text-blue transform duration-150"
                                        >
                                            <a href={`#${footerLink.id}`}>{footerLink.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-start lg:justify-center">
                            <div>
                                <h6 className="text-2xl font-bold mb-5">
                                    Legal Notices
                                </h6>
                                <ul className="cursor-pointer text-lg pointer-events-auto">
                                    {legalLinks.map((legalLink) => (
                                        <li
                                            key={legalLink.id}
                                            className="hover:-translate-x-7 hover:text-blue transform duration-150"
                                        >
                                            <a href={`#${legalLink.id}`}>{legalLink.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="bg-theme-primary h-5 mt-10 w-full block absolute bottom-5"></span>
            </section>
            <section className="container relative">
                <div className="bg-theme-primary text-theme-complementary font-light text-center py-5">
                    <p className="mb-2">
                        © 2021 - 2024 Decisive Development Ltd. All rights reserved.                        
                    </p>
                    <p className="mb-2">
                        Global Freelance Web Design, Development, Management, Maintenance and Support.
                    </p>
                    <div>
                        {/* add nav links */}
                        Copyright. Terms. Privacy.
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;