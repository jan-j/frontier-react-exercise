/// <reference types="react-scripts" />

type FormDefinition = {
  theme: ThemeDefinition;
  sections: SectionDefinition[];
};

type ThemeDefinition = {
  primary_color: string;
  secondary_color: string;
  background_color: string;
};

type SectionDefinition = {
  id: string;
  title: string;
  content: FieldDefinition[];
};

type FieldDefinition =
  | FieldTextLikeDefinition
  | FieldTextareaDefinition
  | FieldNumberDefinition
  | FieldBooleanDefinition
  | FieldMonoChoiceDefinition
  | FieldMultiChoiceDefinition;

type FieldMetadataDefinition = {
  required: boolean;
};

type FieldDefinitionBase = {
  id: string;
  type: string;
  question_text: string;
  metadata: FieldMetadataDefinition;
};

type FieldTextLikeDefinition =
  | FieldTextDefinition
  | FieldEmailDefinition
  | FieldPhoneNumberDefinition
  | FieldLocationDefinition
  | FieldUrlDefinition;

type FieldTextLikeMetadataDefinition = FieldMetadataDefinition & {
  format?: string;
  pattern?: string;
  placeholder?: string;
  maxlength?: number;
};

type FieldTextDefinition = FieldDefinitionBase & {
  type: 'text';
  metadata: FieldTextLikeMetadataDefinition & {
    format: 'text';
  };
};

type FieldEmailDefinition = FieldDefinitionBase & {
  type: 'email';
  metadata: FieldTextLikeMetadataDefinition & {
    format: 'email';
  };
};

type FieldPhoneNumberDefinition = FieldDefinitionBase & {
  type: 'phone';
  metadata: FieldTextLikeMetadataDefinition & {
    format: 'text';
  };
};

type FieldLocationDefinition = FieldDefinitionBase & {
  type: 'location';
  metadata: FieldTextLikeMetadataDefinition & {
    format: 'text';
  };
};

type FieldUrlDefinition = FieldDefinitionBase & {
  type: 'url';
  metadata: FieldTextLikeMetadataDefinition & {
    format: 'url';
  };
};

type FieldTextareaDefinition = FieldDefinitionBase & {
  type: 'textarea';
  metadata: FieldMetadataDefinition & {
    placeholder?: string;
  };
};

type FieldNumberDefinition = FieldDefinitionBase & {
  type: 'number';
};

type FieldBooleanDefinition = FieldDefinitionBase & {
  type: 'boolean';
};

type FieldOptionDefinition = {
  label: string;
  value: string;
};

type FieldMonoChoiceDefinition = FieldDefinitionBase & {
  type: 'monochoice';
  metadata: FieldMetadataDefinition & {
    options: FieldOptionDefinition[];
  };
};

type FieldMultiChoiceDefinition = FieldDefinitionBase & {
  type: 'multichoice';
  metadata: FieldMetadataDefinition & {
    options: FieldOptionDefinition[];
  };
  // no idea what output is here for
  output?: [
    {
      originStep: 13;
    }
  ];
};
