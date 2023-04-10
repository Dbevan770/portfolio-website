import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_SERVICE_KEY as string;
const templateId = import.meta.env.VITE_TEMPLATE_KEY as string;
const publicKey = import.meta.env.VITE_PUBLIC_KEY as string;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");
  const [sentEmail, setSentEmail] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sentEmail) return;
    setIsLoading(true);
    setSentEmail(true);
    if (form.current) {
      try {
        const response = await emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          publicKey
        );
        setSuccess(true);
      } catch (err) {
        setErrMsg("Something went wrong, please try again later");
        setSentEmail(false);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-sidebar">
            <h1 className="contact-sidebar-title">Get in touch</h1>
            <span className="contact-sidebar-subtitle">
              Send me a message using this contact form or reach out to me via
              the platforms below!
            </span>
            <div className="contact-links">
              <div className="contact-link">
                <img src="/icons/icons8-gmail-24.png" />{" "}
                <p className="link-text">daniel.j.bevan96@gmail.com</p>
              </div>
              <div className="contact-link">
                <img src="/icons/icons8-linkedin-24.png" />{" "}
                <p className="link-text">linkedin.com/in/daniel-j-bevan/</p>
              </div>
              <div className="contact-link">
                <img src="/icons/icons8-github-24.png" />
                <p className="link-text">github.com/Dbevan770</p>
              </div>
            </div>
          </div>
          {success ? (
            <div className="form-success-container">
              <img className="success-img" src="/images/email_icon.PNG" />
              <h1 className="success-title">Thanks!</h1>
              <p className="success-subtitle">
                Your e-mail has been sent. I will get back to you as soon as I
                can!
              </p>
            </div>
          ) : (
            <div className="contact-form-container">
              {isLoading && (
                <div className="loading-overlay">
                  <div className="loading-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
              <div className="form-container">
                {errMsg !== "" && <span>{errMsg}</span>}
                <h2 className="form-title">Contact Form</h2>
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="form-item">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      name="first-name"
                      id="first-name"
                      type="text"
                      className="form-input"
                      placeholder="eg. John/Jane"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      name="last-name"
                      id="last-name"
                      type="text"
                      required
                      className="form-input"
                      placeholder="eg. Smith"
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="email">E-Mail</label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="eg. yourname@gmail.com"
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      className="form-input"
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <button type="submit" className="form-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
