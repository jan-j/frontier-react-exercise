import React from 'react';
import styles from './Input.module.css';

type InputProps = FieldTextLikeDefinition & {
  value: string;
  handleChange: ({ key, value }: { key: string; value: string }) => void;
  error?: string | null;
};

function Input({
  id,
  metadata,
  value,
  handleChange,
  error = null,
}: InputProps) {
  const { format, maxlength, ...inputProps } = metadata;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleChange({
      key: id,
      value: event.target.value,
    });
  return (
    <input
      className={styles.input}
      type={format}
      value={value}
      onChange={onChange}
      maxLength={maxlength}
      {...inputProps}
    />
  );
}

export default Input;
