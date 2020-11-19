import React from 'react';
import styles from './Textarea.module.css';

type TextareaProps = FieldTextareaDefinition & {
  error?: string | null;
};

function Textarea({ error = null, metadata }: TextareaProps) {
  return <textarea className={styles.textarea} {...metadata} />;
}

export default Textarea;
