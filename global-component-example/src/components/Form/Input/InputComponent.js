import "../Input/InputComponent.scss";
import { forwardRef } from "react";
const InputComponent = (props, ref) => {
  let {
    type,
    width,
    id,
    className,
    value,
    checked,
    autoFocus,
    placeholder,
    readOnly,
    disabled,
    onChange,
  } = props;

  return (
    <input
      ref={ref}
      type={type}
      width={width}
      id={id}
      className={className}
      value={value}
      checked={checked}
      autoFocus={autoFocus}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange ? (e) => onChange(e) : null}
    />
  );
};

export default forwardRef(InputComponent);
