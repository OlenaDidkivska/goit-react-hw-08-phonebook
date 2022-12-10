import { ContactNumber } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';

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
          <ListItem
            key={contact.id}
            secondaryAction={
              <Tooltip
                onClick={() => deleteContactHandler(contact.id)}
                title="Delete"
              >
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <AccountCircleIcon color="disabled" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={contact.name}
              secondary={
                <ContactNumber href={`tel:${contact.number}`}>
                  {contact.number}
                </ContactNumber>
              }
            />
          </ListItem>

          // <ContactItem key={contact.id}>
          //   {contact.name}:{' '}

          //   <IconButton
          //     aria-label="delete"
          //     size="small"

          //   >
          //     <DeleteIcon fontSize="small" />
          //   </IconButton>
          // </ContactItem>
        );
      })}
    </ul>
  );
};
