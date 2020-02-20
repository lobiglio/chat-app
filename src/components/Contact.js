import React from 'react';
import './Contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { online: this.props.online }
    }
    render() { 
        return (  <div className="Contact">
        <img src={this.props.avatar} className="avatar" alt={this.props.name} />
        <div>
            <h4 className="name"> {this.props.name} </h4>
            <p className="status status-text" onClick={ event => {
                const newline = !this.state.online;
                this.setState({online: newline})
            }} >
                <span className={this.state.online ? 'status-online' : 'status-offline'}></span>
                {this.state.online ? 'online' : 'offline'}
            </p>
        </div>
    </div> );
    }
}
 
export default Contact;
