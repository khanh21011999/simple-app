import React from 'react'
function ContactCard(props){
    return(
        <div className='contact-card'>
            <img className='image-cat' src={props.contact.imgUrl}/>
            <h2 >{props.contact.name}</h2>
            <p>{props.contact.andress}</p>
        </div>

    )
}
export default ContactCard;