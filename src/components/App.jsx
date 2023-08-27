import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import { ContactsList } from './Contacts/Contacts';


export default function AppPhoneBook() {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  // };

  // const LS_KEY = 'contact_index';

  // useEffect(() => {
  //     localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  //   function loadContactsFromLocalStorage() {
  //     const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));
  //     return savedContacts ? savedContacts : [];
  //   }

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
