import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

const tiers = [
    {
        name: 'Basic',
        id: 'tier-basic',
        href: '#',
        priceMonthly: '£50',
        description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
        mostPopular: false,
    },
    {
        name: 'Standard',
        id: 'tier-standard',
        href: '#',
        priceMonthly: '£100',
        description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
        mostPopular: true,
    },
    {
        name: 'Premium',
        id: 'tier-premium',
        href: '#',
        priceMonthly: '£150',
        description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
        mostPopular: false,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '£200+',
        description: 'Providing advanced features and support for your enterprise needs.',
        mostPopular: false,
    },
];

const sections = [
    {
        name: 'Features',
        features: [
            { name: 'Total Pages', tiers: { Basic: '1 Page', Standard: '3 Pages', Premium: '5 Pages', Enterprise: '5 + Pages' } },
            { name: 'Bespoke Design', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Custom Code', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Mobile Responsive', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Search Engine Optimisation (SEO)', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Animations', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Bespoke Animations', tiers: { Basic: false, Standard: false, Premium: true, Enterprise: true } },
            { name: 'Site Hosting', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Domain Hosting', tiers: { Basic: false, Standard: false, Premium: false, Enterprise: true } },
            { name: 'Custom Applications', tiers: { Basic: false, Standard: false, Premium: false, Enterprise: true } },
            { name: 'Copywriting', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Google Analytics', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'SSL Certificate', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
        ],
    },
    {
        name: 'Design',
        features: [
            { name: 'Wireframe', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'XD Prototype', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Colour Scheme', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Typography', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Media (Photo / Video)', tiers: { Basic: false, Standard: false, Premium: true, Enterprise: true } },
            { name: 'Logo Design', tiers: { Basic: false, Standard: false, Premium: true, Enterprise: true } },
            { name: 'Full Brand Suite', tiers: { Basic: false, Standard: false, Premium: false, Enterprise: true } },
        ],
    },
    {
        name: 'Support',
        features: [
            { name: '24/7 Online Support', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Unlimited Small Edits', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } },
            { name: 'Quarterly Analytical Reports', tiers: { Basic: true, Standard: true, Premium: true, Enterprise: true } }
        ],
    },
    {
        name: 'Optionals',
        features: [
            { name: 'HTML Emails', tiers: { Basic: false, Standard: false, Premium: false, Enterprise: '1 Per Month' } },
            { name: 'Social Media Marketing', tiers: { Basic: false, Standard: false, Premium: false, Enterprise: false } },
            { name: 'CMS Integration', tiers: { Basic: false, Standard: false, Premium: false, Enterprise: false } },
            { name: 'Bespoke Photos / Videos', tiers: { Basic: false, Standard: false, Premium: false, Enterprise: true } }
        ],
    },
];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    return (
        <div className="bg-theme-secondary bg-opacity-10 py-24 sm:py-64 ">
            <div className="mx-auto container px-6 lg:px-8 relative z-30">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-theme-purple">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Plans for all projects
                    </p>
                </div>
                <p className="mx-auto mt-6 text-center text-lg leading-8 text-gray-300">
                    Our foundational pricing plans are designed for flexibility and transparency, accommodating any special requirements your project might have—from advanced applications and complex animations to additional content. We ensure every enhancement is clearly communicated, aligning our services with your unique vision and budget, guaranteeing no surprises.
                </p>

                {/* xs to lg */}
                <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
                    {tiers.map((tier) => (
                        <section
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'rounded-xl bg-white/5 ring-1 ring-inset ring-white/10' : '',
                                'p-8'
                            )}
                        >
                            <h3 id={tier.id} className="text-sm font-semibold leading-6 text-white">
                                {tier.name}
                            </h3>
                            <p className="mt-2 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold text-white">{tier.priceMonthly}</span>
                                <span className="text-sm font-semibold text-gray-300">/month</span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-theme-purple text-white hover:bg-theme-purple focus-visible:outline-theme-purple'
                                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                                    'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                )}
                            >
                                Buy plan
                            </a>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-white">
                                {sections.map((section) => (
                                    <li key={section.name}>
                                        <ul role="list" className="space-y-4">
                                            {section.features.map((feature) =>
                                                feature.tiers[tier.name] ? (
                                                    <li key={feature.name} className="flex gap-x-3">
                                                        <CheckIcon className="h-6 w-5 flex-none text-theme-purple" aria-hidden="true" />
                                                        <span>
                                                            {feature.name}{' '}
                                                            {typeof feature.tiers[tier.name] === 'string' ? (
                                                                <span className="text-sm leading-6 text-gray-400">({feature.tiers[tier.name]})</span>
                                                            ) : null}
                                                        </span>
                                                    </li>
                                                ) : null
                                            )}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                {/* lg+ */}
                <div className="isolate mt-20 hidden lg:block">
                    <div className="relative -mx-8">
                        {tiers.some((tier) => tier.mostPopular) ? (
                            <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                                <div
                                    className="flex w-1/5 px-4"
                                    aria-hidden="true"
                                    style={{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 20}%` }}
                                >
                                    <div className="w-full rounded-t-xl border-x border-t border-theme-complementary/10 bg-theme-complementary/5" />
                                </div>
                            </div>
                        ) : null}
                        <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                            <caption className="sr-only">Pricing plan comparison</caption>
                            <colgroup>
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <td />
                                    {tiers.map((tier) => (
                                        <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                                            <div className="text-sm font-semibold leading-7 text-th">{tier.name}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <span className="sr-only">Price</span>
                                    </th>
                                    {tiers.map((tier) => (
                                        <td key={tier.id} className="px-6 pt-2 xl:px-8">
                                            <div className="flex items-baseline gap-x-1 text-theme-neutral">
                                                <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                                                <span className="text-sm font-semibold leading-6">/month</span>
                                            </div>
                                            <a
                                                href={tier.href}
                                                className={classNames(
                                                    tier.mostPopular
                                                        ? 'bg-theme-purple hover:bg-indigo-400 focus-visible:outline-indigo-600'
                                                        : 'bg-theme-complementary/10 hover:bg-white/20 focus-visible:outline-white',
                                                    'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-theme-neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                                )}
                                            >
                                                Buy plan
                                            </a>
                                        </td>
                                    ))}
                                </tr>
                                {sections.map((section, sectionIdx) => (
                                    <Fragment key={section.name}>
                                        <tr>
                                            <th
                                                scope="colgroup"
                                                colSpan={5}
                                                className={classNames(
                                                    sectionIdx === 0 ? 'pt-8' : 'pt-16',
                                                    'pb-4 text-sm font-semibold leading-6 text-theme-purple'
                                                )}
                                            >
                                                {section.name}
                                                <div className="absolute inset-x-8 mt-4 h-px bg-theme-complementary/10" />
                                            </th>
                                        </tr>
                                        {section.features.map((feature) => (
                                            <tr key={feature.name}>
                                                <th scope="row" className="py-2 text-sm font-normal leading-6 text-theme-neutral">
                                                    {feature.name}
                                                    <div className="absolute inset-x-8 mt-2 h-px bg-theme-complementary/5" />
                                                </th>
                                                {tiers.map((tier) => (
                                                    <td key={tier.id} className="px-6 py-2 xl:px-8">
                                                        {typeof feature.tiers[tier.name] === 'string' ? (
                                                            <div className="text-center text-sm leading-6 text-theme-complementary">
                                                                {feature.tiers[tier.name]}
                                                            </div>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckIcon className="mx-auto h-5 w-5 text-theme-blue" aria-hidden="true" />
                                                                ) : (
                                                                    <MinusIcon className="mx-auto h-5 w-5 text-theme-red" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">
                                                                    {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                                                </span>
                                                            </>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
