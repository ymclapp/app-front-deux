import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavMenu() {

  return (
    <>
      <Navbar className='navbar'>
      <Navbar.Brand href='/' className='navbar-brand'> In Progress
          {' '}
          </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Nav className='me-auto'>

          <NavItem className='tab1'>
          <Nav.Link as={ Link } to='/home' className='navbar-link'>Home</Nav.Link>
          </NavItem>

          <NavItem className='tab2'>


          <div className='navbar-nav mr-auto'>

            <li className='nav-item'>
              <Link to={'/home'} className='nav-link'>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to={'/tutorials'} className='nav-link'>
                Tutorials
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/add'} className='nav-link'>
                Add a Tutorial
              </Link>
            </li>
          </div>
        </nav>
        <div className='container mt-3'>

        </div>
      </div>
    </>
  )
};

export default NavMenu();

