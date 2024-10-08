import React, { useState, useEffect } from 'react';

const AddressForm = ({ addContact, editContact, updateContact }) => {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editContact) {
      setForm(editContact);
    } else {
      setForm({ firstName: '', lastName: '', phone: '' });
    }
  }, [editContact]);

  const validateForm = () => {
    let errors = {};
    if (!form.firstName) errors.firstName = 'The first name is required';
    if (!form.lastName) errors.lastName = 'The last name is required';
    if (!form.phone) errors.phone = 'The phone is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      if (editContact) {
        updateContact(form);
      } else {
        addContact(form);
      }
      setForm({ firstName: '', lastName: '', phone: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          style={{ borderColor: errors.firstName ? 'red' : 'initial' }}
        />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          style={{ borderColor: errors.lastName ? 'red' : 'initial' }}
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{ borderColor: errors.phone ? 'red' : 'initial' }}
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>
      <button type="submit">{editContact ? 'Update' : 'Add'} Contact</button>
    </form>
  );
};

export default AddressForm;
