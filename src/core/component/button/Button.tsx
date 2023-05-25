import "./_button.scss";

import classNames from "classnames";

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled" | "className"
> & {
  children: React.ReactNode;
  testid?: string;
  customSpinner?: React.ReactNode;
  isDisabled?: boolean;
  shouldPreventDefault?: boolean;
  shouldStopPropagation?: boolean;
  shouldFocus?: boolean;
  customClassName?: string;
};

function Button(props: ButtonProps) {
  const {customClassName, children, isDisabled, ...rest} = props;
  const buttonClassnames = classNames("button", customClassName, {
    "button--is-inactive": isDisabled
  });

  return (
    <button className={buttonClassnames} disabled={isDisabled} {...rest}>
      {children}
    </button>
  );
}

export default Button;
