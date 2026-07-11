"use client";

import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { useState, type FormEvent } from "react";
import { FiCheckCircle } from "react-icons/fi";

interface ContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange<K extends keyof ContactFormValues>(
    field: K,
    value: string,
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setValues(initialValues);
    }
  }

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-border bg-secondary px-6 py-12 text-center"
      >
        <FiCheckCircle size={32} className="text-primary" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-foreground">
          Message received
        </h3>
        <p className="max-w-sm text-sm text-foreground/70">
          Thanks for reaching out. This is a demo form, so no data has been sent
          anywhere.
        </p>
        <Button variant="outline" onPress={() => setIsSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 border border-border bg-muted p-6 sm:p-8 rounded-2xl"
    >
      <TextField
        isRequired
        isInvalid={Boolean(errors.fullName)}
        name="fullName"
        value={values.fullName}
        onChange={(value) => handleChange("fullName", value)}
      >
        <Label>Full Name</Label>
        <Input placeholder="Jane Doe" />
        {errors.fullName ? (
          <FieldError>{errors.fullName}</FieldError>
        ) : (
          <Description>Let us know who we&apos;re speaking with.</Description>
        )}
      </TextField>

      <TextField
        isRequired
        isInvalid={Boolean(errors.email)}
        name="email"
        type="email"
        value={values.email}
        onChange={(value) => handleChange("email", value)}
      >
        <Label>Email Address</Label>
        <Input placeholder="jane@example.com" />
        {errors.email ? (
          <FieldError>{errors.email}</FieldError>
        ) : (
          <Description>We&apos;ll reply to this address.</Description>
        )}
      </TextField>

      <TextField
        isRequired
        isInvalid={Boolean(errors.subject)}
        name="subject"
        value={values.subject}
        onChange={(value) => handleChange("subject", value)}
      >
        <Label>Subject</Label>
        <Input placeholder="How can we help?" />
        {errors.subject ? <FieldError>{errors.subject}</FieldError> : null}
      </TextField>

      <TextField
        isRequired
        isInvalid={Boolean(errors.message)}
        name="message"
        value={values.message}
        onChange={(value) => handleChange("message", value)}
      >
        <Label>Message</Label>
        <TextArea
          placeholder="Tell us a bit more about your request..."
          rows={5}
        />
        {errors.message ? (
          <FieldError>{errors.message}</FieldError>
        ) : (
          <Description>Minimum 10 characters.</Description>
        )}
      </TextField>

      <Button type="submit" variant="primary" className="w-full sm:w-fit">
        Send Message
      </Button>
    </form>
  );
}
