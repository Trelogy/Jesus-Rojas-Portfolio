import React from "react";
import useInput from "../../hooks/use-input";
import { FormattedMessage, useIntl } from "react-intl";
import emailjs from 'emailjs-com';

import "./AddMessage.css";
import Button from "../UI/Button";

const AddMessage = () => {
  const intl = useIntl();
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) =>
    value.trim() !== "" && value.includes("@") && value.includes(".com");

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangedHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredSubjectIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const serviceID = process.env.REACT_APP_SERVICE_ID
  const templateID = process.env.REACT_APP_TEMPLATE_ID
  const publicKEY = process.env.REACT_APP_PUBLIC_KEY

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    emailjs.sendForm(serviceID,templateID,event.target,publicKEY).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();
  };

  const nameInputClasses = nameInputHasError ? "inputs invalid" : "inputs";

  const emailInputClasses = emailInputHasError ? "inputs invalid" : "inputs";

  const subjectInputClasses = subjectInputHasError
    ? "inputs invalid"
    : "inputs";

  const messageInputClasses = messageInputHasError
    ? "textareas invalid"
    : "textareas";

  let errM = [
    <p className="error-text">
      <FormattedMessage
        id="contact.nameInvalid"
        defaultMessage="Valid name is required."
      />
    </p>,
    <p className="error-text">
      <FormattedMessage
        id="contact.emailInvalid"
        defaultMessage="Please enter a valid email address."
      />
    </p>,
    <p className="error-text">
      <FormattedMessage
        id="contact.subjectInvalid"
        defaultMessage="Your subject is required."
      />
    </p>,
    <p className="error-text">
      <FormattedMessage
        id="contact.messageInvalid"
        defaultMessage="Your message is required."
      />
    </p>,
  ];

  return (
    <form onSubmit={formSubmitHandler} className="col-lg-5 mx-auto py-5">
      <div className="row g-3">
        <div className="col-sm-6">
          <div className={nameInputClasses}>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder={intl.formatMessage({
                id: "contact.inputName",
                defaultMessage: "Name",
                description: "placeholder text",
              })}
              value={enteredName}
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
            />
            {enteredName && (
              <button className="btn erase-btn" onClick={resetNameInput}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
          {nameInputHasError && errM[0]}
        </div>

        <div className="col-sm-6">
          <div className={emailInputClasses}>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder={intl.formatMessage({
                id: "contact.inputEmail",
                defaultMessage: "Email",
                description: "placeholder text",
              })}
              value={enteredEmail}
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
            />
            {enteredEmail && (
              <button className="btn erase-btn" onClick={resetEmailInput}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
          {emailInputHasError && errM[1]}
        </div>

        <div className="col-12">
          <div className={subjectInputClasses}>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              placeholder={intl.formatMessage({
                id: "contact.inputSubject",
                defaultMessage: "Subject",
                description: "placeholder text",
              })}
              value={enteredSubject}
              onChange={subjectChangedHandler}
              onBlur={subjectBlurHandler}
            />
            {enteredSubject && (
              <button className="btn erase-btn" onClick={resetSubjectInput}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
          {subjectInputHasError && errM[2]}
        </div>

        <div className="col-12">
          <div className={messageInputClasses}>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              placeholder={intl.formatMessage({
                id: "contact.inputMessage",
                defaultMessage: "Message",
                description: "placeholder text",
              })}
              value={enteredMessage}
              onChange={messageChangedHandler}
              onBlur={messageBlurHandler}
            ></textarea>
            {enteredMessage && (
              <button className="btn erase-btn" onClick={resetMessageInput}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
          {messageInputHasError && errM[3]}
        </div>
        <div className="pt-3">
          <Button className="btn btn-primary btn-lg" type="submit" disabled={!formIsValid}>
            <FormattedMessage id="contact.btn" defaultMessage="Send message" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddMessage;
