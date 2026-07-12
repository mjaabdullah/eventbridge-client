"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Link,
  TextField,
  toast,
} from "@heroui/react";
import NextLink from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type RegisterFormErrors = Partial<Record<keyof RegisterFormData, string>>;

const validateForm = (data: RegisterFormData): RegisterFormErrors => {
  const errors: RegisterFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.password) {
    errors.password = "Password is required.";
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  } else if (!/[A-Z]/.test(data.password)) {
    errors.password = "Password must contain at least one uppercase letter.";
  } else if (!/[a-z]/.test(data.password)) {
    errors.password = "Password must contain at least one lowercase letter.";
  } else if (!/[0-9]/.test(data.password)) {
    errors.password = "Password must contain at least one number.";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
    errors.password = "Password must contain at least one special character.";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

const RegisterPage = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange =
    (field: keyof RegisterFormData) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const registrationPayload: {
      fullName: string;
      email: string;
      password: string;
    } = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      password: formData.password,
    };

    const { data, error } = await authClient.signUp.email({
      name: registrationPayload.fullName,
      email: registrationPayload.email,
      password: registrationPayload.password,
      callbackURL: "/",
    });

    console.log(error, data);

    if (data?.user) {
      toast.success("Registration successful!");
      setIsSubmitting(false);
    }

    if (error) {
      toast.warning(`Registration failed: ${error.message}`);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-12">
      <section
        aria-labelledby="register-heading"
        className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm sm:p-10"
      >
        <div className="mb-8 text-center">
          <h1
            id="register-heading"
            className="text-2xl font-bold text-[#0F172A]"
          >
            Create your account
          </h1>
          <p className="mt-2 text-sm text-[#0F172A]/70">
            Join EventBridge to discover and manage events.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField
            name="fullName"
            isInvalid={Boolean(errors.fullName)}
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-[#0F172A]">
              Full Name
            </Label>
            <Input
              type="text"
              autoComplete="name"
              placeholder="Type your full name"
              value={formData.fullName}
              onChange={handleChange("fullName")}
              fullWidth
              className="rounded-lg border-[#E2E8F0] focus-visible:border-[#7C3AED] focus-visible:ring-2 focus-visible:ring-[#7C3AED]/30 placeholder:text-muted-foreground"
            />
            <FieldError className="text-xs text-red-600">
              {errors.fullName}
            </FieldError>
          </TextField>

          <TextField
            name="email"
            type="email"
            isInvalid={Boolean(errors.email)}
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-[#0F172A]">
              Email Address
            </Label>
            <Input
              type="email"
              autoComplete="email"
              placeholder="Type your email address"
              value={formData.email}
              onChange={handleChange("email")}
              fullWidth
              className="rounded-lg border-[#E2E8F0] focus-visible:border-[#7C3AED] focus-visible:ring-2 focus-visible:ring-[#7C3AED]/30 placeholder:text-muted-foreground"
            />
            <FieldError className="text-xs text-red-600">
              {errors.email}
            </FieldError>
          </TextField>

          <TextField
            name="password"
            isInvalid={Boolean(errors.password)}
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-[#0F172A]">
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={handleChange("password")}
                fullWidth
                className="rounded-lg border-[#E2E8F0] pr-10 focus-visible:border-[#7C3AED] focus-visible:ring-2 focus-visible:ring-[#7C3AED]/30 placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F172A]/50 outline-none transition-colors hover:text-[#7C3AED] focus-visible:text-[#7C3AED]"
              >
                {showPassword ? (
                  <HiOutlineEyeSlash className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <HiOutlineEye className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
            <FieldError className="text-xs text-red-600">
              {errors.password}
            </FieldError>
          </TextField>

          <TextField
            name="confirmPassword"
            isInvalid={Boolean(errors.confirmPassword)}
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-[#0F172A]">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange("confirmPassword")}
                fullWidth
                className="rounded-lg border-[#E2E8F0] pr-10 focus-visible:border-[#7C3AED] focus-visible:ring-2 focus-visible:ring-[#7C3AED]/30 placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F172A]/50 outline-none transition-colors hover:text-[#7C3AED] focus-visible:text-[#7C3AED]"
              >
                {showConfirmPassword ? (
                  <HiOutlineEyeSlash className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <HiOutlineEye className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
            <FieldError className="text-xs text-red-600">
              {errors.confirmPassword}
            </FieldError>
          </TextField>

          <Button
            type="submit"
            isDisabled={isSubmitting}
            className="mt-2 w-full rounded-lg bg-[#7C3AED] py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Register"}
          </Button>
        </Form>

        <p className="mt-6 text-center text-sm text-[#0F172A]/70">
          Already have an account?{" "}
          <Link
            render={({ ref, ...domProps }) => (
              <NextLink
                {...domProps}
                ref={ref as React.Ref<HTMLAnchorElement>}
                href="/login"
              />
            )}
            className="font-medium text-[#7C3AED] outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2"
          >
            Login
          </Link>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;
