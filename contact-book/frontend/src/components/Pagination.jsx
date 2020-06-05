import React from 'react'
import {Link} from 'react-router-dom'

function Pagination({page,count,docs}) {

    const getPages = () => {
        page = parseInt(page)
        const tpages = Math.ceil(count/docs);
        let start = 1;
        let end = 4;
        if (page > end) {
            start = page - 3;
            end = page;
        }

        let pages = [];
        for(let i=start;i<=end;i++) {
            pages.push(i);
        }

        if(end === page && page < tpages -1 ) {
            pages.push(end + 1)
        }

        return pages.map((val,index) => {
             if(page === val) {
                return (
                    <li className="page-item active" key={index}>
                        <Link className="page-link" to={`/?page=${val}`}>
                            {val}
                        </Link>
                    </li>
                );
             } else {
                return (
                    <li className="page-item" key={index}>
                        <Link className="page-link" to={`/?page=${val}`}>
                            {val}
                        </Link>
                    </li>
                );
             }
        })

    }

    const getEnd = () => {
        count = parseInt(count);
        const tpages = Math.ceil(count/docs);

        if(page < tpages - 1) {
            return (
                <>
                <li className="page-item">
                    <Link className="page-link" to={`/?page=${page}`}>
                        ...
                    </Link>
                </li> 
                <li className="page-item">
                    <Link className="page-link" to={`/?page=${tpages}`}>
                        {tpages}
                    </Link>
                </li>
                </> 
            );
        } else if(page !== tpages){
            return (
                <li className="page-item">
                    <Link className="page-link" to={`/?page=${tpages}`}>
                        {tpages}
                    </Link>
                </li>
            );
        }
    }

    const getStart = () => {
        page = parseInt(page)

        let start = Math.max(1,page - 3);

        if(start !== 1) {
            return (
                <>
                <li className="page-item">
                    <Link className="page-link" to={`/?page=${1}`}>
                        1
                    </Link>
                </li> 
                <li className="page-item">
                    <Link className="page-link" to={`/?page=${page}`}>
                        ...
                    </Link>
                </li>
                </>
            )
        } else {
            return (<></>)
        }
    }

    return (
        <>
        {getStart()}
        {getPages()}
        {getEnd()}
        </>
    )
}

export default Pagination
