import React, { Component } from "react";
import '../style/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello:''
    };

  }

  componentWillMount(){
    var whenToHello = new Date();
    var tempWhen =whenToHello.getHours();
    console.log(tempWhen);
    if(tempWhen>=6&&tempWhen<=11){
      this.setState({
        hello:'Good monring'
      });
    }
    else if (tempWhen>=11&&tempWhen<=16) {
      this.setState({
        hello:'Good afternoon'
      })
    }
    else if (tempWhen>=16&&tempWhen<=22) {
      this.setState({
        hello:'Good evening'
      })
    }
    else if (tempWhen>=22&&tempWhen<=24||tempWhen>=0&&tempWhen<=6) {
      this.setState({
        hello:'别熬夜啦'
      })
    }
  }

  render(){
    return(
      <div className="newheader">
        <div className="header-area">
          <div className="logo2" />
          <span className="span-style" onClick={()=>(window.location.href="#/custom")} >介绍页</span>
          <span className="span-style" onClick={()=>(window.location.href="#/community")} >社区</span>
          <div className="logReg">
            <div className="teacher-info">
              {this.state.hello}，admin
              <span>|</span>
              <a><img src={require('../img/email.png')} /></a>
              <span>|</span>
              <a href="#/login">退出</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Header;
