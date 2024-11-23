import React from 'react';
import './nav.scss';

import {

    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div class="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>
                        Home
                    </NavLink>
                    <NavLink to="/todos" activeClassName="active">
                        Todos
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                    <NavLink to="/user" activeClassName="active">
                        User
                    </NavLink>

                </div>

            </div>
        )
    }
}

export default Nav;