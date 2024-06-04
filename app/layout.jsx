import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
    title: 'Decisive Development',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-4F8JF72NNQ" />
            <body className='bg-theme-primary'>
                {children}
            </body>
            <div>
                <h2>Contact us!</h2>
                <form name="contact" method="post" netlify>
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </html>
    )
}
