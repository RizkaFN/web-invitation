import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faD, faDove } from '@fortawesome/free-solid-svg-icons'

import './header.css'

class Header extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         // nickname : {
    //         //     one : '',
    //         //     two : ''
    //         // }
    //         nickname_one : '',
    //         nickname_two : ''
    //     }
    // }

    // componentDidMount = () => {
    //     this.setState({
    //         nickname_one : this.props.data.bride.nickname,
    //         nickname_two : this.props.data.groom.nickname
    //     })
    // }
    render() {
      return (
        <nav>
          <FontAwesomeIcon className="icon" icon={faDove} />
          {/* <img className="icon" src="../../public/ring.png" alt=""></img> */}
          <h6 className="name-initial">The Wedding of {this.props.data.bride.nickname} & {this.props.data.groom.nickname}</h6>
        </nav>
      );
    }
  }

export default Header;