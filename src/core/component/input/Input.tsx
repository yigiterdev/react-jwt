import "./_input.scss";

import classNames from "classnames";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "disabled" | "name" | "className"
> & {
  name: string;
  onChange: React.ReactEventHandler<HTMLInputElement>;
  testid?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  hasError?: boolean;
  customClassName?: string;
};

function Input(props: InputProps) {
  const {customClassName, ...rest} = props;
  const inputClassnames = classNames("input", customClassName);

  return <input className={inputClassnames} {...rest} />;
}

export default Input;
