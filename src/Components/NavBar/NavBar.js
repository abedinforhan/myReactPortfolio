import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
       <Navbar className='navBar pt-2 pb-2'  color="dark"   expand="md">
       
        <NavbarToggler className=' navbar-dark' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto  pt-3 " navbar>
            <NavItem className='mx-4'>
             <Link to='/home'>
               <NavLink  className="text-white">
                 <h3>Home</h3>
               </NavLink>
             </Link>
            </NavItem>
            <NavItem className='mx-4'>
              <Link to='/project'>
                <NavLink  className="text-white">
                  <h3>Projects</h3>               
                 </NavLink>
              </Link>
            </NavItem>
            <NavItem className='mx-4'>
              <Link to='/blog'>
              <NavLink className="text-white">
                <h3>Blog</h3>
              </NavLink>
              </Link>
            </NavItem>
            <NavItem className='mx-4'>
              <Link to='/resume'>
              <NavLink className="text-white ">
                <h3>Resume</h3>
              </NavLink>
              </Link>
            </NavItem>
            <NavItem className='mx-4'>
             <Link to='about'>
             <NavLink className="text-white">
               <h3>Contact Me</h3>
              </NavLink>
             </Link>
            </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
      
  );
};

export default NavBar;