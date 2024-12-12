import { twMerge } from "tailwind-merge";

type SelectWrapperProps = {
  classname?: string;
  children: React.ReactNode;
};

export const SelectWrapper = ({ classname, children }: SelectWrapperProps) => {
  return (
    <div className={twMerge("flex flex-col-reverse", classname)}>
      {children}
    </div>
  );
};
