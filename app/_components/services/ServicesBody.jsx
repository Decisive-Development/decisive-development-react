
import emailIcon from "../../../public/icons/email-icon.png";
import hostingIcon from "../../../public/icons/hosting-icon.png";
import marketingIcon from "../../../public/icons/marketing-icon.png";
import projectIcon from "../../../public/icons/project-icon.png";
import seoIcon from "../../../public/icons/seo-icon.png";
import websiteIcon from "../../../public/icons/website-icon.png";
import { ColouredLine, ServiceTile } from "..";

const ServicesBody = () => {
    return (
        <section className="bg-theme-secondary bg-opacity-25 pb-16 pt-32 md:py-32 relative overflow-x-hidden">
            <ColouredLine position="top-0" />
            <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-0 md:gap-10 xl:gap-20">
                <ServiceTile
                    image={websiteIcon}
                    glareColor={"#52BBF6"}
                    title="Bespoke Websites"
                    description="If you’re looking for a premium, bespoke and effective website I can take your project from concept through to delivery and beyond. I’ll work with you to make sure you get fantastic results at every step and help you with ongoing support as needed."
                    colour={"text-theme-blue"}
                    theme={"blue"}
                    modalOne="If you’re after a premium, bespoke, and effective website, I can take your project from concept through to delivery and beyond. I’ll work with you to ensure you get fantastic results at every step, and provide ongoing support as needed."
                    modalTwo="From the initial design to development, SEO, and hosting, I've got you covered. I’ll create a website that’s tailored to your brand and goals, making sure it not only looks stunning but also performs brilliantly. I understand the importance of SEO, so I’ll optimise your site to help you rank higher in search results and attract more visitors."
                    modalThree="Once your site is live, I’ll be here to help with any tweaks or updates you might need, ensuring it stays fresh and relevant. Whether you need a brand-new website or a revamp of your existing one, I’m here to bring your vision to life."
                />
                <ServiceTile
                    image={emailIcon}
                    glareColor={"#B9FF33"}
                    title="HTML Emails"
                    description="Email marketing is a powerful tool for any business. I can help you create beautiful, responsive HTML emails that will engage your audience and drive conversions into customers. I can also help you with email automation and analytics to make sure you're getting the best results."
                    colour={"text-theme-green"}
                    theme={"green"}
                    modalOne="Getting HTML marketing emails right can be quite tricky. The technical limitations mean you need a completely different approach compared to standard web development. Luckily, I’ve been designing and building HTML emails for years, so I can offer the experience you need to make your digital marketing work. "
                    modalTwo="I know all the ins and outs of crafting emails that not only look great but also work well across different email clients and devices. From responsive designs to detailed coding, I’ve got the skills to create emails that grab your audience’s attention and get results."
                    modalThree="Whether you’re after a one-off campaign or a full email marketing strategy, I’m here to help you boost your brand’s online presence and achieve your marketing goals. Let’s team up to turn your ideas into effective, high-performing HTML emails."
                />
                <ServiceTile
                    image={projectIcon}
                    glareColor={"#FF8400"}
                    title="Project Support"
                    description="Perhaps you already have a website, or a project in progress, but you need some extra help. I can provide support for your project, whether it's a one-off task or ongoing support. I can help with anything from website updates to project support."
                    colour={"text-theme-orange"}
                    theme={"orange"}
                    modalOne="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalTwo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ServiceTile
                    image={hostingIcon}
                    glareColor={"#E46EED"}
                    title="Hosting & Maintenance"
                    description="If you need hosting for your website, I can help you find the right solution for your needs. I can also provide ongoing maintenance and support for your website to make sure it's always up-to-date and running smoothly."
                    colour={"text-theme-purple"}
                    theme={"purple"}
                    modalOne="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalTwo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ServiceTile
                    image={seoIcon}
                    glareColor={"#48EDE8"}
                    title="SEO & Analytics"
                    description="I can help you improve your website's search engine ranking and drive more traffic to your site. I can help you with keyword research, on-page SEO, and analytics to make sure you're getting the best results from your website."
                    colour={"text-theme-turquoise"}
                    theme={"turquoise"}
                    modalOne="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalTwo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ServiceTile
                    image={marketingIcon}
                    glareColor={"#FF4848"}
                    title="Landing Pages"
                    description="If you're running a marketing campaign, you need a landing page that converts leads into sales. I can help you create beautiful, responsive landing pages that will engage your audience and drive conversions. "
                    colour={"text-theme-red"}
                    theme={"red"}
                    modalOne="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalTwo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </section>
    );
};

export default ServicesBody;
//  explain website build services
//  lump sum option
//  project based contract work
//  HTML emails / landing pages
//  Show CWV scores
//  Show analytics screenshots
