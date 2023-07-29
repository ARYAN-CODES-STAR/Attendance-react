import React from 'react'
import './Sidebar.css';
import img from '../images/nav_img.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  return (
    <div>
        <nav>
              <ul className="link-list">
                <li><pre> </pre> <i id='fatach' class="fa fa-tachometer" aria-hidden="true"></i> <a href="#">Dashboard</a></li>
                <li><pre> </pre> <i id='facal' class="fa fa-calendar" aria-hidden="true"></i> <a href="#">Time Table</a></li>
                <li><pre> </pre> <i id='fabo' class="fa fa-book" aria-hidden="true"></i> <a href="#">Classroom</a></li>
                <li><pre> </pre> <i id='facre' class="fa fa-credit-card-alt" aria-hidden="true"></i> <a href="#">Fee Management</a></li>
                <li><pre> </pre> <i id='facach' class="fa fa-calendar-check-o" aria-hidden="true"></i> <a href="#">Attendance</a></li>
                <li><pre> </pre> <i id='faus' class="fa fa-users" aria-hidden="true"></i> <a href="#"> Staff</a></li>
                <li><pre> </pre> <i id='fagra' class="fa fa-graduation-cap" aria-hidden="true"></i> <a href="#">Syllabus</a></li>
                <li><pre> </pre> <i id='fapen' class="fa fa-pencil" aria-hidden="true"></i> <a href="#">Exam and Test</a></li>
                <pre> </pre>
              </ul>


              <img className='nav-img' src={img} alt='nature-image' />
              <hr id="line" />
              <h1 id="name">Aryan.com</h1>
              {/* <h2 id='last'>  Aryan</h2> */}
        </nav>
         
    </div>
  )
}

export default Sidebar;