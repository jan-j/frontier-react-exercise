import React from 'react';
import styles from './Boolean.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type BooleanProps = FieldBooleanDefinition & {
  value: null | boolean;
  handleChange: ({ key, value }: { key: string; value: boolean }) => void;
  hasError?: boolean;
};

function Boolean({
  id,
  metadata,
  value = null,
  handleChange,
  hasError = false,
}: BooleanProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      key: id,
      value: event.target.value === 'yes',
    });
  };
  return (
    <div
      className={cx('boolean', {
        hasError,
      })}
    >
      <input
        className={styles.input}
        type="radio"
        id={`${id}-yes`}
        name={id}
        value="yes"
        checked={value === true}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={`${id}-yes`}>
        Yes
      </label>
      <input
        className={styles.input}
        type="radio"
        id={`${id}-no`}
        name={id}
        value="no"
        checked={value === false}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor="radio-two">
        No
      </label>
    </div>
  );
}

export default Boolean;
