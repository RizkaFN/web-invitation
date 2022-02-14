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
              url : "https://www.google.com/maps/place/Jl.+Wr.+Asem+ke+Timur+No.88,+RT.08%2FRW.02,+Nglandean,+Malasan,+Kec.+Durenan,+Kabupaten+Trenggalek,+Jawa+Timur+66381/@-8.1206197,111.8228438,20.44z/data=!4m5!3m4!1s0x2e791df55e3d9d83:0xf808524431b27c62!8m2!3d-8.1206391!4d111.8227379?hl=en",
              address: 'Jl. Wr. Asem ke Timur No.88',
              lat: -8.120648128812626,
              lng:  111.82273194540633
            },
            covid_prokes : {
              one : 'Wajib memakai masker.',
              two : 'Setiap tamu dilakukan pengecekan suhu.',
              three : 'Disediakan hand sanitizer di lokasi acara.',
              four : 'Pembatasan jarak dan pembatasan jumlah tamu.',
              five : 'Dipantau tim satgas covid.',
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