import React, { PureComponent } from 'react';

import Navbar from 'components/Navbar';
import ContactList from 'components/ContactList'
import PaginationNav from 'components/PaginationNav';

import request from 'utils/request'

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            docs: 8,
            page: 1,
            count: 0,
            contacts: []
        }
    }

    componentDidMount() {
      const params = new URLSearchParams(this.props.location.search); 
      const page = params.get('page') || 1; 
      this.setState({page}, () => {
        this.getContacts();
      })

      this.getContactCount();
    }

    componentDidUpdate(prevprops) {
      if(prevprops.location.search !== this.props.location.search) {
        const params = new URLSearchParams(this.props.location.search); 
        const page = params.get('page');
        this.setState({page},() => {
          this.getContacts();
        })
      }
    }

    getContactCount = () => {
      request.getContactCount((data) => {
        this.setState({count : data})
      });
    }


    getContacts = () => {
      let page = this.state.page || 1
      page = Math.max(1,page)
      
      let docs = this.state.docs;

      request.getContacts((page-1)*docs, docs, (data) => {
          this.setState({
              contacts: data
          })
      })
  }

  addContact = () => {
    var name = prompt("Name")
    var phone = prompt("Phone")
    var email = prompt("Email")
    var address = prompt("Address")
    var city = prompt("City")
    var state = prompt("State")
    var country = prompt("Country")
    var company = prompt("Company")
  }

  editContact = (contact) => {
    var name = prompt("Name",`${contact.first_name} ${contact.last_name}`)
    var phone = prompt("Phone",`${contact.phone[0]}`)
    var email = prompt("Email",`${contact.email[0]}`)
    var address = prompt("Address",`${contact.address}`)
    var city = prompt("City",`${contact.city}`)
    var state = prompt("State",`${contact.state}`)
    var country = prompt("Country",`${contact.county}`)
    var company = prompt("Company",`${contact.company_name}`)
  }

  deleteContact = (index) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.slice(0,index),...prevState.contacts.slice(index+1)]
        }))
  }


    render() {
        return (
          <>
            <div className="row">
              <div className="col">
                  <Navbar title="PHONEBOOK" addContact={this.addContact}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} editContact={this.editContact}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <PaginationNav  page={this.state.page} count={this.state.count} docs={this.state.docs}/>
              </div>
            </div>
          </>
        );
    }
}

export default Home;