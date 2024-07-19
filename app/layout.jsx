import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
    title: 'Decisive Development',
    description: 'Offering ground up, hand-coded websites with bespoke design and development. HTML Emails, Project Support, SEO services and more.',
    keywords: [
            'web development',
            'SEO',
            'HTML emails',
            'project support',
            'bespoke design',
            'hand-coded websites',
            'UX',
            'UI'
        ],
    author: 'Tom Penny, Decisive Development',
    language: 'en-US',
    url: 'https://www.decisive-development.com',
    category: 'Web Development',
    tags: [
        'custom websites', 
        'SEO optimization', 
        'support', 
        'bespoke design services', 
        'hand-coded solutions', 
        'UX design', 
        'UI development', 
        'HTML email design', 
        'project management support', 
        'user experience optimization', 
        'user interface design', 
        'web development services'
    ]
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-4F8JF72NNQ" />
            <body className='bg-theme-primary'>
                {children}
            </body>
        </html>
    )
}