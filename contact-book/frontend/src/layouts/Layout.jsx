import React from 'react';


function Layout(props) {
    return (
        <div className="content">
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;