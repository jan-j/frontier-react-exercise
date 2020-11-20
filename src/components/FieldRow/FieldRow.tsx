import React, { ReactNode } from 'react';
import styles from './FieldRow.module.css';
import Input from '../fields/Input/Input';
import Textarea from '../fields/Textarea/Textarea';
import Select from '../fields/Select/Select';
import NumberInput from '../fields/NumberInput/NumberInput';
import Boolean from '../fields/Boolean/Boolean';

type FieldRowProps = {
  definition: FieldDefinition;
  value: any;
  handleChange: ({ key, value }: { key: string; value: any }) => void;
  error?: string | null;
};

function FieldRow({
  definition,
  value,
  handleChange,
  error = null,
}: FieldRowProps) {
  const renderField = (): ReactNode => {
    const hasError = error !== null;

    switch (definition.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'location':
      case 'url':
        return (
          <Input
            {...definition}
            value={value}
            handleChange={handleChange}
            hasError={hasError}
          />
        );
      case 'number':
        return (
          <NumberInput
            {...definition}
            value={value}
            handleChange={handleChange}
            hasError={hasError}
          />
        );
      case 'textarea':
        return (
          <Textarea
            {...definition}
            value={value}
            handleChange={handleChange}
            hasError={hasError}
          />
        );
      case 'boolean':
        return (
          <Boolean
            {...definition}
            value={value}
            handleChange={handleChange}
            hasError={hasError}
          />
        );
      case 'monochoice':
      case 'multichoice':
        return (
          <Select
            {...definition}
            value={value}
            handleChange={handleChange}
            hasError={hasError}
          />
        );
    }
  };

  return (
    <div className={styles.fieldRow}>
      <div className={styles.question}>
        {definition.question_text}
        {definition.metadata.required ? (
          <span className={styles.required}>*</span>
        ) : null}
      </div>
      <div className={styles.field}>{renderField()}</div>
      {error !== null ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
}

export default FieldRow;
