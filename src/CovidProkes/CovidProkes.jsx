import React from "react";

class CovidProkes extends React.Component {
    render() {
      const prokes = this.props.data.covid_prokes
  
      console.log(prokes)
  
      return (
        <div>
          <h3>Protokol Covid-19</h3>
          <ul>
            <li>{prokes.one}</li>
            <li>{prokes.two}</li>
          </ul>
        </div>
      );
    }
}

export default CovidProkes;