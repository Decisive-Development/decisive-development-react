import { ColouredLine } from "..";

const ContactForm = () => {
    return (
        <section className="py-16 md:py-32 relative overflow-x-hidden" id="contact">
            <ColouredLine position="top-0" />
            <div className="container ">
                <div className="relative z-30">
                    <form 
                        name="contact" 
                        method="POST" 
                        netlify
                    >
                        <p>
                            <label>Your Name:
                                <input 
                                    type="text" 
                                    name="name" 
                                />
                            </label>
                        </p>
                        <p>
                            <label>Your Email: 
                                <input 
                                    type="email" 
                                    name="email"
                                />
                            </label>
                        </p>
                        <p>
                            <label>Message: 
                                <textarea name="message"></textarea>
                            </label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;