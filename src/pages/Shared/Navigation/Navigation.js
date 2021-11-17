import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import logo from '../../../images/navlogo (2).png'
import "./Navigation.css"

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <>


      <Navbar className='m-0  p-0' bg="white" variant="dark">
        <Container className='navs'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="80"
              height="80"
              className="d-inline-block logo"
            />{' '}
            <span className='logo-text1'>Wonderful</span><span className='logo-text2'>Car collection</span>
          </Navbar.Brand>

          <div className='d-flex navss '>
            <Link to='/home'><button className='btn link btn-danger'>Home</button></Link>
            <Link to='/products'><button className='btn link btn-danger'>Products</button></Link>


            {
              user?.email ? <div>

                <Link to='/dashbord'><button className='btn link btn-danger'>Dashbord</button></Link>

                <button onClick={logOut} className='btn link btn-danger'>LogOut</button>
                <p>{user.email}</p>
              </div>
                : <Navbar.Text><Link to='/login'><button className='btn link  logs btn-danger'>LogIn</button></Link></Navbar.Text>

            }
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;