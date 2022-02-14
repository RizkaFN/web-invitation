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
        <>
         <div className="person">
            <h1 className="capitalize">{this.state.bride.name}</h1>
            <p className="content-txt">Putri dari Bapak {this.state.bride.dad} & Ibu {this.state.bride.mom}</p>
            <p className="content-txt capitalize">{this.state.bride.address}</p>
          </div>
          <div>
            <h1 className="content-txt capitalize">&</h1>
          </div>
          <div  className="person">
            <h1 className="content-txt capitalize">{this.state.groom.name}</h1>
            <p className="content-txt">Putra dari Bapak {this.state.groom.dad} & Ibu {this.state.groom.mom}</p>
            <p className="content-txt capitalize">{this.state.groom.address}</p>
          </div>
        </>
      )
    }
}

export default People;