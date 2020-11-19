import React from 'react';
import styles from './Boolean.module.css';

type BooleanProps = FieldBooleanDefinition & {
  value: null | boolean;
  handleChange: ({ key, value }: { key: string; value: boolean }) => void;
  error?: string | null;
};

function Boolean({
  id,
  metadata,
  value = null,
  handleChange,
  error = null,
}: BooleanProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleChange({
      key: id,
      value: event.target.checked,
    });
  return (
    <input
      type="checkbox"
      className={styles.boolean}
      {...metadata}
      checked={value || false}
      onChange={onChange}
    />
  );
}

export default Boolean;
