import React from "react";
import "./Classlist.css";
// import studentData from "./student_data.json";
import AryanImg from "../images/Aryan.jpeg";
const studentData = [
  { "name": "John Doe", "roll_no": "1", "image": "/images/Aryan.jpeg" },
  { "name": "Jane Smith", "roll_no": "2", "image": "../images      /Aryan.jpeg" },
  { "name": "Michael Johnson", "roll_no": "3", "image": "image_data_103" },
  { "name": "Emily Brown", "roll_no": "4", "image": "image_data_104" },
  { "name": "William Davis", "roll_no": "5", "image": "image_data_105" },
];

function Classlist() {
  const everyOtherStudent = studentData.filter((student, index) => index + 1);
  return (
    <div className="class">
      <h3>
        Class 12 Non-Medical{" "}
        <button className="nm">
          <i id="down_arrow" class="fa fa-angle-down no-border" aria-hidden="true"></i>
        </button>
      </h3>
      <div className="time--span">
        
       <span> <i id="arrow--time--left" class="fa-solid fa-arrow-left"></i> Jan 01,2023 to Jan 7,2023 <i id="arrow--time--left" class="fa-solid fa-arrow-right"></i> </span>
      </div>

      {/* <div class="box">

      </div> */}


       <div class="attendance-table">
         <div class="header">
           <div class="cell">
             {" "}
             <img className="aryan--img" src={AryanImg} alt="ff" /> Aryan Sharma
             01 cccx
           </div>
         </div>
         <div class="row">
           <div class="cell"> <div className="name"><img className="aryan--img" src={AryanImg} alt="ff" /> Name</div> 

           </div>
          <div class="cell">Roll no</div>
           <div class="cell"><img className="aryan--img" src={AryanImg} alt="ff" />Image</div>
         </div>
         <div>
         {everyOtherStudent.map((student, index) => (
           <div class="cell" key={index} >
           <div class="cell"> <img className="aryan--img" src={AryanImg} alt="ff" /></div>
           <div class="cell">{student.roll_no}</div>
           <div class="cell">{student.image}</div>
           </div>
         ))}
         </div>
       </div>
       <h2>Attendance Chart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {Array.from({ length: 10 }).map((_, index) => (
              <th key={index}>Day {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {everyOtherStudent.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              {Array.from({ length: 10 }).map((_, index) => (
                <td key={index}>{student.isPresent ? 'Present' : 'Absent'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
     </div>
   );
 }

 export default Classlist;
