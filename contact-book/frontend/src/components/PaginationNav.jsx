import React, { PureComponent } from 'react'
import {Link} from "react-router-dom"

import Pagination from './Pagination'

class PaginationNav extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    getPrevNav = () => {
        const page = this.props.page
        const prev = `/?page=${page-1}`

        if(page > 1) {
            return (
                <li className="page-item">
                    <Link className="page-link" to={prev} aria-label="Previous">
                        <span aria-hidden="true">Previous</span>
                    </Link>
                </li>
            );
        } else {
            return (
                <li className="page-item  disabled">
                    <Link className="page-link" to="/" aria-label="Previous">
                        <span aria-hidden="true">Previous</span>
                    </Link>
                </li>
            )
        }
    }


    getNextNav = () => {
        const page = parseInt(this.props.page)
        const next = `/?page=${page+1}`
        const count = this.props.count
        const docs = this.props.docs;
        let pages = count / docs;

        if(page <= pages) {
            return (
                <li className="page-item">
                    <Link className="page-link" to={next} aria-label="Next">
                        <span aria-hidden="true">Next</span>
                    </Link>
                </li>
            );
        } else {
            return (
                <li className="page-item  disabled">
                    <Link className="page-link" to="/" aria-label="Next">
                        <span aria-hidden="true">Next</span>
                    </Link>
                </li>
            )
        }
    }

    render() {
        return (
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    {this.getPrevNav()}
                    <Pagination page={this.props.page} count={this.props.count} docs={this.props.docs}/>
                    {this.getNextNav()}
                </ul>
            </nav>   
        )
    }
}

export default PaginationNav