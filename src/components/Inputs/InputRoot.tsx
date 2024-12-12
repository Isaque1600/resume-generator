import { twMerge } from "tailwind-merge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { InputWrapper } from "./InputWrapper";

type InputRootProps = {
  labelText: string;
  placeholder: string;
  name: string;
  wrapperClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

export const InputRoot = {
  root: ({
    labelText,
    placeholder,
    name,
    value,
    wrapperClassName,
    inputClassName,
    labelClassName,
    onChange,
  }: InputRootProps) => (
    <InputWrapper classname={wrapperClassName}>
      <Label className={twMerge("text-lg", labelClassName)} htmlFor={name}>
        {labelText}
      </Label>
      <Input
        placeholder={placeholder}
        id={name}
        value={value}
        name={name}
        className={twMerge("w-full", inputClassName)}
        onChange={onChange}
      />
    </InputWrapper>
  ),
  wrapper: InputWrapper,
  label: Label,
  singleInput: Input,
};
