import css from './Contact.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Contact } from 'components/ContactItem/ContactItem';
import { getContacts } from 'redux/selectors';

export function ContactsList() {
  const contacts = useSelector(getContacts);

    return (
      <ul className={css.contact__list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contact}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    );
}

