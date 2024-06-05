import Link from 'next/link';

export function Card({ title, text, linkText, href, children }) {
    return (
        <div className="">
            {title && <h3 className="font-bold text-3xl text-theme-orange mb-5 ">{title}</h3>}
            {text && <p>{text}</p>}
            {linkText && href && (
                <div className="">
                    <Link href={href} className="transition link text-theme-primary">
                        {linkText}
                    </Link>
                </div>
            )}
            {children}
        </div>
    );
}