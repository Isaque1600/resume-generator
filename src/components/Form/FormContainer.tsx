import { twMerge } from "tailwind-merge";

type FormContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const FormContainer = ({ children, className }: FormContainerProps) => {
  return <div className={twMerge("grid gap-2", className)}>{children}</div>;
};
