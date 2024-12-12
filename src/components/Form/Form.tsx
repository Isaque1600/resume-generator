type FormProps = {
  children: React.ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form = ({
  children,
  onSubmit,
  className,
  ...props
}: FormProps) => {
  return (
    <form className={className} onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};
