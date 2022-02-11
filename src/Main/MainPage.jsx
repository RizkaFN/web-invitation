import React from "react";
import CovidProkes from "../CovidProkes/CovidProkes";
import EventDate from "../EventDate/EventDate";
import Map from "../Map/Map";
import People from "../People/People";

import './main-page.css';

class MainPage extends React.Component {

    render() {
        return (
          <div id="main-page" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <People data={this.props.data} />
            <EventDate data={this.props.data} />
            <Map data={this.state.data} />

            {/* <CovidProkes data={this.state.data} /> */}
          </div>
        );
    }
}

export default MainPage;