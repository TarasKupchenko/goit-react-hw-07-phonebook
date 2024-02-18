import { ContactForm, ContactList, Section, Filter } from 'components';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter></Filter>
        <ContactList></ContactList>
      </Section>
    </div>
  );
};
