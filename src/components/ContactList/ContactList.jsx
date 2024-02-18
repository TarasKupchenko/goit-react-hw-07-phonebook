import { useDispatch, useSelector } from 'react-redux';
import {
  apiDeleteContact,
  apiGetContacts,
} from '../../redux/contacts/contactsSlice';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { STATUSES } from 'utils/constants';
import {
  selectError,
  selectStatus,
} from '../../redux/contacts/contactSlice.selectors';
import { selectContactsFilter } from '../../redux/filter/filtlerSlice.selectors';
import Loader from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectContactsFilter);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    const isConfirmed = window.confirm(
      'Are you sure want to delete this contact?'
    );
    if (isConfirmed) {
      dispatch(apiDeleteContact(id));
    }
  };

  return (
    <>
      {status === STATUSES.pending && (
        <div>
          <Loader />
        </div>
      )}
      {status === STATUSES.error && <div>{error}</div>}
      <ul className={css.contactList}>
        {filteredContacts?.map(contact => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <p className={css.contactText}>
                {contact.name}: {contact.phone}
              </p>
              <button
                className={css.deleteBtn}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
