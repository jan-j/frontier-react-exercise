import React from 'react';
import styles from './Textarea.module.css';

type TextareaProps = FieldTextareaDefinition & {
  value: string;
  handleChange: ({ key, value }: { key: string; value: string }) => void;
  error?: string | null;
};

function Textarea({
  id,
  metadata,
  value,
  handleChange,
  error = null,
}: TextareaProps) {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    handleChange({
      key: id,
      value: event.target.value,
    });

  return (
    <textarea
      className={styles.textarea}
      {...metadata}
      value={value}
      onChange={onChange}
    />
  );
}

export default Textarea;
