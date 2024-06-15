import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={css.list}>
        {filterContacts.map(contact => {
          return (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
      {contacts.length > 0 || (
        <p className="message">You have no contacts yet!</p>
      )}
    </>
  );
};

export default ContactList;
