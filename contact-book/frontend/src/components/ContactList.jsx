import React, { PureComponent } from 'react'
import Contact from './Contact'

class ContactList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    contacts = () => {
        return this.props.contacts.map((val,index) => {
            return (
                <Contact key={index} index={index} name={`${val.first_name} ${val.last_name}`} contact={val} deleteContact={this.props.deleteContact} editContact={this.props.editContact}/>
            );
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.contacts()}
            </ul>
        )
    }
}

export default ContactList