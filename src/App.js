import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Form, Header, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const BookingForm = () => {

  const [currentDate, setNewDate] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('');
  
  const onChange = (event, data) => setNewDate(data.value);

  const genericOnChange = (event, cb) => cb(event.target.value);

  return (
    <>
    <Header as="h1">Booking System</Header>
    <Form>
      <Form.Field>
        <label>Full Name</label>
        <input onChange={event => genericOnChange(event, setName)} placeholder="Full Name" />
      </Form.Field>
      <Form.Field>
        <label>Phone</label>
        <input onChange={event => genericOnChange(event, setPhone)} placeholder="Phone" />
      </Form.Field>
      <Form.Field>
        <label>Number of Guests</label>
        <input onChange={event => genericOnChange(event, setGuests)} placeholder="Number of Guests" />
      </Form.Field>
      <SemanticDatepicker onChange={onChange} placeholder="Please select a date" />


      <Button type="submit">Book a table</Button>
    </Form>
    </>
  )
}

export default BookingForm;
