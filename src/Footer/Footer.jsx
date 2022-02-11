import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import './footer.css'

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
      return (
        <nav>
          {/* <img className="icon-initial" alt=""></img> */}
          <h6 className="name-initial">Made with Love 2022</h6>
          <FontAwesomeIcon icon={faCopyright}/>
        </nav>
      );
    }
  }

export default Footer;