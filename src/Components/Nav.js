import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import '../styles/Nav.css';

class Nav extends Component{
    render(){
        return (
            <nav>
                <h1>SpotOn</h1>
                <button onClick={this.props.librarystatus}>Library <FontAwesomeIcon icon={faMusic}/></button>
            </nav>
        );
    }
}

export default Nav;