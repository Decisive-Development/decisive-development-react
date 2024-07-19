import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
    title: 'Decisive Development',
    description: 'Offering ground up, hand-coded websites with bespoke design and development. HTML Emails, Project Support, SEO services and more.',
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
