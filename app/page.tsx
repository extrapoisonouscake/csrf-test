import { csrf } from "@/instances/csrf";
import { Form } from "./form";

export default function Home() {
  const csrfToken = csrf.create(process.env.CSRF_TOKEN_SECRET!);
  return <Form csrfToken={csrfToken} />;
}
