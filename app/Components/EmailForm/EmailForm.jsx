"use client";
import emailSub from "@/lib/emailSub";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const EmailForm = () => {
  const [state, handleSubmit] = useForm("xgvwwpby");

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="youremail@gmail.com"
      />
      <textarea
        id="message"
        name="message"
        hidden
        value={"Email for Cyber Code Hub Newsletter!"}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Go!
      </button>
      
    </form>
  );
};
export default EmailForm;
