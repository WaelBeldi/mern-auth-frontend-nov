import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';

const Register = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  console.log({name, lastName, email, password});

  const dispatch = useDispatch()

  const handleRegister = () => {
    const newUser = {name, lastName, email, password}
    dispatch(registerUser(newUser))
    setName("")
    setLastName("")
    setEmail("")
    setPassword("")
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleRegister(); handleClose()}}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Register