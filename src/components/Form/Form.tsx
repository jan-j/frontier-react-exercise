import React, { useState } from 'react';
import styles from './Form.module.css';
import Section from '../Section/Section';
import FieldRow from '../FieldRow/FieldRow';
import Button from '../Button/Button';
import { getInitValues, validate } from '../../modules/FormUtils';

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
  const [values, setValues] = useState<any>(getInitValues(definition));

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = ({ key, value }: { key: string; value: any }) => {
    setValues((prevValues: FormValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { isValid, errors } = validate(definition, values);

    if (isValid) {
      console.log(`Form values: \n${JSON.stringify(values, null, 2)}`);
    } else {
      setErrors(errors);
      console.log(
        `Form validation errors: \n${JSON.stringify(errors, null, 2)}`
      );
    }
  };

  return (
    <form
      className={styles.form}
      style={themeToStyles(definition.theme)}
      onSubmit={handleSubmit}
      noValidate={true}
    >
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
      <div className={styles.actions}>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default Form;
