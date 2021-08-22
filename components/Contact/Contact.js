import { server } from "../../config/config";
import axios from 'axios';
import ReCaptcha, { ReCAPTCHA } from "react-google-recaptcha";
import Spinner from '../Spinner/spinner';
import ContactStyles from '../../styles/Contact.module.css';
import React, { useState, useRef } from "react";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [messageClass, setMessageClass] = useState("danger");
    const [loadingState, setLoadingState] = useState(false);

    const captchaRef = useRef();


    const inputHandler = (event, type) => {
        let val = event.target.value;

        switch (type) {
            case "name":
                setName(val);
                break;
            case "email":
                setEmail(val);
                break;
            case "phone":
                setPhone(val);
                break;
            case "message":
                setMessage(val);
                break;

            default:
                break;
        }
    };

    const btnHandler = (event) => {
        event.preventDefault();
        const captchaValue = captchaRef.current.getValue();
        console.log(captchaValue);
        if (name.trim() === "" || email.trim() === "" || message.trim() === "" || phone.trim() === "") {
            setLoadingState(false);
            setErrorMessage("kindly complete all fields, then try again");

            setTimeout(() => {
                setErrorMessage("");
                
            }, 3000)
            return;
        }
        captchaRef.current.executeAysnc();
    }

    const captchaHanlder = async (captchaCode) => {
        try {

            console.log(captchaCode)
            if (!captchaCode) {
                return;
            }
            const data = {
                name,
                email,
                phone,
                message, 
                captchaCode
            }
            //
            // let response = await axios.post(`http://localhost:3000/api/message`,
                let response = await axios.post(`/api/message`,
                {
                    ...data
                }
            );



            if (response.status === 200) {
                setLoadingState(false);
                setErrorMessage("Successfully sent your message");
                setMessageClass("success")

                setTimeout(() => {
                    setErrorMessage("");
                }, 3000)

            }

            setName("");
            setEmail("");
            setMessage("");
            captchaRef.current.reset();
        } catch (error) {

            console.log(error)

            const { response: { data } } = error;

            setErrorMessage(data.message);
            setMessageClass("danger");
            setLoadingState(false)
            setTimeout(() => {
                setErrorMessage("");
            }, 3000)
        }
    }

    return (
        <section className={"p-5 " + ContactStyles.contact}>
            <div className="container-fluid" id="contact">
                <div className="row ">
                    <div className="col  pb-4">
                        <h2 className="display-4 text-center mb-5 text-warning">Get In Touch</h2>


                        <form onSubmit={btnHandler} className={"text-dark " + ContactStyles.contactForm}>
                            {errorMessage !== "" ? <div className={`alert alert-${messageClass} alert-dismissible show ` + ContactStyles.Fade}>{errorMessage}</div> : null}
                            <div className="form-group my-2 py-4">
                                <input value={name} onChange={(ev) => inputHandler(ev, "name")} type="text" className={"form-control my-2 p-2 " + ContactStyles.input} placeholder="Name" />
                                <label htmlFor="name" className="label">Name</label>
                            </div>
                            <div className="form-group my-2 py-4">
                                <input value={email} onChange={(ev) => inputHandler(ev, "email")} type="email" className={"form-control my-2 p-2 " + ContactStyles.input} placeholder="Email Address" />
                                <label htmlFor="email" className="label">Email Address</label>
                            </div>
                            <div className="form-group my-2 py-4">
                                <input value={phone} onChange={(ev) => inputHandler(ev, "phone")} type="tel" className={"form-control my-2 p-2 " + ContactStyles.input} placeholder="Phone Number" />
                                <label htmlFor="phone" className="label">Phone Number </label>
                            </div>
                            <div className="form-group my-2 py-4">
                                <textarea value={message} onChange={(ev) => inputHandler(ev, "message")} className={"form-control my-2 p-2 " + ContactStyles.textarea} placeholder="Enter your Message"
                                    name="message" id="message" cols="10" rows="6">
                                </textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                            <ReCaptcha size="compact"
                                    sitekey={process.env.NEXT_PUBLIC_SITE_KEY} 
                                    onChange={captchaHanlder} ref={captchaRef} 
                                     />
{/* */}
                            </div>
                               
                            <button type="submit"
                                className={"btn btn-block p-2 font-weight-bold text-uppercase " + ContactStyles.submitButton}> {loadingState ? <Spinner /> : "Send Message"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;





