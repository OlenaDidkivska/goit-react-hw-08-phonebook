import { Contacts } from '../components/Contacts/Contacts';
import { ContactForm } from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import { ContactsMassage } from '../components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import Loader from '../components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <Loader />}{' '}
      {contacts?.length > 0 ? (
        !error && (
          <>
            <Filter />
            <Contacts />
          </>
        )
      ) : (
        <ContactsMassage>
          Your phonebook is empty, add your first contact
        </ContactsMassage>
      )}
    </>
  );
};

export default ContactsPage;
