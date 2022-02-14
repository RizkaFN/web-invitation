import React from "react";
import './prokes.css'

class CovidProkes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prokes:''
    }
  }

  componentDidMount = () => {
    this.setState({
      prokes: this.props.data.covid_prokes
    })
  }

  render() {
    return (
      <>
        <div className="prokes">
          <h1 className="prokes-title">Protokol Kesehatan Covid-19</h1>
        </div>
        
        <div>
          <ul className="no-bullets">
            <li>{this.state.prokes.one}</li>
            <li>{this.state.prokes.two}</li>
            <li>{this.state.prokes.three}</li>
            <li>{this.state.prokes.four}</li>
            <li>{this.state.prokes.five}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default CovidProkes;