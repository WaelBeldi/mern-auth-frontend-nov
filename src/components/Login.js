import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { loginUser } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  console.log({email, password});

  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(loginUser({email, password}))
    setEmail("")
    setPassword("")
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          <Button variant="primary" onClick={() => {handleLogin(); handleClose()}}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Login