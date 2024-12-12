import { SelectItemProps, SelectTriggerProps } from "@radix-ui/react-select";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectWrapper } from "./SelectWrapper";

export const SelectRoot = {
  root: Select,
  trigger: ({
    placeholder,
    ...props
  }: { placeholder: string } & SelectTriggerProps) => (
    <SelectTrigger {...props}>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
  ),
  content: SelectContent,
  item: ({ ...props }: SelectItemProps) => SelectItem({ ...props }),
  label: Label,
  wrapper: SelectWrapper,
};
