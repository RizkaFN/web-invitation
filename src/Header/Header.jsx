import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // nickname : {
            //     one : '',
            //     two : ''
            // }
            nickname_one : '',
            nickname_two : ''
        }
    }

    componentDidMount = () => {
        this.setState({
            nickname_one : this.props.data.bride.nickname,
            nickname_two : this.props.data.groom.nickname
        })
    }
    render() {
      console.log(this.state.nickname_one)
      return (
        <div>
          <img className="icon-initial" alt=""></img>
          <h6 className="name-initial">{this.state.nickname_one} & {this.state.nickname_two}</h6>
        </div>
      );
    }
  }

export default Header;