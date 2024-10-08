import React, { useState } from 'react';
import AddressForm from './components/AddressForm';
import AddressTable from './components/AddressTable';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="container">
      <h1>Address Book</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <AddressForm addContact={addContact} editContact={editContact} updateContact={updateContact} />
      <AddressTable contacts={contacts} setEditContact={setEditContact} />
    </div>
  );
};

export default App;
