import { SelectItem } from "@/components/ui/select";

type SelectionEducationProps = {
  content: string;
} & React.ComponentProps<typeof SelectItem>;

export const SelectEducationItem = (props: SelectionEducationProps) => {
  return <SelectItem {...props}>{props.content}</SelectItem>;
};
