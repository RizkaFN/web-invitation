import React from "react";
import CovidProkes from "../CovidProkes/CovidProkes";
import EventDate from "../EventDate/EventDate";
import People from "../People/People";

import './main-page.css';
import StaticMap from "../Map/StaticMap";

class MainPage extends React.Component {

    render() {
        return (
          <div className="container">
              <div className="row-inline">
                <div className="column card">
                  <People data={this.props.data} />
                </div>
                <div className="column card">
                  <EventDate data={this.props.data} />
                </div>
              </div>

              <div className="row-inline">
                <div className="card-map column-other">
                  <StaticMap location={this.props.data.location}></StaticMap>
                </div>
              </div>

              <div className="row-inline">
                <div className="card-p column-other">
                  <CovidProkes data={this.props.data} />
                </div>
              </div>
          </div>
        );
    }
}

export default MainPage;