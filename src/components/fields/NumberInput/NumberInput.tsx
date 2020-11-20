import React from 'react';
import styles from './NumberInput.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type NumberInputProps = FieldNumberDefinition & {
  value: null | number;
  handleChange: ({ key, value }: { key: string; value: null | number }) => void;
  hasError?: boolean;
};

function NumberInput({
  id,
  metadata,
  value = null,
  handleChange,
  hasError = false,
}: NumberInputProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleChange({
      key: id,
      value: isNaN(parseInt(event.target.value))
        ? null
        : parseInt(event.target.value),
    });

  return (
    <input
      className={cx('input', {
        hasError,
      })}
      type="number"
      {...metadata}
      value={value === null ? '' : value}
      onChange={onChange}
    />
  );
}

export default NumberInput;
