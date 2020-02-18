import React from 'react';
import './Contact.css'

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} className="avatar" />
            <div>
                <h4 className="name"> {props.name} </h4>
                <p className="status status-text">
                    <span className={props.online ? 'status-online' : 'status-offline'}></span>
                    {props.online ? 'online' : 'offline'}
                </p>
            </div>
        </div>
    )
}

export default Contact;