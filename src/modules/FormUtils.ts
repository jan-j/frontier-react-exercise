import Input from '../components/fields/Input/Input';
import NumberInput from '../components/fields/NumberInput/NumberInput';
import Textarea from '../components/fields/Textarea/Textarea';
import Boolean from '../components/fields/Boolean/Boolean';
import Select from '../components/fields/Select/Select';
import React from 'react';

export const getAllFields = (definition: FormDefinition): FieldDefinition[] => {
  return definition.sections.reduce((acc: FieldDefinition[], section) => {
    acc.push(...section.content);
    return acc;
  }, []);
};

export const getInitValues = (
  definition: FormDefinition
): Record<string, any> => {
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

const ERROR_MESSAGE__FIELD_REQUIRED = 'Field is required';
const ERROR_MESSAGE__FIELD_INVALID = 'Invalid field value';

export const validate = (
  definition: FormDefinition,
  values: FormValues
): { isValid: boolean; errors: FormErrors } => {
  const fields = getAllFields(definition);

  const errors = fields.reduce((acc: FormErrors, field) => {
    const value = values[field.id];
    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'location':
      case 'url':
        if (field.metadata.required && value === '') {
          acc[field.id] = ERROR_MESSAGE__FIELD_REQUIRED;
        } else if (
          field.metadata.pattern &&
          !new RegExp(field.metadata.pattern).test(value as string)
        ) {
          acc[field.id] = ERROR_MESSAGE__FIELD_INVALID;
        }
        break;
      case 'number':
        if (field.metadata.required && value === null) {
          acc[field.id] = ERROR_MESSAGE__FIELD_REQUIRED;
        }
        break;
      case 'textarea':
        if (field.metadata.required && value === '') {
          acc[field.id] = ERROR_MESSAGE__FIELD_REQUIRED;
        }
        break;
      case 'boolean':
        if (field.metadata.required && value === null) {
          acc[field.id] = ERROR_MESSAGE__FIELD_REQUIRED;
        }
        break;
      case 'monochoice':
        if ((field.metadata.required && value === null) || value === '') {
          acc[field.id] = ERROR_MESSAGE__FIELD_REQUIRED;
        }
        break;
      case 'multichoice':
        if (field.metadata.required && (value as string[]).length === 0) {
          acc[field.id] = ERROR_MESSAGE__FIELD_REQUIRED;
        }
        break;
    }

    return acc;
  }, {});

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
