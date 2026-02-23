import { useState, FormEvent, ChangeEvent, FocusEvent } from "react";
import { FormConfig, FormField } from "../data";

type EnrollmentFormProps = {
  config: FormConfig;
};

export const EnrollmentForm = ({ config: { title, fields } }: EnrollmentFormProps) => {
  const initialValues = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: field.type === "select" ? field.options?.[0] ?? "" : "",
    }),
    {} as Record<string, string>
  );

  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateField = (field: FormField, value: string): string => {
    if (field.required && !value.trim()) {
      return field.errors?.[field.name] ?? `${field.label} is required`;
    }

    if (field.type === "email" && value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return "Please enter a valid email address";
      }
    }

    return "";
  };

  const validateForm = (currentValues: Record<string, string>): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      const value = currentValues[field.name] ?? "";
      const error = validateField(field, value);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    return newErrors;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setSuccessMessage(null);

    if (touched[name]) {
      const field = fields.find((f) => f.name === name);
      if (field) {
        const error = validateField(field, value);
        setErrors((prev) => {
          const next = { ...prev };
          if (error) next[name] = error;
          else delete next[name];
          return next;
        });
      }
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = event.target;

    setTouched((prev) => ({ ...prev, [name]: true }));

    const field = fields.find((f) => f.name === name);
    if (field) {
      const value = values[name] ?? "";
      const error = validateField(field, value);

      setErrors((prev) => {
        const next = { ...prev };
        if (error) next[name] = error;
        else delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    const allTouched = fields.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: true,
      }),
      {} as Record<string, boolean>
    );
    setTouched(allTouched);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage("Form submitted successfully.");
      // Optionally reset the form:
      // setValues(initialValues);
    } else {
      setSuccessMessage(null);
    }
  };

  return (
    <form className="enrollment-form" onSubmit={handleSubmit}>
      <h2 className="enrollment-form-title">{title}</h2>
      <div className="fields-container">
        {fields.map(({ name, label, type, required, options }: FormField) => (
          <div key={name} className="field-card">
            <div className="field-label-row">
              <label htmlFor={name} className="field-label">
                {label}
              </label>
              {required && (
                <span className="field-required" aria-hidden>
                  *
                </span>
              )}
            </div>
            {type === "select" ? (
              <select
                id={name}
                name={name}
                className="field-input"
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {options?.map((option: string) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                id={name}
                name={name}
                className="field-input"
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {touched[name] && errors[name] && (
              <p className="field-error">{errors[name]}</p>
            )}
          </div>
        ))}
      </div>

      <button type="submit">Enroll in Benefits</button>

      {successMessage && <p className="form-success">{successMessage}</p>}
    </form>
  );
};
