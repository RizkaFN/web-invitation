import React from "react";
import './event-date.css'
import moment from 'moment/min/moment-with-locales';

moment.locale('id');

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
            akad : {
                day : moment(this.props.data.akad.date).format('dddd'),
                date : moment(this.props.data.akad.date).format('Do MMMM YYYY'),
                time : moment(this.props.data.akad.date).format('HH : ss'),
                place : this.props.data.akad.place
            },
            reception : {
                day : moment(this.props.data.reception.date).format('dddd'),
                date : moment(this.props.data.reception.date).format('Do MMMM YYYY'),
                time : moment(this.props.data.reception.date).format('HH : ss'),
                place : this.props.data.reception.place
            }
        })
    }

    render() {
        return (
            <>
                <div className="date-class">
                    <h1 className="event">Akad Nikah</h1>
                    <p className="capitalize event">Hari {this.state.akad.day}, Tanggal {this.state.akad.date}</p>
                    <p className="capitalize event">Pukul {this.state.akad.time} WIB</p>
                    <p className="capitalize event">di {this.state.akad.place}</p>
                </div>
                <div className="date-class">
                    <h1 className="event">Resepsi</h1>
                    <p className="capitalize event">Hari {this.state.reception.day}, Tanggal {this.state.reception.date}</p>
                    <p className="capitalize event">Pukul {this.state.reception.time} WIB</p>
                    <p className="capitalize event">di {this.state.reception.place}</p>
                </div>
            </>
        );
        }
    }

export default EventDate;