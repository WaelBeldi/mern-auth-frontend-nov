import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact, getContact } from '../redux/actions/contactActions';
import { toggleTrue } from '../redux/actions/editActions';

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this contact?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={() => dispatch(deleteContact(contact._id))}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./profilepic.jpg" />
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>
            {contact.email}
          </Card.Text>
          <Card.Text>
            {contact.phone}
          </Card.Text>
          <Link to={`/edit/${contact._id}`}>
            <Button variant="success" onClick={() => {dispatch(getContact(contact._id)); dispatch(toggleTrue())}}>Edit</Button>
          </Link>
          <Button variant="danger" onClick={handleShow}>Delete</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default ContactCard