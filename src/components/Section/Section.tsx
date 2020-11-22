import React, { ReactNode } from 'react';
import styles from './Section.module.css';

type SectionProps = {
  definition: SectionDefinition;
  children: ReactNode;
};

function Section({ definition, children }: SectionProps) {
  return (
    <fieldset id={definition.id} className={styles.section}>
      <h2 className={styles.title}>{definition.title}</h2>
      <div className={styles.fields}>{children}</div>
    </fieldset>
  );
}

export default Section;
