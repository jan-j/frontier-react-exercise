import React from 'react';
import styles from './Textarea.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type TextareaProps = FieldTextareaDefinition & {
  value: string;
  handleChange: ({ key, value }: { key: string; value: string }) => void;
  hasError?: boolean;
};

function Textarea({
  id,
  metadata,
  value,
  handleChange,
  hasError = false,
}: TextareaProps) {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    handleChange({
      key: id,
      value: event.target.value,
    });

  return (
    <textarea
      className={cx('textarea', {
        hasError,
      })}
      {...metadata}
      value={value}
      onChange={onChange}
    />
  );
}

export default Textarea;
