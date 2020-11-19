import React, { ReactNode } from 'react';
import styles from './Section.module.css';

type SectionProps = {
  definition: SectionDefinition;
  children: ReactNode;
};

function Section({ definition, children }: SectionProps) {
  return (
    <fieldset id={definition.id} className={styles.section}>
      <h3 className={styles.title}>{definition.title}</h3>
      <div className={styles.fields}>{children}</div>
    </fieldset>
  );
}

export default Section;
