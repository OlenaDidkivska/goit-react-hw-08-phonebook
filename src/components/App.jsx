import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './Form/Form';
import Filter from './Filter/Filter';

import { ContactsMassage, PhonebookContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <Loader />}
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
    </PhonebookContainer>
  );
}
