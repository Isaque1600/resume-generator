import { twMerge } from "tailwind-merge";

type InputWrapperProps = {
  classname?: string;
  children: React.ReactNode;
};

export const InputWrapper = ({ classname, children }: InputWrapperProps) => {
  return <div className={twMerge("flex flex-col", classname)}>{children}</div>;
};
