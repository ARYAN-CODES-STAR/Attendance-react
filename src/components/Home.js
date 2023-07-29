import React from 'react'
import './Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className='attendance'>
        <div className="front">
            {/* <h1>Attendance</h1>
            <button>ss</button> */}
            <div className='front--left'><h1>Attendance</h1></div>
            <div className='front--right'>
            <div>
                <button className='leave--application'>View Leave Application</button>
                
            </div>
            <div>
                <button className='teacher--attendance'>Mark Teacher's Attendance</button>
            </div>
        </div>
        </div>
        
        <pre>     </pre>
        {/* <pre>  </pre> */}
        <ul className='list'>
            <li>All Classes</li>
            <li>Senior Secondary</li>
            <li>Secondary</li>
            <li>Middle</li>
            <li>Primary</li>
            <li>Pre-Primary</li>
        </ul>
        <i class="fa fa-search" aria-hidden="true"></i><input id='search--class' type="text"  /> <button className='but__date'>Date</button> 


<div class="container">
<h3>12 Standard</h3>
  <div class="row">
    <div class="flexbox"> 
        <h3>Non-Medical</h3>
        <p><span>Total No. of students</span> <span id="data">12</span> </p>
        <p><span>Mark attendance</span> <span id='abs'>10</span> </p>
    </div>
    <div class="flexbox">
        <h3>Medical</h3>
        <p><span>Total No. of students</span> <span id="data">12</span> </p>
        <p><span>Mark attendance</span> <span id='abs'>10</span> </p>
    </div>
    <div class="flexbox">
        <h3>Commerce</h3>
        <p><span>Total No. of students</span> <span id="data">12</span> </p>
        <p><span>Mark attendance</span> <span id='abs'>10</span> </p>
    </div>
  </div>
  <h3>11 Standard</h3>
  <div class="row">
    <div class="flexbox">
    <h3>Non-Medical</h3>
        <p><span>Total No. of students</span><span id="data">12</span> </p>
        <p><span>Mark attendance</span> <span id='abs'>10</span> </p>
    </div>
    <div class="flexbox">
        <h3>Medical</h3>
        <p><span>Total No. of students</span><span id="data">12</span> </p>
        <p><span>Mark attendance</span><span id='abs'>10</span></p> </div>
    <div class="flexbox">
    <h3>Commerce</h3>
       <p><span>Total No. of students</span><span id="data">12</span> </p>
        <p><span>Mark attendance</span> <span id='abs'>10</span> </p> 
    </div>
  </div>
</div>

{/* <div class="container"> */}
<h3>10 Standard</h3>
  <div class="row">
    
    <div class="flexbox"> 
    <h3>A Section</h3>
        <p><span>Total No. of students</span> <span id="data">12</span> </p>
        <p><span>Mark attendance</span> <span id='abs'>10</span> </p> </div>
    <div class="flexbox">
    <h3>A Section</h3> 
        <p><span>Total No. of students</span> <span id="data">12</span> </p>
        <p><span>Mark attendance</span> <span id='abs'>10</span></p> </div>
    <div class="flexbox"> 
    <h3>A Section</h3>
        <p><span>Total No. of students</span> <span id="data">12</span> </p>
        <p><span>Mark attendance</span><span id='abs'>10</span></p> </div>
  </div>
  
  {/* <h3>9 Standard</h3> */}
  {/* <div class="row">
  <div class="column">
      <div class="title"><h3>9 Standard</h3></div>
      <div class="flexbox">
      <h3>A Section</h3> 
        <p><span>Total No. of students</span> <span id="data">12</span> </p>
        <p><span>Mark attendance</span><span id='abs'>10</span> </p></div> */}
      {/* <div class="flexbox">Flexbox 2</div> */}
    {/* </div> */}
    {/* <div class="column">
      <div class="title"><h3>8 Standard</h3></div>
      <div class="flexbox"> 
      <h3>A Section</h3>
        <p><span>Total No. of students</span> <span id="data">12</span> </p>
        <p><span>Mark attendance</span><span id='abs'>10</span></p> </div> */}
      {/* <div class="flexbox">Flexbox 4</div> */}
    {/* </div> */}
    {/* <div class="column"> */}
      {/* <div class="title"><h3>7 Standard</h3></div>
      <div class="flexbox">
      <h3>A Section</h3>
      <p><span>Total No. of students</span> <span id="data">12</span> </p>
      <p><span>Mark attendance</span><span id='abs'>10</span></p>
      </div> */}
      {/* <div class="flexbox">Flexbox 6</div> */}
    {/* </div> */}
  {/* </div> */}
{/* // </div> */}

{/* gggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
 */}


    </div>
  )
}

export default Home;