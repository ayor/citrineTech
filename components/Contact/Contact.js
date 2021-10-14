import ContactImg from './ContactImg';
import axios from 'axios';
import ReCaptcha, { ReCAPTCHA } from 'react-google-recaptcha';
import Spinner from '../Spinner/spinner';
import ContactStyles from '../../styles/Contact.module.css';
import React, { useState, useRef } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [messageClass, setMessageClass] = useState('danger');
  const [loadingState, setLoadingState] = useState(false);

  const inputHandler = (event, type) => {
    let val = event.target.value;

    switch (type) {
      case 'name':
        setName(val);
        break;
      case 'email':
        setEmail(val);
        break;
      case 'phone':
        setPhone(val);
        break;
      case 'message':
        setMessage(val);
        break;

      default:
        break;
    }
  };
  const grepCatch = () => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_SITE_KEY, { action: 'submit' })
        .then((token) => {
          const data = {
            name,
            email,
            phone,
            message,
            captchaCode: token,
          };

          //
          // axios.post(`http://localhost:3000/api/message`,
          axios
            .post(`/api/message`, {
              ...data,
            })
            .then((response) => {
              if (response.status === 200) {
                setLoadingState(false);
                setErrorMessage('Successfully sent your message');
                setMessageClass('success');

                setTimeout(() => {
                  setErrorMessage('');
                }, 3000);
              }

              setName('');
              setEmail('');
              setMessage('');
              setPhone('');
            })
            .catch((error) => {
              console.log(error);

              const {
                response: { data },
              } = error;

              setErrorMessage(data.message);
              setMessageClass('danger');
              setLoadingState(false);
              setTimeout(() => {
                setErrorMessage('');
              }, 3000);
            });
        });
    });
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoadingState(true);

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      message.trim() === '' ||
      phone.trim() === ''
    ) {
      setLoadingState(false);
      setErrorMessage('kindly complete all fields, then try again');

      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    if (!validateEmail(email)) {
      setLoadingState(false);
      setErrorMessage('kindly enter a valid email');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }
    grepCatch();
  };

  return (
    // <section className={"p-5 " + ContactStyles.contact}>
    <section className={'p-2 bg-light border-top'}>
      <div className="container" id="contact">
        <div className="text-center p-3 m-2">
          <h2 className={' h2 font-weight-bold'}>Need some more info?</h2>
          <small className="text-secondary">Send us an e-mail!</small>
        </div>

        <div className="row ">
          <div className="col  pb-4 col-md-5">
            <form
              onSubmit={submitHandler}
              className={'text-dark ' + ContactStyles.contactForm}
            >
              {errorMessage !== '' ? (
                <div
                  className={
                    `alert alert-${messageClass} alert-dismissible show ` +
                    ContactStyles.Fade
                  }
                >
                  {errorMessage}
                </div>
              ) : null}
              <div className="form-group my-2 ">
                <input
                  value={name}
                  onChange={(ev) => inputHandler(ev, 'name')}
                  type="text"
                  className={'form-control my-2 p-2 ' + ContactStyles.input}
                  placeholder="Name"
                />
              </div>
              <div className="form-group my-2">
                <input
                  value={email}
                  onChange={(ev) => inputHandler(ev, 'email')}
                  type="email"
                  className={'form-control my-2 p-2 ' + ContactStyles.input}
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group my-2">
                <input
                  value={phone}
                  onChange={(ev) => inputHandler(ev, 'phone')}
                  type="tel"
                  className={'form-control my-2 p-2 ' + ContactStyles.input}
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group my-2">
                <textarea
                  value={message}
                  onChange={(ev) => inputHandler(ev, 'message')}
                  className={'form-control my-2 p-2 ' + ContactStyles.textarea}
                  placeholder="Enter your Message"
                  name="message"
                  id="message"
                  cols="10"
                  rows="6"
                ></textarea>
              </div>
              <div className="d-flex mb-3 justify-content-center">
                {/* <ReCaptcha size="normal"
                                    sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                                    onChange={captchaHanlder} ref={captchaRef}
                                /> */}
                {/* */}
              </div>

              <button
                type="submit"
                className={
                  'btn btn-block p-2 font-weight-bold text-uppercase  ' +
                  ContactStyles.submitButton
                }
              >
                {loadingState ? <Spinner /> : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="col-md-7 my-3 ">
            <ContactImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
