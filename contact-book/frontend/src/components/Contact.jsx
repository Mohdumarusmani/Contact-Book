import React, { PureComponent } from 'react'

class Contact extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            view: false
        }
    }

    toggleView = () => {
        this.setState(prevState => ({
            view: !prevState.view
        }))
    }


    viewDetails = () => {
        const contact = this.props.contact
        if(this.state.view) {
            return (
                <div className="details">
                <div className="row">
                    <div className="col">
                        <i className="fa fa-phone-square" aria-hidden="true">
                        {`  ${contact.phone[0]}`}
                        </i>
                    </div>
                    <div className="col">
                        <i className="fa fa-envelope" aria-hidden="true">
                        {`  ${contact.email[0]}`}
                        </i>  
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <i className="fa fa-phone-square" aria-hidden="true">
                        {`  ${contact.phone[1]}`}
                        </i>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {`Address : ${contact.address}`}
                    </div>
                    <div className="col">
                        {`City : ${contact.city}`}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {`State : ${contact.state}`}
                    </div>
                    <div className="col">
                        {`Country : ${contact.county}`}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {`Company : ${contact.company_name}`}
                    </div>
                </div>
                </div>
            ); 
        }    
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col list-name">
                    {this.props.name}
                    </div>
                    <div className = "col text-right">
                        <button type="button" className="btn  btn-primary btn-sm"
                        onClick={this.toggleView}>
                            View
                        </button>
                        <button type="button" className="btn  btn-info btn-sm"
                        onClick={()=>{this.props.editContact(this.props.contact)}}>
                            Edit
                        </button>
                        <button type="button" className="btn  btn-danger btn-sm"
                        onClick={() => {this.props.deleteContact(this.props.index)}}>
                            Delete
                        </button>
                    </div>
                </div>
                {this.viewDetails()}
            </li>
        )
    }
}

export default Contact
