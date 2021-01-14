import React from 'react';
// import logo from '../images/logo.png';
import './styles/Navbar.css'
import {Link} from 'react-router-dom'
class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/">
                        {/* <img src={logo} alt="" /> */}
                        <span className="font-weight-light">Encabezado </span>
                        <span className="font-weight-bold">de algo</span>

                    </Link>
                </div>
            </div>
            )
    }
}

export default Navbar;