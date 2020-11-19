import React from 'react';
import formInstructions from '../data/form_instructions.json';
import Form from './Form/Form';

function App() {
  const formDefinition: FormDefinition = formInstructions as FormDefinition;

  return (
    <div>
      <Form definition={formDefinition} />
    </div>
  );
}

export default App;
