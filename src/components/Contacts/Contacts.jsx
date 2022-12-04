import { ContactItem, ContactNumber, FilterButton } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
    Notify.info('Сontact deleted successfully', {
      cssAnimationStyle: 'from-top',
      position: 'center-top',
    });
  };

  return (
    <ul>
      {contacts?.map(contact => {
        return (
          <ContactItem key={contact.id}>
            {contact.name}:{' '}
            <ContactNumber href={`tel:${contact.number}`}>
              {contact.number}
            </ContactNumber>{' '}
            <FilterButton
              type="button"
              onClick={() => deleteContactHandler(contact.id)}
            >
              Delete
            </FilterButton>
          </ContactItem>
        );
      })}
    </ul>
  );
};
