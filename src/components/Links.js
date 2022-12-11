import React from "react";


function Links(props){
const links = props.data.links
return (
    
    <h3>Links
    <a href={links.github}> {links.github} </a>
    <a href={links.linkedin}> {links.linkedin} </a>
    </h3>
    
    
)

}

export default Links