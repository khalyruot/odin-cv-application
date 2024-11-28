
import './App.css'
import LeftInformation from './LeftInformation'
import Resume_field from './ResumeField.jsx'
import React, { useState } from 'react';


function App() {

  const[submission_1,setSubmission_1] = useState({
     fName: '',
     jobTitle: ''
  });
  const[submission_2,setSubmission_2] = useState(
    {
      employer: "",
      date:"",
   
    }
  );
  const[submission_3,setSubmission_3] = useState(
    {
      degree:"",
      school:"",
    }
  );

  const[submission_4, setSubmission_4] = useState(["a","b"]);

  const handleFormSubmit_1 = (formData) => {
    setSubmission_1(formData);
    
  }
  
  
  const handleFormSubmit_2 = (formData) => {
    setSubmission_2(formData);
   
  }

  const handleFormSubmit_3 = (formData) => {
    setSubmission_3(formData);
   
  }

  //submission_1.fName = submission_1.fName.toLocaleUpperCase();

  
  

  return (
    <div id="container">
      <div id="leftSide" >
        <div id="basic_info_left"><LeftInformation name_1 = "fName" name_2="jobTitle" Point_1="Enter Your Name: " Point_2="Your Profession: " onSubmit={handleFormSubmit_1} /></div>
        <div id="experience_left"><LeftInformation name_1 = "employer" name_2="date" Point_1="Enter Your Employer Name: " Point_2="Date of Employment: " onSubmit={handleFormSubmit_2} /></div>
        <div id="education_left"><LeftInformation name_1 = "degree" name_2="school"Point_1="Enter Your Degree: " Point_2="Enter Your School Name: " onSubmit={handleFormSubmit_3} /></div>
      </div>
      <div id="rightSide">
        <div id="basic_info_right"><Resume_field name={submission_1.fName} jobTitle={submission_1.jobTitle}/></div>
        <div id="work_experience_info_right"><Resume_field name={submission_2.employer} jobTitle={submission_2.date}/></div>
        <div id="education_right"><Resume_field name={submission_3.degree} jobTitle={submission_3.school}/></div>
      </div>

      <ol>
        {submission_4.map((data,index)=>
        <li key={index}>{data}</li>
        
        )}
      </ol>
     
      
    </div>
   
  )
}

export default App
