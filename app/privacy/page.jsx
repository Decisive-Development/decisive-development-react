import {
    Nav,
    Footer,
    ParticlesComp
} from '../_components';
import ButtonCTA from '../_components/button/ButtonCTA';
export default function Privacy() {
    const sections = [
        {
            subtitle: "Introduction",
            description: "This privacy policy explains how Decisive Development collects, uses, and protects personal data when you visit websites developed by us. It applies to all services provided by Decisive Development."
        },
        {
            subtitle: "Types of Data Collected",
            description: "We may collect the following types of personal data:",
            subItems: [
                "Personal Identification Information: Names, email addresses, phone numbers, mailing addresses.",
                "Technical Information: IP addresses, browser types, device information.",
                "Usage Data: Pages visited, time spent on each page.",
                "Cookies and Tracking Technologies: Data collected through cookies for analytics and functionality."
            ]
        },
        {
            subtitle: "How Data is Collected",
            description: "We collect    data through the following methods:",
            subItems: [
                "Static Websites: No personal data is collected; analytics are used for traffic monitoring.",
                "Interactive Websites: Data may be collected through contact forms, registration forms, or cookies for analytics purposes.",
                "Client Communication: Users may provide personal data via email or phone contact with our clients or through social media links."
            ]
        },
        {
            subtitle: "Purposes of Data Collection",
            description: "We collect data for the following purposes:",
            subItems: [
                "Communicating with clients or users.",
                "Providing website development, maintenance, or support.",
                "Improving website functionality and user experience.",
                "Analyzing traffic and usage trends.",
                "Complying with legal obligations."
            ]
        },
        {
            subtitle: "Data Sharing",
            description: "We only share personal data with analytics services if explicitly authorized by clients or users for the purpose of improving website performance and user experience."
        },
        {
            subtitle: "Security Measures",
            description: "We implement SSL encryption for data transmission security. Code repositories, such as GitHub, are used to securely store and manage code related to website development."
        },
        {
            subtitle: "User Rights",
            description: "Users have the right to access, rectify, and delete their personal data. They may also request to restrict or object to the processing of their data and withdraw consent where applicable."
        },
        {
            subtitle: "Policy Changes",
            description: "We may update this privacy policy periodically. Changes will be communicated via email or through our website. The effective date of the current version will be noted at the top of the policy."
        }
    ];
    return (
        <main className="relative bg-theme-primary text-base">
            <Nav />
            <section className="pt-16">
                <div className='container py-32'>
                    <div className='mx-0 md:mx-32'>
                        <h1 className='font-bold text-4xl text-theme-green mb-10 underline'>
                            Privacy Policy
                        </h1>
                        {sections.map((section, index) => (
                            <div 
                                key={index} 
                                className='relative z-30 mb-10'
                            >
                                <ul>
                                    <li className='font-bold text-2xl mb-5 text-theme-purple'>
                                        {section.subtitle}
                                    </li>
                                    <p className='mb-5'>
                                        {section.description}
                                    </p>
                                    {section.subItems && (
                                        <ul>
                                            {section.subItems.map((item, itemIndex) => (
                                                <li key={itemIndex}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <ButtonCTA
                        href="/"
                        theme={'turquoise'}
                        className="m-auto"
                        buttonText="Return Home"
                    />
                </div>
            </section>
            <Footer />
            <ParticlesComp />
        </main>
    );
}

