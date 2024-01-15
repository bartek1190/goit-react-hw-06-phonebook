import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'components/redux/contactsSlice';
import { getContacts, getStatusFilter } from 'components/redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  const filteredContacts = filterContacts();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <p>
              {contact.name}____{contact.number}
            </p>
            <button type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))
      ) : (
        <div>No contacts available</div>
      )}
    </ul>
  );
};
