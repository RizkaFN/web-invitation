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
        <nav className="footer">
          {/* <img className="icon-initial" alt=""></img> */}
          <h5 className="footnote">Made with Love </h5><FontAwesomeIcon className="copyright-icon" icon={faCopyright}/>
          <h5 className="footnote">2022</h5>
        </nav>
      );
    }
  }

export default Footer;