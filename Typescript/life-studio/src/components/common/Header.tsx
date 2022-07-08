import {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

// Components
import Avatar from '../shared/Avatar';

// Actions
import {signOut} from '../../store/auth/auth.actions';

// Constants
import {RootStore} from '../../store/configureStore';

const Header: FC = () => {
  const dispatch = useDispatch();
  const {profileData} = useSelector((state: RootStore) => state.profile);

  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    !profileData ? null : (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Link to="/" className="navbar-brand">Life Studio</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/mastery">Mastery</Link>
                <NavDropdown title={<Avatar src={profileData?.avatar}/>} id="basic-nav-dropdown">
                  <Link className="dropdown-item" to="/profile">Profile</Link>
                  <NavDropdown.Divider/>
                  <span className="dropdown-item" onClick={handleLogOut} role="button">Logout</span>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  );
};

export default Header;