import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './header.css'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // nickname : {
            //     one : '',
            //     two : ''
            // }
            nickname_one : '',
            nickname_two : ''
        }
    }

    componentDidMount = () => {
        this.setState({
            nickname_one : this.props.data.bride.nickname,
            nickname_two : this.props.data.groom.nickname
        })
    }
    render() {
      console.log(this.state.nickname_one)
      return (
        <nav>
          <FontAwesomeIcon className="icon" icon={faCoffee} />
          {/* <img className="icon-initial" alt=""></img> */}
          <h6 className="name-initial">{this.state.nickname_one} & {this.state.nickname_two}</h6>
        </nav>
      );
    }
  }

export default Header;