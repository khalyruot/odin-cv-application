
function Resume_field({name, jobTitle}){
    
    return(
       <div id="resume_field">
            <ul>
                <li><h1>{name}</h1></li>
                <li><h2>{jobTitle}</h2></li>
            </ul>
       </div>
    );
}

export default Resume_field;