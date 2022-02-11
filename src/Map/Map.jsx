import React from "react";

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url : '',        
        }
    }
    
    componentDidMount = () => {
        this.setState({
            url : this.props.data.map_url
        })
    }

    render(){   
        return(
            <div className="google-map-code">
            <iframe title='Rumah' src={this.state.url} width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                
            </iframe>
            </div>
        )
    }
}

export default Map;