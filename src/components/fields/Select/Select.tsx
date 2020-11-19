import React from 'react';
import styles from './Select.module.css';

type SelectProps = (FieldMonoChoiceDefinition | FieldMultiChoiceDefinition) & {
  error?: string | null;
};

function Select({ error = null, type, metadata }: SelectProps) {
  const { options, ...selectProps } = metadata;
  return (
    <select
      className={styles.select}
      {...selectProps}
      multiple={type === 'multichoice'}
    >
      {options.map((option) => (
        <option
          className={styles.option}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
