import React from 'react';
import formInstructions from '../../data/form_instructions.json';
import Form from '../Form/Form';
import styles from './App.module.css';

function App() {
  const formDefinition: FormDefinition = formInstructions as FormDefinition;

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Form definition={formDefinition} />
      </div>
    </div>
  );
}

export default App;
