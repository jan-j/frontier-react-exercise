import React from 'react';
import styles from './NumberInput.module.css';

type NumberInputProps = FieldNumberDefinition & {
  value: null | number;
  handleChange: ({ key, value }: { key: string; value: null | number }) => void;
  error?: string | null;
};

function NumberInput({
  id,
  metadata,
  value = null,
  handleChange,
  error = null,
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
      className={styles.input}
      type="number"
      {...metadata}
      value={value === null ? '' : value}
      onChange={onChange}
    />
  );
}

export default NumberInput;
