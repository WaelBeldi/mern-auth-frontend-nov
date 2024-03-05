import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { editContact, postContact } from '../redux/actions/contactActions';

const AddEdit = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" })
  console.log("contact", contact);

  const contactFromReducer = useSelector(state => state.contactReducer.contact)
  console.log("contactFromReducer", contactFromReducer);

  const edit = useSelector(state => state.editReducer.edit)

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    edit ? setContact(contactFromReducer) : setContact({ name: "", email: "", phone: "" })
  }, [edit, contactFromReducer])

  const handleContact = () => {
    edit ? dispatch(editContact(contactFromReducer._id, contact)) : dispatch(postContact(contact))
    navigate("/contact-list")
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"
          name='name'
          value={contact.name}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          name='email'
          value={contact.email}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number"
          name='phone'
          value={contact.phone}
          onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" onClick={handleContact}>
        {edit ? "Edit" : "Add"}
      </Button>
    </Form>
  )
}

export default AddEdit