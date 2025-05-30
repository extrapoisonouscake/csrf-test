import { csrf } from "@/instances/csrf";
import { Form } from "./form";
export const dynamic = "force-dynamic";
export default function Home() {
  const csrfToken = csrf.create(process.env.CSRF_TOKEN_SECRET!);
  return <Form csrfToken={csrfToken} />;
}
