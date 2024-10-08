import React, { useState } from 'react';
import AddressForm from './components/AddressForm';
import AddressTable from './components/AddressTable';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const addContact = (newContact) => {
    setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditContact(null);
  };

  return (
    <div className="container">
      <h1>Address Book</h1>
      <AddressForm addContact={addContact} editContact={editContact} updateContact={updateContact} />
      <AddressTable contacts={contacts} setEditContact={setEditContact} />
    </div>
  );
};

export default App;
