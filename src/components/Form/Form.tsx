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

function Form({ definition }: FormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form className={styles.form} style={themeToStyles(definition.theme)}>
      {definition.sections.map((section) => (
        <Section key={section.id} definition={section}>
          {section.content.map((field) => (
            <FieldRow
              key={field.id}
              definition={field}
              error={errors[field.id]}
            />
          ))}
        </Section>
      ))}
    </form>
  );
}

export default Form;
