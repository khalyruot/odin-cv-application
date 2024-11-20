
function PersonalInfo({name, jobTitle}){
    
    return(
       <div id="resume_field">
            <div id="top_basic_info">
                <ul>
                    <li><h1>{name}</h1></li>
                    <li><h2>{jobTitle}</h2></li>
                </ul>
                
                
            </div>
        
       </div>
    );
}

export default Resume_field;