import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Input,
  Select,
  Checkbox,
  FormField,
  Card,
  Container,
} from "@base-ui-kit/ui";

import {
  registerSchema,
  type RegisterFormValues,
} from "./RegisterForm.constants";
import { registerUser, isApiError } from "../../api/auth";
import styles from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      country: "",
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    setGlobalError(null);

    try {
      await registerUser({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      });

      setIsSuccess(true);
    } catch (error) {
      if (isApiError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;

        if (status === 422 && data?.errors) {
          data.errors.forEach(({ field, message }) => {
            setError(field, {
              type: "server",
              message,
            });
          });
          return;
        }

        if (status === 409) {
          setError("email", {
            type: "server",
            message: "This email is already registered.",
          });
          return;
        }

        setGlobalError(
          data?.message ?? "Something went wrong. Please try again."
        );
      } else {
        setGlobalError("Network error. Please check your connection.");
      }
    }
  };

  if (isSuccess) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>🎉</div>
        <h2 className={styles.successTitle}>Account created!</h2>
        <p className={styles.successText}>
          Welcome aboard. Check your email to verify your account.
        </p>
      </div>
    );
  }

  return (
    <Container maxWidth="md">
      <Card padding="md">
        <div className={styles.header}>
          <h1 className={styles.title}>Create account</h1>
          <p className={styles.subtitle}>
            Start your journey today. Free forever.
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {globalError && (
            <div role="alert" className={styles.globalError}>
              {globalError}
            </div>
          )}

          <FormField
            label="Full name"
            required
            error={errors.fullName?.message}
          >
            <Input
              {...register("fullName")}
              type="text"
              placeholder="John Doe"
              autoComplete="name"
            />
          </FormField>

          <FormField
            label="Email address"
            required
            error={errors.email?.message}
          >
            <Input
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </FormField>

          <FormField
            label="Password"
            required
            hint="Min 8 chars, one uppercase, one number."
            error={errors.password?.message}
          >
            <Input
              {...register("password")}
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </FormField>

          <FormField
            label="Confirm password"
            required
            error={errors.confirmPassword?.message}
          >
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </FormField>

          <FormField label="Country" required error={errors.country?.message}>
            <Select {...register("country")} defaultValue="">
              <option value="" disabled>
                Select a country…
              </option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </Select>
          </FormField>

          <FormField error={errors.acceptTerms?.message}>
            <Checkbox
              {...register("acceptTerms")}
              label="I agree to the Terms of Service and Privacy Policy"
            />
          </FormField>

          <Button type="submit" fullWidth loading={isSubmitting} size="lg">
            {isSubmitting ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className={styles.footer}>
          Already have an account?{" "}
          <a href="/login" className={styles.link}>
            Sign in
          </a>
        </div>
      </Card>
    </Container>
  );
};
