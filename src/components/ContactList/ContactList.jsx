import React from 'react';
import { Contactelement, Button } from './ContactList.styled';
import PropTypes from 'prop-types';
// import { Statselement, StatsElementSpan } from './ContactList.styled';

const ContactList = ({ contacts, onDelet }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Contactelement key={contact.id} contact={contact} onDelet={onDelet}>
            {contact.name}:{contact.number}
            <Button onClick={() => onDelet(contact.id)}>Delet</Button>
          </Contactelement>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelet: PropTypes.func.isRequired,
};

export default ContactList;
