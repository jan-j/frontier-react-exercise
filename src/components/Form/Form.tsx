import React, { useState } from 'react';
import styles from './Form.module.css';
import Section from '../Section/Section';
import FieldRow from '../FieldRow/FieldRow';

type FormProps = {
  definition: FormDefinition;
};

const themeToStyles = (definition: ThemeDefinition) => {
  return (Object.keys(definition) as Array<keyof ThemeDefinition>).reduce(
    (acc: Record<string, string>, key) => {
      acc[`--${key.replace('_', '-')}`] = definition[key];
      return acc;
    },
    {}
  );
};

const getAllFields = (definition: FormDefinition): FieldDefinition[] => {
  return definition.sections.reduce((acc: FieldDefinition[], section) => {
    acc.push(...section.content);
    return acc;
  }, []);
};

const getInitValues = (definition: FormDefinition): Record<string, any> => {
  const fields = getAllFields(definition);

  return fields.reduce((acc: Record<string, any>, field) => {
    switch (field.type) {
      case 'number':
      case 'monochoice':
      case 'boolean':
        acc[field.id] = null;
        break;
      case 'multichoice':
        acc[field.id] = [];
        break;
      default:
        acc[field.id] = '';
    }

    return acc;
  }, {});
};

function Form({ definition }: FormProps) {
  const [values, setValues] = useState<Record<string, any>>(
    getInitValues(definition)
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = ({ key, value }: { key: string; value: any }) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  console.log(JSON.stringify(values, null, 2));

  return (
    <form className={styles.form} style={themeToStyles(definition.theme)}>
      {definition.sections.map((section) => (
        <Section key={section.id} definition={section}>
          {section.content.map((field) => (
            <FieldRow
              key={field.id}
              definition={field}
              value={values[field.id]}
              handleChange={handleChange}
              error={errors[field.id]}
            />
          ))}
        </Section>
      ))}
    </form>
  );
}

export default Form;
