import React from 'react';
import Contact from './Contact';

const contacts = [
    {
        avatar:
        "https://randomuser.me/api/portraits/women/85.jpg",
        name:
        "Hazel Franklin",
        online: true
    },
    {
        avatar:
        "https://randomuser.me/api/portraits/women/60.jpg",
        name:
        "Brandy May",
        online: true
    },
    {
        avatar:
        "https://randomuser.me/api/portraits/women/71.jpg",
        name:
        "Alyssa Murphy",
        online: false
    },
    {
        avatar:
        "https://randomuser.me/api/portraits/men/58.jpg",
        name:
        "Steven Frazier",
        online: false
    },
    {
        avatar:
        "https://randomuser.me/api/portraits/women/57.jpg",
        name:
        "Isabella Wilson",
        online: true
    },
]

const ContactList = () => (
    <div>
        {
            contacts.map(contact => (
                <Contact avatar={contact.avatar } 
                name={contact.name} online={contact.online} />
            ))
        }
    </div>
);

export default ContactList;