import { LabelProps } from "@radix-ui/react-label";
import { Label } from "../ui/label";

type InputLabelProps = LabelProps;

export const InputLabel = ({ ...props }: InputLabelProps) => {
  return <Label {...props} />;
};
