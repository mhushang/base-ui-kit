import axios, { AxiosError } from "axios";

import type {
  RegisterFormValues,
  ApiErrorResponse,
} from "../components/RegisterForm/RegisterForm.constants";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "https://api.example.com";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10_000,
});

export type RegisterPayload = Omit<
  RegisterFormValues,
  "confirmPassword" | "acceptTerms"
>;

export async function registerUser(data: RegisterPayload): Promise<void> {
  await client.post("/auth/register", data);
}

export function isApiError(
  error: unknown
): error is AxiosError<ApiErrorResponse> {
  return axios.isAxiosError(error);
}
