import React from 'react';
import styles from './Select.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type SelectProps = (FieldMonoChoiceDefinition | FieldMultiChoiceDefinition) & {
  value: null | string | string[];
  handleChange: ({
    key,
    value,
  }: {
    key: string;
    value: string | string[];
  }) => void;
  hasError?: boolean;
};

function Select({
  id,
  type,
  metadata,
  value = null,
  handleChange,
  hasError = false,
}: SelectProps) {
  const { options, ...selectProps } = metadata;

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    handleChange({
      key: id,
      value:
        type === 'multichoice'
          ? Array.from(event.target.selectedOptions, (option) => option.value)
          : event.target.value,
    });

  return (
    <select
      className={cx('select', {
        hasError,
      })}
      {...selectProps}
      multiple={type === 'multichoice'}
      value={value || ''}
      onChange={onChange}
    >
      {type === 'monochoice' && value === null ? (
        <option className={styles.option} value="" />
      ) : null}
      {options.map((option) => (
        <option className={styles.option} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
