import React from "react";
import './people.css';

class People extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bride : '',
            groom : ''
        }
    }

    componentDidMount = () => {
        this.setState({
            bride : this.props.data.bride,
            groom : this.props.data.groom
        })
    }
    render(){
      return(
        <div id="people-page" className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="person">
            <h1 className="capitalize">{this.state.bride.name}</h1>
            <h6 >Putri dari Bapak {this.state.bride.dad} & Ibu {this.state.bride.mom}</h6>
            <h6 className="capitalize">{this.state.bride.address}</h6>
          </div>
          <div>
            <h6>dengan</h6>
          </div>
          <div  className="person">
            <h1 className="capitalize">{this.state.groom.name}</h1>
            <h6>Putra dari Bapak {this.state.groom.dad} & Ibu {this.state.groom.mom}</h6>
            <h6 className="capitalize">{this.state.groom.address}</h6>
          </div>
        </div>
      )
    }
}

export default People;