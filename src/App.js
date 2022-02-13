import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MainPage from './Main/MainPage';

class App extends React.Component {
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
              date: '2022-02-22 08:00',
              place: 'Kediaman Bpk. Fahrodin',
            },
            reception: {
              date: '2022-02-22 09:00',
              place: 'Kediaman Bpk. Fahrodin'
            },
            location : {
              url : "https://www.google.com/maps/place/Jl.+Kembar+Sari+Indah+No.19,+Cigereleng,+Kec.+Regol,+Kota+Bandung,+Jawa+Barat+40253/@-6.9453635,107.6096318,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e88dbaf54bf3:0x692fc4e530542178!8m2!3d-6.9453635!4d107.6118205",
              address: 'Jl. kembar Sari Indah',
              lat: -6.945342194768179,
              lng: 107.61182049713892
            },
            covid_prokes : {
              one : 'Memakai masker',
              two : 'Menjaga jarak',
            }
        }
    }
  }
  render(){
    return (
      <>
        <Header data={this.state.data} />
        <MainPage data={this.state.data} />
        <Footer/>
      </>
    );
  }
}

export default App;