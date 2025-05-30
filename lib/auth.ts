"use server";
import { csrf } from "@/instances/csrf";
import { z } from "zod";
const schema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  csrf_token: z.string(),
});
export const authenticateUser = async (prevState: string, input: FormData) => {
  let data;
  try {
    data = schema.parse(Object.fromEntries(input));
  } catch {
    return { ok: false, message: "Failed to parse request." };
  }
  if (!csrf.verify(process.env.CSRF_TOKEN_SECRET!, data.csrf_token)) {
    return { ok: false, message: "Unauthorized request." };
  }
  return { ok: true, message: "The form was successfully submitted." };
};
