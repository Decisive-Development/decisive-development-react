'use client';

import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import { Card } from './Card';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/_forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className='w-full lg:w-[500px] m-auto'>
            <Tilt
                className="relative z-20 bg-theme-secondary-background py-10 px-5 rounded-3xl border border-theme-orange border-opacity-30"
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#e27868"
                glarePosition="all"
                glareBorderRadius="24px"
                tiltMaxAngleX={1}
                tiltMaxAngleY={1}
            >
                <Card title="Get In Touch">
                    <form
                        name="feedback"
                        onSubmit={handleFormSubmit}
                        className="grid grid-cols-2 gap-5 "
                    >
                        <input
                            type="hidden"
                            name="form-name"
                            value="feedback"
                        />
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                            className="text-theme-primary input-placeholder p-2 bg-theme-complementary col-span-2 md:col-span-1"
                        />
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            required
                            className="text-theme-primary input-placeholder p-2 bg-theme-complementary col-span-2 md:col-span-1"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                            className="text-theme-primary input-placeholder p-2 h-40 col-span-2 bg-theme-complementary"
                            rows="4" // You can adjust the number of rows to control the initial visible height
                        >    
                        </textarea>
                        <button
                            className="bg-theme-primary text-white font-semibold py-2 px-4 border rounded transition ease-in-out duration-300 relative blue z-20 w-40 block text-center font-code uppercase tracking-wider reactive border-theme-blue ml-auto col-span-2"
                            type="submit"
                            disabled={status === 'pending'}
                        >
                            Submit
                        </button>
                        {status === 'ok' && (
                            <div className="alert alert-success">
                                <SuccessIcon />
                                Submitted!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="alert alert-error">
                                <ErrorIcon />
                                {error}
                            </div>
                        )}
                    </form>
                </Card>
            </Tilt>
        </div>
    );
}

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
function ErrorIcon(success) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}