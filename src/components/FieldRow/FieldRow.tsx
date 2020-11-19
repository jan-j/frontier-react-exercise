import React from 'react';
import styles from './FieldRow.module.css';
import Input from '../fields/Input/Input';
import Textarea from '../fields/Textarea/Textarea';
import Select from '../fields/Select/Select';

type FieldRowProps = {
  definition: FieldDefinition;
  error?: string | null;
};

function FieldRow({ definition, error = null }: FieldRowProps) {
  const renderField = () => {
    switch (definition.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'location':
      case 'url':
        return <Input {...definition} />;
      case 'textarea':
        return <Textarea {...definition} />;
      case 'monochoice':
      case 'multichoice':
        return <Select {...definition} />;
    }

    // throw new Error(`Invalid field type: "${definition.type}"`);
  };

  return (
    <div className={styles.fieldRow}>
      <div className={styles.question}>{definition.question_text}</div>
      <div className={styles.field}>{renderField()}</div>
      {error !== null ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
}

export default FieldRow;
