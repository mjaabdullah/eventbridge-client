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

interface LoginFormData {
  email: string;
  password: string;
}

type LoginFormErrors = Partial<Record<keyof LoginFormData, string>>;

const validateForm = (data: LoginFormData): LoginFormErrors => {
  const errors: LoginFormErrors = {};

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.password) {
    errors.password = "Password is required.";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
};

const LoginPage = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange =
    (field: keyof LoginFormData) => (event: ChangeEvent<HTMLInputElement>) => {
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

    const loginPayload: LoginFormData = {
      email: formData.email.trim(),
      password: formData.password,
    };

    const { data, error } = await authClient.signIn.email({
      ...loginPayload,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.warning(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-12">
      <section
        aria-labelledby="login-heading"
        className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm sm:p-10"
      >
        <div className="mb-8 text-center">
          <h1 id="login-heading" className="text-2xl font-bold text-[#0F172A]">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-[#0F172A]/70">
            Log in to manage and discover events on EventBridge.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange("email")}
              fullWidth
              className="rounded-lg border-[#E2E8F0] focus-visible:border-[#7C3AED] focus-visible:ring-2 focus-visible:ring-[#7C3AED]/30"
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
                autoComplete="current-password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange("password")}
                fullWidth
                className="rounded-lg border-[#E2E8F0] pr-10 focus-visible:border-[#7C3AED] focus-visible:ring-2 focus-visible:ring-[#7C3AED]/30"
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

          <Button
            type="submit"
            isDisabled={isSubmitting}
            className="mt-2 w-full rounded-lg bg-[#7C3AED] py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </Form>

        <p className="mt-6 text-center text-sm text-[#0F172A]/70">
          Don&apos;t have an account?{" "}
          <Link
            render={({ ref, ...domProps }) => (
              <NextLink
                {...domProps}
                ref={ref as React.Ref<HTMLAnchorElement>}
                href="/register"
              />
            )}
            className="font-medium text-[#7C3AED] outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2"
          >
            Register
          </Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
