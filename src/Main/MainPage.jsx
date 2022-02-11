import React from "react";
import CovidProkes from "../CovidProkes/CovidProkes";
import EventDate from "../EventDate/EventDate";
import Header from "../Header/Header";
import Map from "../Map/Map";
import People from "../People/People";

import './main-page.css';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : {
                bride : {
                  name :'Fitri Nurdiana',
                  nickname: 'Fitri',
                  dad: 'Fahrodin',
                  mom: 'Lilik Purlina',
                  address: 'Ds. Malasan Kec. Durenan Kab. Trenggalek',
                },
                groom: {
                  name: 'Muhammad \'Alwi n. M.',
                  nickname:'Alwi',
                  dad: 'Khoirul Anwar',
                  mom: 'Istofaiyah',
                  address: 'Ds. Malasan Kec. Durenan Kab. Trenggalek',
                },
                akad: {
                  date: '22-02-2020 08:00',
                  place: 'Kediaman Bpk. Fahrodin',
                },
                reception: {
                  date: '22-02-2020 09:00',
                  place: 'Kediaman Bpk. Fahrodin'
                },
                map_url : "https://www.google.com/maps/place/Jl.+Kembar+Sari+Indah+No.19,+Cigereleng,+Kec.+Regol,+Kota+Bandung,+Jawa+Barat+40253/@-6.9453635,107.6096318,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e88dbaf54bf3:0x692fc4e530542178!8m2!3d-6.9453635!4d107.6118205",
                covid_prokes : {
                  one : 'Memakai Masker',
                  two : '',
                }
            }
        }
    }
    render() {
        return (
        <div id="main-page" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="header col-lg-12 col-md-12 col-sm-12 col-xs-12" >
            {/* <Header data={this.state.data} /> */}
          </div>

          <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <People data={this.state.data} />
            <EventDate data={this.state.data} />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {/* <Map data={this.state.data} /> */}
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {/* <CovidProkes data={this.state.data} /> */}
          </div>
        </div>
        );
    }
}

export default MainPage;