import { ReactNode } from "react";

export function WithLabel({
  label,
  id,
  children,
}: {
  label: string;
  children: ReactNode;
  id: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}
