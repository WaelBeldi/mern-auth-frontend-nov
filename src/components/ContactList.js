import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getContacts } from '../redux/actions/contactActions';
import Spinner from 'react-bootstrap/Spinner';
import ContactCard from "./ContactCard"

const ContactList = () => {
  const contacts = useSelector(state => state.contactReducer.contacts)
  const loadContacts = useSelector(state => state.contactReducer.loadContacts)
  console.log(contacts);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
    // eslint-disable-next-line
  }, [])

  return (
    <div className='contactList'>
      {
        loadContacts
        ? <Spinner animation="border" variant="primary" />
        : contacts.length === 0 ? <h1>There are no contacts...</h1>
          : contacts.map(contact => {
            return <ContactCard key={contact._id} contact={contact} />
          })
      }
    </div>
  )
}

export default ContactList