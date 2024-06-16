import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
      {contacts.length > 0 || error || isLoading || (
        <p className="message">You have no contacts yet!</p>
      )}
      {filteredContacts.length > 0 || error || isLoading || (
        <p>Nothing is found...</p>
      )}
    </>
  );
};

export default ContactList;
