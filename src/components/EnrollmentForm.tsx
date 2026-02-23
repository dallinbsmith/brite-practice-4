import { useState } from "react";
import { FormConfig } from "../data";

type EnrollmentFormProps = {
  config: FormConfig;
};

export const EnrollmentForm = ({ config }: EnrollmentFormProps) => {
  // TODO: Initialize form state - hint: you'll need state for form values and errors

  // TODO: Create a function to handle input changes

  // TODO: Create a function to validate the form

  // TODO: Create a function to handle form submission

  return (
    <form className="enrollment-form">
      <h2>{config.title}</h2>

      {/* TODO: Map over config.fields and render appropriate inputs
          - For "text" and "email": render <input type="..." />
          - For "date": render <input type="date" />
          - For "select": render <select> with <option> for each choice
          - Show label for each field
          - Mark required fields visually (e.g., with an asterisk)
          - Display error message if field has an error
      */}

      <button type="submit">Enroll in Benefits</button>

      {/* TODO: Show success message when form is submitted successfully */}
    </form>
  );
};
