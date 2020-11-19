import React from 'react';
import styles from './Input.module.css';

type Input = FieldTextLikeDefinition & {
  error?: string | null;
};

function Input({ error = null, metadata }: Input) {
  const { format, maxlength, ...inputProps } = metadata;
  return (
    <input
      className={styles.input}
      type={format}
      maxLength={maxlength}
      {...inputProps}
    />
  );
}

export default Input;
