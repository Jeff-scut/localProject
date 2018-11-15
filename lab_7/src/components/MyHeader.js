import React, { Component } from "react";
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render(){
    return(
      <div className="newheader">
        <div className="header-area">
          <div className="logo2" />
          <span
            className="span-style"
            onClick={() => (window.location.href = "/course/teacher")}
          >
            我的课程
          </span>
          <span className="span-style">公开课</span>
          <div className="logReg">
            <div className="teacher-info">
              你好，系统管理员
              <span>|</span>
              <a>
                <img src={require('../img/email.png')} />
              </a>
              <span>|</span>
              <a>
                退出
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Header;
