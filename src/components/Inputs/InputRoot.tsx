import { twMerge } from "tailwind-merge";
import { InputElement } from "./InputElement";
import { InputLabel } from "./InputLabel";
import { InputWrapper } from "./InputWrapper";

type InputRootProps = {
  labelText: string;
  placeholder: string;
  name: string;
  wrapperClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const InputRoot = {
  root: ({
    labelText,
    placeholder,
    name,
    wrapperClassName,
    inputClassName,
    labelClassName,
    onChange,
  }: InputRootProps) => (
    <InputWrapper classname={wrapperClassName}>
      <InputLabel className={labelClassName} htmlFor={name}>
        {labelText}
      </InputLabel>
      <InputElement
        placeholder={placeholder}
        name={name}
        className={twMerge("w-full max-w-[20rem]", inputClassName)}
        onChange={onChange}
      />
    </InputWrapper>
  ),
  wrapper: InputWrapper,
  label: InputLabel,
  singleInput: InputElement,
};
