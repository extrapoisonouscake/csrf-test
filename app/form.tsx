"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WithLabel } from "@/components/ui/with-label";
import { cn } from "@/lib/utils";
import { useActionState } from "react";
import { authenticateUser } from "../lib/auth";

export function Form({ csrfToken }: { csrfToken: string }) {
  const [response, formAction, isPending] = useActionState(
    //@ts-expect-error typings
    authenticateUser,
    null
  );
  return (
    <form action={formAction} className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold">CSRF Prevention</h3>
      <WithLabel id="firstName" label="First Name">
        <Input required name="first_name" placeholder="John" />
      </WithLabel>
      <WithLabel id="lastName" label="Last Name">
        <Input required id="lastName" name="last_name" placeholder="Doe" />
      </WithLabel>
      <input type="hidden" name="csrf_token" value={csrfToken} />
      <Button className="w-full">Submit</Button>
      {isPending ? <p>Submitting...</p> : response && <Message {...response} />}
    </form>
  );
}
function Message({
  ok,
  message,
}: Awaited<ReturnType<typeof authenticateUser>>) {
  return (
    <p className={cn(ok ? "text-green-500" : "text-destructive")}>{message}</p>
  );
}
