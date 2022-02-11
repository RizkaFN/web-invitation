import React from "react";

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
        console.log(this.state.akad)
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <table>
                <tr>
                    <td>Hari, Tanggal</td>
                    <td>Pukul Jam WIB</td>
                    <td>di {this.state.akad.place}</td>
                </tr>
                <tr>
                    <td>Hari, Tanggal</td>
                    <td>Pukul Jam WIB</td>
                    <td>di {this.state.reception.place}</td>
                </tr>
                </table>
            </div>
        );
        }
    }

export default EventDate;