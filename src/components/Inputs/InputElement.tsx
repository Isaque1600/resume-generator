import { Input } from "../ui/input";

type InputElementProps = React.HTMLAttributes<HTMLInputElement> &
  React.ComponentProps<"input">;

export const InputElement = ({ ...props }: InputElementProps) => {
  return <Input {...props} />;
};
