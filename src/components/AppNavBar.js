import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFalse } from '../redux/actions/editActions';
import Login from './Login';
import Register from './Register';
import { logoutUser } from '../redux/actions/authActions';

const AppNavBar = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.authReducer.isAuth)
  console.log(isAuth);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Contacts App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <Button>Home</Button>
            </Link>
            {
              isAuth &&
              <>
                <Link to="/contact-list">
                  <Button>Contact List</Button>
                </Link>
                <Link to="/add">
                  <Button onClick={() => dispatch(toggleFalse())}>Add Contact</Button>
                </Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
      {
        isAuth
          ? <Button onClick={() => dispatch(logoutUser())}>Logout</Button>
          : <>
            <Login />
            <Register />
          </>
      }
    </Navbar>
  )
}

export default AppNavBar