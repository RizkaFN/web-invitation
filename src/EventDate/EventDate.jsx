import React from "react";
import './event-date.css'

class EventDate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            akad : '',
            reception : ''        
        }
    }
    
    componentDidMount = () => {
        this.setState({
            akad : this.props.data.akad,
            reception : this.props.data.reception
        })
    }

    render() {
        return (
            <>
                <div className="date-class">
                    <h5 className="capitalize">Hari, Tanggal</h5>
                    <h5 >Pukul Jam WIB</h5>
                    <h5 className="capitalize">di {this.state.akad.place}</h5>
                </div>
                <div className="date-class">
                    <h5 className="capitalize">Hari, Tanggal</h5>
                    <h5 >Pukul Jam WIB</h5>
                    <h5 className="capitalize">di {this.state.reception.place}</h5>
                </div>
            </>
        );
        }
    }

export default EventDate;