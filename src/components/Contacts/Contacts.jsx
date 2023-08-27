import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContact } from 'redux/contactDetailsReducer';

export function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts)

  const deleteContactFromList = contactId => {
    dispatch(deleteContact(contactId));
  };

    return (
      <ul className={css.contact__list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contact}>
            {contact.name}: {contact.number}
            <button
              className={css.button}
              onClick={() => deleteContactFromList(contact.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
}

