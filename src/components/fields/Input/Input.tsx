import React from 'react';
import styles from './Input.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type InputProps = FieldTextLikeDefinition & {
  value: string;
  handleChange: ({ key, value }: { key: string; value: string }) => void;
  hasError?: boolean;
};

function Input({
  id,
  metadata,
  value,
  handleChange,
  hasError = false,
}: InputProps) {
  const { format, maxlength, ...inputProps } = metadata;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleChange({
      key: id,
      value: event.target.value,
    });
  return (
    <input
      className={cx('input', {
        hasError,
      })}
      type={format}
      value={value}
      onChange={onChange}
      maxLength={maxlength}
      {...inputProps}
    />
  );
}

export default Input;
